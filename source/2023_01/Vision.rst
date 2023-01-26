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

Build the SDK
^^^^^^^^^^^^^

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


Reference a blog
^^^^^^^^^^^^^^^^

`CSDN using dpkg install <https://blog.csdn.net/OTZ_2333/article/details/124025953>`_

1. From official mirror `k4a-tools <https://packages.microsoft.com/ubuntu/18.04/prod/pool/main/k/k4a-tools/>`_ . Download latest k4a-tools.
2. From official mirror `k4a <https://packages.microsoft.com/ubuntu/18.04/prod/pool/main/libk/>`_ . Download latest libk4a and libk4a-dev.
3. The library depends on **libsoundio1**, it is only on the Ubuntu 20.04. Temporary set the mirror to 20.04, then install 
   
   .. code-block:: bash
        
        sudo apt-get install libsoundio1
4. Install the k4a-tools and libk4a

   .. code-block:: bash

        sudo dpkg -i k4a-tools_1.4.1_amd64.deb
        sudo dpkg -i libk4a1.4_1.4.1_amd64.deb
        sudo dpkg -i libk4a1.4-dev_1.4.1_amd64.deb

5. Change back to 22.04 mirror.

.. warning::

    When I install the library, and upgrade the system, the system will sufferring a weird problem. It offen stuck when I open something even folders, websites or terminal. 
    It is dangerours for control robots, so I will reinstall the system then try to use the docker to run this library.

Config the dev rule
^^^^^^^^^^^^^^^^^^^

    sudo cp config/99-k4a.rules /etc/udev/rules.d/
    sudo udevadm control --reload-rules && udevadm trigger

The ROS2 Package
^^^^^^^^^^^^^^^^

In ROS2 package, the default mode of 3d is **WFOV_UNBINNED**. The fast frequency of this mode is 15Hz. So I change the mode to **NFOV_UNBINNED**.