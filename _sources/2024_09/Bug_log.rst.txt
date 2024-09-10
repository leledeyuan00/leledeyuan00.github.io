Update log 2024-09
===========================

Gazebo bugs
----------------------------

If you upgrade the ROS2, you may encounter the following bugs.

    The Gazebo cannot be launched.

This is because the ros2 update its ros2 control interface then affect the gazebo plugin.

To solve this problem, you can update the gazebo_ws by the following command.

.. code-block:: bash

    cd ~/gazebo_ws/src/gz_ros2_control
    git pull
    cd ~/gazebo_ws/src/ros_gz
    git pull
    cd ~/gazebo_ws

    export IGNITION_VERSION=fortress
    export GZ_VERSION=fortress
    colcon build

Then you can launch the gazebo again.

Realsense on the top Displays
--------------------------------

By adding the transformation of the realsense on the xacro urdf file, the realsense now can be displayed on the gazebo and rviz2.

To show that, plesae update your garment_robot repository, and launch the gazebo following command.

.. code-block:: bash

    ros2 launch garment_bringup garment_bringup_gazebo.launch.py load_camera:=true

And showing the tf information on the rviz2.

.. code-block:: bash

    rviz2

Then adding the tf plugin in the rviz2, you can see the realsense frame with respect to robot base link.

.. Note::
    You can modify the xacro file to change the realsense position and orientation by referring to the calibration file "camera-robot.txt"