Kinematics
==========

Kinematics Interface -- ROS2 controller plugin
----------------------------------------------

This package provides a ROS2 controller plugin for kinematics interface.

It packages the KDL kinematics library as a ROS2 controller plugin.

In this plugin, the cartesian space to joint space is calculated by Damped Least Squares(DLS) method to avoid the singularity.

The equation of the DLS is:

.. math:: 
    
    q = (J^T * J + \lambda^2 * I)^{-1} * J^T * (x_{desired} - x_{current})
    
.. note:: 
    where J is the Jacobian matrix, lambda is the damping factor, I is the identity matrix, and x is the position and orientation of the end-effector.

This plugin can be used as referenced by `Kinematics Interface Github <https://github.com/ros-controls/kinematics_interface/blob/master/kinematics_interface_kdl/test/test_kinematics_interface_kdl.cpp#L32>`_


KDL Kinematics Solver
---------------------

Joint Mass Matrix
^^^^^^^^^^^^^^^^^

The KDL kinematics packages has a function to calculate the joint mass matrix. 

The c++ code is:

.. code:: c++

    JntToMass(const JntArray &q, JntSpaceInertiaMatrix& H);

    The Joint mass equation is as follow:

.. math:: 

    H = \sum_{i=1}^{n} m_i * J_i^T * J_i + \sum_{i=1}^{n} \sum_{j=i+1}^{n} J_i^T * J_j * m_j

.. note:: 

    where :math:`m_i` is the mass of the link, :math:`J_i` is the Jacobian matrix of the link, and :math:`m_j` is the mass of the link's child.

Stefan's method realized by KDL
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The euqtion of Stefan's method is:

.. math:: 

    \ddot{q} = H^{-1} ( J^T f)

.. note:: 

    where :math:`f` is the net force.

The code can be used as follow:

.. code:: c++

    trajectory_msgs::msg::JointTrajectoryPoint ForwardDynamicsSolver::getJointControlCmds(
        rclcpp::Duration period,
        const ctrl::Vector6D& net_force)
    {

        // Compute joint space inertia matrix with actualized link masses
        buildGenericModel();
        m_jnt_space_inertia_solver->JntToMass(m_current_positions,m_jnt_space_inertia);

        // Compute joint jacobian
        m_jnt_jacobian_solver->JntToJac(m_current_positions,m_jnt_jacobian);

        // Compute joint accelerations according to: \f$ \ddot{q} = H^{-1} ( J^T f) \f$
        m_current_accelerations.data = m_jnt_space_inertia.data.inverse() * m_jnt_jacobian.data.transpose() * net_force;

        // Numerical time integration with the Euler forward method
        m_current_positions.data = m_last_positions.data + m_last_velocities.data * period.seconds();
        m_current_velocities.data = m_last_velocities.data + m_current_accelerations.data * period.seconds();
        m_current_velocities.data *= 0.9;  // 10 % global damping against unwanted null space motion.
                                        // Will cause exponential slow-down without input.
        // Make sure positions stay in allowed margins
        applyJointLimits();

        // Apply results
        trajectory_msgs::msg::JointTrajectoryPoint control_cmd;
        for (int i = 0; i < m_number_joints; ++i)
        {
        control_cmd.positions.push_back(m_current_positions(i));
        control_cmd.velocities.push_back(m_current_velocities(i));

        // Accelerations should be left empty. Those values will be interpreted
        // by most hardware joint drivers as max. tolerated values. As a
        // consequence, the robot will move very slowly.
        }
        control_cmd.time_from_start = period; // valid for this duration

        // Update for the next cycle
        m_last_positions = m_current_positions;
        m_last_velocities = m_current_velocities;

        return control_cmd;
    }

Singularity Handle in Moveit2 Servoing
--------------------------------------

In moveit2 servoing, the singularity handle is realized by the SVD first. Then using the last column of U from  SVD of the Jacobian points directly toward or away from the singualrity.

Reference by : `Singularity Handle Github <https://github.com/ros-planning/moveit2/blob/humble/moveit_ros/moveit_servo/src/servo_calcs.cpp#L845>`_