How to save image datasets
===========================

.. Configure the camera workspace

Configure the camera ros packages
---------------------------------

1. Clone the camera ros packages from the github repository.

.. code-block:: bash

    $ cd ~/garment_ws/src
    $ git clone git@github.com:smartrobotsdesignlab/realsense-ros.git

2. Build the camera ros packages.

.. code-block:: bash

    $ cd ~/garment_ws
    $ colcon build

3. Source the camera ros packages.

.. code-block:: bash

    $ source ~/garment_ws/install/setup.bash

4. Launch the camera ros packages.

.. code-block:: bash

    $ ros2 launch realsense2_camera rs_launch.py

You can check the camera image data as topics in the terminal.

.. code-block:: bash

    $ ros2 topic list

The camera image data topics are as follows.

.. code-block:: bash

    /top/camera/color/image_raw
    /top/camera/depth/image_rect_raw


.. Preview the camera in Rivz2

Preview the camera in Rivz2
---------------------------

1. Launch the Rivz2.

.. code-block:: bash

    $ rviz2

2. Add the camera image data topics by clicking the "Add" button in the "Displays" panel. 
Then select the "By topic", and find the camera image data topics.

.. Runing the keyboard

Runing the keyboard service to save the image data
--------------------------------------------------

1. Find the scripts to save the image data.

.. code-block:: bash

    $ cd ~/garment_ws/src/realsense-ros/realsense2_camera/scripts
    $ ls

2. Run the image service to save the image data.

.. code-block:: bash

    $ python3 image_saver.py

3. And run the keyboard service to save the image data.

.. code-block:: bash

    $ python3 image_keyboard.py

Now you can type the remote bluetooth keyboard to save the image data.

All of the image will be saved on the "~/Documents/log/Image/" directory.