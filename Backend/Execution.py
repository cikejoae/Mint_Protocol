# -*- coding: utf-8 -*-

import sys
import subprocess
import time



lst=["cmake" , "dlib","opencv-contrib-python","numpy","matplotlib","flask","flask_cors","Pillow","torch","torchvision"]


for pack in lst:
    # implement pip as a subprocess:
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', pack])
    time.sleep(5)
    print("Instalado correctamente",pack)
    
