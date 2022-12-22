Denso Robot Trajectory Controller Development
=============================================

Virtual Forward Dynamics
------------------------
First of all, I decide to use a virtual forward dynamics for solve inverse kinematics probelm.

By the `stefanscherzinger <https://github.com/fzi-forschungszentrum-informatik/cartesian_controllers>`_

First Problem 
^^^^^^^^^^^^^

The first problem when I used this package is that it cannot find the parameter well.
Such as: *robot_description*, and other controller needed parameters.

.. note:: 
    For robot_description, a **Parameter Client** can be used to solve this problem. :ref:`Robot Rescription Parameter <Robot Rescription Parameter>`

.. note:: 
    This is for uncontroller package. If the ROS controller is used here, the parameter can be loaded directly in the controller spawn node which usually combined with the urdf file loaded.

Second Problem
^^^^^^^^^^^^^^

The other parameter also cannot be found.

Does the parameter not be loaded correctly in this controller?

12-16
^^^^^

I can use the cartesian motion controller in this package.



Admittance Controller in ROS2 controllers
-----------------------------------------

There is an official admittance controller in ROS2 controllers.
Maybe I can use this controller first to fammiliar with the ros2 controller.
Then write a customized controller by myself.

There are some function in this controller that seems interesting.

Realtime command
^^^^^^^^^^^^^^^^

It declares a subscriber to update the realtime command variable. And use this variable in the update function.
It will ganranttee the performace of the command generated in a certain loop rate and not depend on the user send frequency.

:ref:`Realtime pub and sub in ROS2 by C++ <Realtime Pub Sub>`


Custom Controller
-----------------

Do I need to write a customized controller?

The current controller in ROS2 controllers cannot work well. 
In Stefan's package, the impedance parameter is setted by ROS2 parameter system. It is not a good way to set the parameter.

1. Maybe service is a better way to set the parameter.
2. And maybe I also will try to combine the Moveit2 Servoing with this controller.
3. And I think it is a good chance to learn how to write a controller in ROS2.
4. I also need to add some velocity limitaion in the controller. Both the cartesian velocity and joint velocity.
5. Another problem, there is no joint control in the motion controller. It is not flexible.
   
.. warning:: 

   No collision detection, if I wrote a controller by myself. This is an important problem.

So I should ensure what should be done in the controller.

    1. The basic cartesian controller should be developed.
    2. Add the impedance control in the controller. And it also canbe selected by setting the parameter.
    3. The parameter of the impedance control should be setted by service in anytime.
    4. The velocity limitaion should be added in the controller, and it also can be setted by parameter.
    5. Try to combine the Moveit2 servoing.
    6. Design joint control interface.

Maybe I can combine the Moveit2 servoing with a customized kinematics solver and its collision detection. Finnally use the trajectory_controller.

Because in the real environment, it is important to ensure robot safe in large workspace, such as go home or go to some work states.

.. note:: 

    Professor asked a question today(2022.12.19): why impedance controller does not need too high frequency?
    
    How to answer this question?
        1. The impedance controller is a kind of feedback controller in the position control interface. It will not change the system state, just make the motion near the current state. So it does not need too high frequency.
        2. The velocity control and force control is the iner loop of the impedance controller. It is executed into the robotic controller itself. It is already a high frequency control and it don't need be considered by us.


Custom IK Solver
----------------
The moveit2 servoing is based on the IK solver from moveit2. So I can write a custome IK solver to combine it.

Progress:

1. Find how to get the H matrix in Stefan's package.
2. Config the moveit2. And try to use the moveit2 in the Gazebo.
   
   It is referenced by `UR moveit config<https://github.com/UniversalRobots/Universal_Robots_ROS2_Driver/tree/main/ur_moveit_config>`
   
3. Config the moveit2 servoing.
4. Develop the custom IK solver.

TODO:
-----

1. Try to use the admittance controller in ROS2 controllers.
2. Try to use the virtual forward dynamics controller.
3. Try to customize a controller by myself.

.. note:: 

    英语写的还是太麻烦了，以后还是中文写好了...

    【不过还是要多写写英语，不然会忘的太快了。】 <- 卧槽 这一句是AI给我写出来的。。我谢谢它了。。。
    好吧 既然AI给我写了 那我还是继续练练英语好了 虽然一堆语法错误 哈哈