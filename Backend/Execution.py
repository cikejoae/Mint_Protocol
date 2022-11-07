# -*- coding: utf-8 -*-
"""
Created on Mon Nov  7 12:55:15 2022

@author: monte
"""

import sys
import subprocess
import time



#lst=["cmake" , "dlib","opencv-contrib-python","numpy","matplotlib","flask","flask_cors","Pillow","torch","torchvision"]

lst=["numpy","matplotlib","flask"]

for pack in lst:
    # implement pip as a subprocess:
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', pack])
    
    print(subprocess.check_call([sys.executable, '-m', 'pip', 'install', pack]))
    time.sleep(5)
    print("Instalado correctamente",pack)
    


scripts_paths = ("./Backend.py")

       

procesos = [subprocess.Popen(["python", script]) for script in scripts_paths]

for proceso in procesos:
                proceso.wait()
        
print("Ejecución exitosa....")