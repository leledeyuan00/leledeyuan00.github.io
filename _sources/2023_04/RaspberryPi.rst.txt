How to use Raspberry pi as a driver
===================================

This is a simple project to use Raspberry pi as a driver to generate TTL signals and receive commands from a PC.

Configure the Raspberry pi
--------------------------

1. Install the suitable Ubuntu image on the SD card. 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In this case I used Ubuntu server 20.04.2 LTS (32-bit) for Raspberry pi 3.

2. Boot the Raspberry pi and connect it to the network.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. note:: 
    First time booting will take a while to configure the system.
    The default username is ubuntu and the password is ubuntu.

How to connect to the network:

.. code-block:: bash

    sudo vim /etc/netplan/50-cloud-init.yaml

Change the file to:

.. code-block:: yaml

    network:
    ethernets:
        eth0:
            dhcp4: false # Make a static IP address for remote access
            optional: true
            addresses:
                - 192.168.0.50/24 # Change the IP address to your network. In this case I used 192.168.0.xx
    version: 2
    wifis:
        wlan0:
            optional: true
            access-points:
                "WIFI-NAME":
                    password: "WIFI-PASSWORD"
            dhcp4: true # This is for automatic IP address assignment

.. warning:: 
    If you are preparing to use the ROS2 system, maybe you need disable the wifi configure after set up everything.

Then apply the changes:

.. code-block:: bash

    sudo netplan apply

If everything is ok, the ifconfig command should show the IP address of the Raspberry pi.

3. Install the required packages. ROS2 or some others. 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In this case, due to the limited resources of the Raspberry pi, I don't use the ROS2 system. I just use the RPi-GPIO library to control the GPIO pins.

.. code-block:: bash

    sudo apt-get update
    sudo apt-get install python3-pip
    sudo pip3 install RPi.GPIO
    
4. Create a python file that can control the GPIO and receive the command from TCP.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In this example, the command is a hex format. And control a GPIO. The prot is 9900.

.. code-block:: python

    from socketserver import BaseRequestHandler, TCPServer
    import time
    import RPi.GPIO as GPIO

    HAND_M_C_CMD = b'\x01'
    HAND_M_O_CMD = b'\x02'

    HAND_ENABLE = 13


    def gpio_init():
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(LEFT_HAND_ENABLE, GPIO.OUT)

        GPIO.output(LEFT_HAND_ENABLE, False)

    def gpio_destruct():
        GPIO.output(LEFT_HAND_ENABLE, False)
        GPIO.cleanup()

    class EchoHandler(BaseRequestHandler):

        def handle(self):
            gpio_init()
            print('Got connection from', self.client_address)
            while True:
                msg = self.request.recv(8192)
                if not msg:
                    break

                # Left Motor cmd
                if msg == HAND_M_C_CMD:
                    GPIO.output(LEFT_HAND_ENABLE, True)
                elif msg == HAND_M_O_CMD:
                    GPIO.output(LEFT_HAND_ENABLE, False)
            

        def __del__(self):
        #print("Closing server socket:", self.sock)
            gpio_destruct()


    if __name__ == '__main__':

        serv = TCPServer(('', 9900), EchoHandler)
        serv.serve_forever()

5. Run the python file. And test it with any tools.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

6. Configure an autostart script to run the python file when the Raspberry pi boots.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

    sudo vim /etc/systemd/system/hand.server

Add the following content:

.. note:: 
    Change the path to your python file.

.. code-block:: bash

    [Unit]
    Description=Hand Server
    After=network.target

    [Service]
    User=ubuntu
    Type=simple
    ExecStart=/usr/bin/python3 /home/xxxxx.py
    Restart=on-failure

    [Install]
    WantedBy=multi-user.target

Then enable the service:

.. code-block:: bash

    sudo systemctl enable hand.server

And start the service:

.. code-block:: bash

    sudo systemctl start hand.server

Check the status:

.. code-block:: bash

    sudo systemctl status hand.server
    
7. Reboot the Raspberry pi and check the status again.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

    sudo systemctl status hand.server

If everything is ok, the status should be active (running).

8. Configure client to send the command to the Raspberry pi.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In this example, I use the python socket library to send the command to the Raspberry pi, and ROS2 service to receive command.

.. code-block:: python

    import socket

    import rclpy
    from rclpy.node import Node
    from std_srvs.srv import SetBool


    HAND_M_C_CMD = b'\x01'
    HAND_M_O_CMD = b'\x02'

    class HandClass(Node):

        # Initial 
        def __init__(self):
            super().__init__('hand_client')
            self.left_motor_srv = self.create_service(SetBool, '/motor', self.motor)

            # Create a socket
            self.sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            # Connect to the remote host and port
            self.sock.connect(("192.168.0.50", 9900))

            self.get_logger().info("Hand Client is ready....")
        
        def __del__(self):
            self.sock.close()

        def motor(self, request, response):
            if request.data:
                self.sock.send(HAND_M_C_CMD)
                response.message = "Left Motor Closing...."
            else:
                self.sock.send(HAND_M_O_CMD)
                response.message = "Left Motor Opening...."
            response.success = True
            return response

    def main(args=None):
        rclpy.init(args=args)
        hand_client = HandClass()
        rclpy.spin(hand_client)
        hand_client.destroy_node()
        rclpy.shutdown()

    if __name__ == '__main__':
        main()

9. Then you can test the client with the service.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

    ros2 service call /motor std_srvs/srv/SetBool "data: true"
    ros2 service call /motor std_srvs/srv/SetBool "data: false"

If everything is ok, the GPIO should be controlled by the Raspberry pi.


