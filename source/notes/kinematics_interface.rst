Kinematics Interface -- ROS2 controller plugin
==============================================

This package provides a ROS2 controller plugin for kinematics interface.

It packages the KDL kinematics library as a ROS2 controller plugin.

In this plugin, the cartesian space to joint space is calculated by Damped Least Squares(DLS) method to avoid the singularity.

The equation of the DLS is:

.. math:: 
    
    q = (J^T * J + \lambda^2 * I)^{-1} * J^T * (x_{desired} - x_{current})
    
.. note:: 
    where J is the Jacobian matrix, lambda is the damping factor, I is the identity matrix, and x is the position and orientation of the end-effector.

This plugin can be used as referenced by `Kinematics Interface Github <https://github.com/ros-controls/kinematics_interface/blob/master/kinematics_interface_kdl/test/test_kinematics_interface_kdl.cpp#L32>`_