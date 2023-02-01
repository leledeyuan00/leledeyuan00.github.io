Robot Vision for Garment Manipulation
=====================================


Calibration
-----------

The first thing to do is to calibrate the camera with robot frame. And also to calibrate two robots each other with base frame.

This can be done by using the moveit calibration plugin.


Azure Kinetic camera
--------------------

Setup Environment
^^^^^^^^^^^^^^^^^

`Github Official Repository <https://github.com/microsoft/Azure_Kinect_ROS_Driver/tree/humble>`_

Clone the SDK from github

.. code-block:: bash
    
    git clone https://github.com/microsoft/Azure-Kinect-Sensor-SDK.git

Build the Docker file for Ubuntu

.. code-block:: bash

    cd Azure-Kinect-Sensor-SDK/scripts/docker
    chmod 777 setup_ubuntu.sh
    docker build --tag azure_build_env --file ./Dockerfile .

Using the Docker Env to complile the library

.. code-block:: bash

    docker container run --mount type=bind,source=/home/dayuan/Documents/package/Azure-Kinect-Sensor-SDK,target=/home/Azure/ -it azure_build_env

.. warning:: 

    This way is deprecated.



Reference a blog
^^^^^^^^^^^^^^^^

`CSDN using dpkg install <https://blog.csdn.net/OTZ_2333/article/details/124025953>`_

1. From official mirror `k4a <https://packages.microsoft.com/ubuntu/18.04/prod/pool/main/libk/>`_ . Download latest libk4a and libk4a-dev.
2. Install the libk4a

.. code-block:: bash

     sudo dpkg -i libk4a1.4_1.4.1_amd64.deb
     sudo dpkg -i libk4a1.4-dev_1.4.1_amd64.deb

.. note:: 

    I use the ROS2 to control the camera. So I don't need to install k4a-tools. This tool needs a library called libsounds1 which is not available in Ubuntu 22.04. I must change the mirror to the 20.04 temporarily.
    It is dangerous.

Config the dev rule
^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

    sudo cp config/99-k4a.rules /etc/udev/rules.d/
    sudo udevadm control --reload-rules && udevadm trigger

The ROS2 Package
^^^^^^^^^^^^^^^^

clone the package from github: `Azure_Kinect_ROS_Driver <https://github.com/microsoft/Azure_Kinect_ROS_Driver.git>`_

.. code-block:: bash

    git clone https://github.com/microsoft/Azure_Kinect_ROS_Driver.git

.. code-block:: bash

    git checkout humble


In ROS2 package, the default mode of 3d is **WFOV_UNBINNED**. The fast frequency of this mode is 15Hz. So I change the mode to **NFOV_UNBINNED**.

For using this image topic, I need to change the qos of the subscription to the ReliabilityPolicy::RELIABLE. The default is best effort, I don't know why it is very bad in this mode.

This might be the problem in its ros2 pacakge. Maybe I can fix it latter.