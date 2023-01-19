Real Robot Compliant Experiment
===============================

It maybe setup the realtime kernal for the real robot connection.


The Denso Robot SDK
-------------------

The Denso control mode need to be setted to the NOSLAVE mode when meets the error communication.

TODO: Add the mode change to the deconstructor of the class.

I'm trying to find the communication frequency of the real robot. 

I cannot find the frequency, in the official document, they also used 125Hz to send the command to the robot. 
Maybe the control frequency is 125. But I tried the 200Hz before, it also works. In the documents, it seems, if the controller cannot read a new command in its control cycle, it will raise an empty error to the client.

And if the command buffer is full, it also raised an error to the client.

But I don't see any error in the last experiment.
