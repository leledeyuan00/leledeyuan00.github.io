The issue that using Kazam in 4K monitor
========================================


Install Kazam recorder
----------------------

.. code-block:: bash

    sudo apt-get install kazam

Issue of Kazam in 4K monitor
----------------------------

When using the Kazam in the 4K monitor, there only left top corner of the screen is recorded.

Solution
--------

1. cd Kazam source code directory
   
.. code-block:: bash
 
   cd /usr/lib/python3/dist-packages/kazam/backend/

2. Edit the file ``gstreamer.py`` and ``prefs.py``

.. code-block:: bash
 
   sudo gedit gstreamer.py
    
Into the ``setup_video_source(self):`` function, under the second if-else pair. From:

.. code-block:: python

     def setup_video_source(self):

         if prefs.test:
             self.videosrc = Gst.ElementFactory.make("videotestsrc", "video_src")
             self.videosrc.set_property("pattern", "smpte")
         else:
             self.videosrc = Gst.ElementFactory.make("ximagesrc", "video_src")

         if self.area:
             logger.debug("Capturing area.")
             startx = self.area[0] if self.area[0] > 0 else 0
             starty = self.area[1] if self.area[1] > 0 else 0
             endx = self.area[2]
             endy = self.area[3]
         else:
             startx = self.video_source['x']
             starty = self.video_source['y']
             width = self.video_source['width']
             height = self.video_source['height']
             endx = startx + width - 1
             endy = starty + height - 1
 
To:

.. code-block:: python

   def setup_video_source(self):

      if prefs.test:
         self.videosrc = Gst.ElementFactory.make("videotestsrc", "video_src")
         self.videosrc.set_property("pattern", "smpte")
      else:
         self.videosrc = Gst.ElementFactory.make("ximagesrc", "video_src")

      if self.area:
         logger.debug("Capturing area.")
         startx = self.area[0] if self.area[0] > 0 else 0
         starty = self.area[1] if self.area[1] > 0 else 0
         endx = self.area[2]
         endy = self.area[3]
      else:
         startx = self.video_source['x']
         starty = self.video_source['y']
         width = self.video_source['width']
         height = self.video_source['height']
         endx = startx + width - 1
         endy = starty + height - 1
      
      # Add the following code from here
      scale = self.video_source['scale']
      startx = startx * scale 
      starty = starty * scale 
      endx = endx * scale 
      endy = endy * scale 

        
3. Edit the file ``prefs.py``

.. code-block:: bash
 
   sudo gedit prefs.py 

In the ``get_screens(self):`` function, from:

.. code-block:: python

   # Video source
   for i in range(self.default_screen.get_n_monitors()):
      rect = self.default_screen.get_monitor_geometry(i)
      scale = self.default_screen.get_monitor_scale_factor(i)

      self.logger.debug("  Monitor {0} - X: {1}, Y: {2}, W: {3}, H: {4}".format(i,
                                                                               rect.x,
                                                                               rect.y,
                                                                               rect.width,
                                                                               rect.height))
      self.screens.append({"x": rect.x,
                            "y": rect.y,
                            "width": rect.width,
                            "height": rect.height})


To:

.. code-block:: python

   # Video source
   for i in range(self.default_screen.get_n_monitors()):
      rect = self.default_screen.get_monitor_geometry(i)
      scale = self.default_screen.get_monitor_scale_factor(i)

      self.logger.debug("  Monitor {0} - X: {1}, Y: {2}, W: {3}, H: {4}, H: {5}".format(i,
                                                                                        rect.x,
                                                                                        rect.y,
                                                                                        rect.width,
                                                                                        rect.height,
                                                                                        scale))
      self.screens.append({"x": rect.x,
                            "y": rect.y,
                            "width": rect.width,
                            "height": rect.height,
                            "scale": scale})

4. Then restart