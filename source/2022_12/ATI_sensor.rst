ATI Sensor development
======================

It's wired, when I first run the SOEM as root user. I can observe the topic on the narmal user terminal, just cannot read the data on this topic.

And when I tried to set the environment by :

.. code-block:: console
    
    export FASTRTPS_DEFAULT_PROFILES_FILE = xxx

It is work!

BUT! When I try it agian just several hours later, it doesn't work! 
And the scence is so wired that I even cannot see the topic and node if any nodes run on the root.

How to solve it?

.. note:: 
    Maybe I can try to reset the UDP transmission.

.. warning:: 
    Rest no work!

I don't know why that config the xml file will leads sudo cannot run ros2 anymore.

Docker
------

Next I will try to use docker to run the etherCAT package.

There are 3 problems need to be solved.

    1. The ROS2 docker whatever foxy and humble both all of them are based on the newest kernel. But the IGH package needs very old. So I need to build the docker by myself to find a suitable kernel?
    2. How to mapping the network between the docker and the host?
    3. How to communicate with the ROS2?

.. warning:: 
    Docker must use host kernel! Docker is not absolutely isolated.

    IGH cannot be used in the newest kernel!!!!

.. note:: 
    Try to use the SOEM in Docker.

The issue said, some guy can run the node in a Container, and that also can be detected on host.
The code is:

.. code-block:: console
    
    docker run -it --net=host --ipc=host --pid=host --rm osrf/ros:humble-desktop ros2 run demo_nodes_cpp talker

But I can't!

Maybe I should reinstall the ROS2. It's out of my knoledge area....

.. warning:: 
    Don't install Docker Desktop! You can't find the docker0 interface in the host. 
    Because it runs depending the Virtual Machine. Not suitable with Linux.
    And you can't use the --net=host. It's a bug of the Docker Desktop.
    
    Install the Docker Engine to instead of.

Solved!
*******

1. Using the Docker Engine
2. Using the --net=host
3. export FASTRTPS_DEFAULT_PROFILES_FILE 
4. Done!

Next TODO
---------

1. Try to solve the problem of red blink...
2. Try to add ati model in xcaros.
3. Try to wrapper it as a ROS hardware interface, then use it in the ros2_control.