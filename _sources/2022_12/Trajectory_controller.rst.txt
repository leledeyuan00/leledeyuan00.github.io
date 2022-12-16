Denso Robot Trajectory Controller Development
=============================================

Virtual Forward Dynamics
------------------------
First of all, I decide to use a virtual forward dynamics for resolve inverse kinematics probelm.

By the `stefanscherzinger <https://github.com/fzi-forschungszentrum-informatik/cartesian_controllers>`_

First Problem 
^^^^^^^^^^^^^

The first problem when I used this package is that it cannot find the parameter well.
Such as: *robot_description*, and other controller needed parameters.

.. note:: 
    For robot_description, a **Parameter Client** can be used to solve this problem. :ref:`Robot Rescription Parameter <Robot Rescription Parameter>`

.. note:: 
    This is for uncontroller package. If the ROS controller is used here, the parameter can be loaded directly in the controller spawn node which usually combained with the urdf file loaded.

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


TODO:
-----

1. Try to use the admittance controller in ROS2 controllers.
2. Try to use the virtual forward dynamics controller.
3. Try to customize a controller by myself.

.. note:: 

    英语写的还是太麻烦了，以后还是中文写好了...

    【不过还是要多写写英语，不然会忘的太快了。】 <- 卧槽 这一句是AI给我写出来的。。我谢谢它了。。。
    好吧 既然AI给我写了 那我还是继续练练英语好了 虽然一堆语法错误 哈哈