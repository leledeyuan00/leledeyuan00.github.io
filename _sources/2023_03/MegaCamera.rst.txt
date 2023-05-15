Nvidia Microsoft Mega Camera
============================

How to use this camera.

In the official Wiki, it seems that the camera is supported on the Ubuntu 20.04 with Foxy.
So I try to use the Docker to run this package first.

Configuration Docker for Display
--------------------------------

First is to configure the Docker to display the GUI.

    $ xhost +local:docker

Then use the following command to run the Docker.

    $ docker run -it --rm -e DISPLAY=$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix:rw --gpus all xeyes

.. note:: 

    --gpus all must after the -e Environment variables setting.


Then I can run the following command to check the display.

    $ rqt

Enable GPU in Docker
--------------------

.. code-block:: bash

    distribution=$(. /etc/os-release;echo $ID$VERSION_ID) \
      && curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
      && curl -s -L https://nvidia.github.io/libnvidia-container/$distribution/libnvidia-container.list | \
            sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
            sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list

Configuration Environment to enable GPU in Docker

    $ sudo apt-get install nvidia-container-toolkit
    $ sudo systemctl restart docker

Then use the following command to run the Docker.

    $ docker run -it --rm --gpus all -e DISPLAY=$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix:rw osrf/ros:foxy-desktop

Then I can run the following command to check the display.

    $ rqt


Enable Usb in Docker
--------------------

.. code-block:: bash

    $ apt-get update && apt-get install libusb-1.0-0-dev libudev-dev usbutils udev && /lib/systemd/systemd-udevd --daemon

Link `/lib/udev/hwb.d/*.hwbd` to the Docker.
        

Compile the Package
-------------------

.. code-block:: bash

    $ cd ~/ros2_ws/src
    $ rosdep install --from-paths src --ignore-src -r -y

