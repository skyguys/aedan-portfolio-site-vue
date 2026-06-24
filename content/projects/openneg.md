---
title: "OpenNeg"
title_additional_info: "Film Photography Negative Inversion Tool"
description: >
  A tool I created for myself to invert photo negatives into color positives.
tools: >
  Python, NumPy, OpenCV, OpenGL, Qt
description_long: >
  I originally created this project because I was frustrated with the lack of 
  free-to-use, open-source programs to invert film photos. Film photography 
  inversion isn't as simple as taking a photo and inverting the colors in
  Photoshop- there's a naunced process in balancing color curves to get the
  right information out. Tradtional programs cost quite a bit and required 
  Adobe products, which I do not have on Linux. Thus, I made my own version.
date_range: Sept 2024 - Present
image_path: /images/projects/openneg/
images: 
  - openneg1.png
  - openneg2.png
bulletpoints:
  - Developed a Python application to convert film negatives into positive images
  - Averaging <strong>30% faster computation time</strong> than commonly-used 
      paid software (Negative Lab Pro) in pilot testing, utilizing 
      <strong>multithreading</strong> for faster computation
  - Utilized a <strong>sliding window</strong> to load & unload images, 
      improving memory consumption
  - Implemented the <strong>Qt Library</strong> with <strong>OpenGL</strong> 
      integration for the user interface

---