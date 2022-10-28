# -*- coding: utf-8 -*-
from flask import Flask, render_template, Response, request
from flask_cors import CORS
import cv2
import dlib
import numpy as np
import time
from math import hypot
import torch 
import torch.optim as optim
import torchvision
from torchvision import transforms, models
import matplotlib.pyplot as plt
from PIL import Image
import numpy as np

class Videocapture():
    
    def __init__(self):
        
        
        #Filters
        self.button_capture= 0
        self.filter_nose_pork= 0
        self.filter_gavin=0
        self.filter_dot =0
        self.filter_dot_2 =0
        self.filter_nose_clown=0
        self.filter_glasses=0
        self.filter_mustache=0
        self.filter_focus=0
        self.filter_hat=0
        self.filter_beard=0
        
    def Main(self):
        
        
        app = Flask(__name__)

        CORS(app)


        cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)


      
        nose_image_clown = cv2.imread("./Filters/PAYASO_NEW.png")
        nose_image_pork = cv2.imread("./Filters/COCHINO.png")
        on_face_image_gavin = cv2.imread("./Filters/GAVIN_NEW.png")
        on_face_image_dot = cv2.imread("./Filters/POLKA.png")
        on_face_image_focus = cv2.imread("./Filters/FOCUS.png")
        on_face_image_dot_2 = cv2.imread("./Filters/POLKADOT_NEW.png")
        on_head_glasses=cv2.imread("./Filters/GLASSES.png")
        on_head_mustache=cv2.imread("./Filters/MUSTACHE.png")
        on_face_image_hat= cv2.imread("./Filters/HAT.png")
        on_head_beard = cv2.imread("./Filters/BEARD.png")

        #################
        _, frame = cap.read()
        rows, cols, _ = frame.shape
        nose_mask = np.zeros((rows, cols), np.uint8)
        #############################################

        face_detector= cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")



        # Loading Face detector
        detector = dlib.get_frontal_face_detector()
        predictor = dlib.shape_predictor("shape_predictor_68_face_landmarks.dat")


        def generate():
            
            while True:
                
                ret, frame =cap.read()
                
                nose_mask = np.zeros((rows, cols), np.uint8)
                
                nose_mask.fill(0)
            
                gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
                points = detector(frame)
                for face in points:
                    landmarks = predictor(gray_frame, face)
                    
                    

                    
                    
                    
                    if self.filter_nose_clown == 1 :
                            # Nose coordinates
                            top_nose = (landmarks.part(29).x, landmarks.part(29).y)
                            center_nose = (landmarks.part(30).x, landmarks.part(30).y)
                            left_nose = (landmarks.part(31).x, landmarks.part(31).y)
                            right_nose = (landmarks.part(35).x, landmarks.part(35).y)
                            nose_width = int(hypot(left_nose[0] - right_nose[0],
                                        left_nose[1] - right_nose[1])*2.0)
                            nose_height = int(nose_width*0.90)
                            # New nose position
                            top_left = (int(center_nose[0] - nose_width / 2),
                                           int(center_nose[1] - nose_height / 2))
                            bottom_right = (int(center_nose[0] + nose_width / 2),
                                    int(center_nose[1] + nose_height / 2))
                     
                            # Adding the new nose
                            nose_clown = cv2.resize(nose_image_clown, (nose_width, nose_height))
                            nose_clown_gray = cv2.cvtColor(nose_clown, cv2.COLOR_BGR2GRAY)
                            _, nose_mask = cv2.threshold(nose_clown_gray, 25, 255, cv2.THRESH_BINARY_INV)
                            nose_area = frame[top_left[1]: top_left[1] + nose_height,
                                top_left[0]: top_left[0] + nose_width]
                            nose_area_no_nose = cv2.bitwise_and(nose_area, nose_area, mask=nose_mask)
                            final_nose = cv2.add(nose_area_no_nose, nose_clown)
                            frame[top_left[1]: top_left[1] + nose_height,
                                top_left[0]: top_left[0] + nose_width] = final_nose
                            
                            pass
                            
                        
                    
                    
                    
                    if self.filter_nose_pork == 1: 
                            # Nose coordinates
                            top_nose = (landmarks.part(29).x, landmarks.part(29).y)
                            center_nose = (landmarks.part(30).x, landmarks.part(30).y)
                            left_nose = (landmarks.part(31).x, landmarks.part(31).y)
                            right_nose = (landmarks.part(35).x, landmarks.part(35).y)
                            nose_width = int(hypot(left_nose[0] - right_nose[0],
                                        left_nose[1] - right_nose[1])*2.0)
                            nose_height = int(nose_width*0.90)
                            # New nose position
                            top_left = (int(center_nose[0] - nose_width / 2),
                                           int(center_nose[1] - nose_height / 2))
                            bottom_right = (int(center_nose[0] + nose_width / 2),
                                    int(center_nose[1] + nose_height / 2))
                     
                            # Adding the new nose
                            nose_pig = cv2.resize(nose_image_pork, (nose_width, nose_height))
                            nose_pig_gray = cv2.cvtColor(nose_pig, cv2.COLOR_BGR2GRAY)
                            _, nose_mask = cv2.threshold(nose_pig_gray, 25, 255, cv2.THRESH_BINARY_INV)
                            nose_area = frame[top_left[1]: top_left[1] + nose_height,
                                top_left[0]: top_left[0] + nose_width]
                            nose_area_no_nose = cv2.bitwise_and(nose_area, nose_area, mask=nose_mask)
                            final_nose = cv2.add(nose_area_no_nose, nose_pig)
                            frame[top_left[1]: top_left[1] + nose_height,
                                top_left[0]: top_left[0] + nose_width] = final_nose
                            
                            pass
                        
                        
                    if self.filter_dot == 1: 
                             
                             eyebrow_left= (landmarks.part(24).x, 0.50*landmarks.part(24).y)
                             eyebrow_right= (landmarks.part(19).x, 0.50*landmarks.part(19).y)
                             eyebrow_center= (landmarks.part(27).x, 0.50*landmarks.part(27).y)
                             
                             
                             eyebrow_width = int(hypot(eyebrow_left[0] - eyebrow_right[0],
                                                 eyebrow_left[1] - eyebrow_right[1]))
                             eyebrow_height = int(eyebrow_width)
                             
                             
                             top_left = (int(eyebrow_center[0] - eyebrow_width / 2),
                                                    int(eyebrow_center[1] - eyebrow_height / 2))
                             bottom_right = (int(eyebrow_center[0] + eyebrow_width / 2),
                                             int(eyebrow_center[1] + eyebrow_height / 2))
                            
                         
                               # Adding the new filter
                         
                             On_head = cv2.resize(on_face_image_dot, (eyebrow_width, eyebrow_height))
                             nose_pig_gray = cv2.cvtColor(On_head, cv2.COLOR_BGR2GRAY)
                             _, nose_mask = cv2.threshold(nose_pig_gray, 25, 255, cv2.THRESH_BINARY_INV)
                             nose_area = frame[top_left[1]: top_left[1] + eyebrow_height,
                                         top_left[0]: top_left[0] + eyebrow_width]
                             nose_area_no_nose = cv2.bitwise_and(nose_area, nose_area, mask=nose_mask)
                             On_Head_filter = cv2.add(nose_area_no_nose, On_head)
                             frame[top_left[1]: top_left[1] + eyebrow_height,
                                         top_left[0]: top_left[0] + eyebrow_width] = On_Head_filter
                             
                             
                             #################################################################
                             
                             pass
                        
                    if self.filter_gavin == 1: 
                             
                             eyebrow_left= (landmarks.part(24).x, landmarks.part(24).y)
                             eyebrow_right= (landmarks.part(19).x, landmarks.part(19).y)
                             eyebrow_center= (landmarks.part(27).x, landmarks.part(27).y)
                             
                             
                             eyebrow_width = int(hypot(eyebrow_left[0] - eyebrow_right[0],
                                                 eyebrow_left[1] - eyebrow_right[1])*2.4)
                             eyebrow_height = int(eyebrow_width*1.9)
                             
                             
                             top_left = (int(eyebrow_center[0] - eyebrow_width / 2),
                                                    int(eyebrow_center[1] - eyebrow_height / 2))
                             bottom_right = (int(eyebrow_center[0] + eyebrow_width / 2),
                                             int(eyebrow_center[1] + eyebrow_height / 2))
                                                 
                             On_head = cv2.resize(on_face_image_gavin, (eyebrow_width, eyebrow_height))
                             nose_pig_gray = cv2.cvtColor(On_head, cv2.COLOR_BGR2GRAY)
                             _, nose_mask = cv2.threshold(nose_pig_gray, 25, 255, cv2.THRESH_BINARY_INV)
                             nose_area = frame[top_left[1]: top_left[1] + eyebrow_height,
                                         top_left[0]: top_left[0] + eyebrow_width]
                             nose_area_no_nose = cv2.bitwise_and(nose_area, nose_area, mask=nose_mask)
                             On_Head_filter = cv2.add(nose_area_no_nose, On_head)
                             frame[top_left[1]: top_left[1] + eyebrow_height,
                                         top_left[0]: top_left[0] + eyebrow_width] = On_Head_filter
                             
                             
                             #################################################################
                             
                             pass
                         
                    if self.filter_dot_2 == 1: 
                             
                             eyebrow_left= (landmarks.part(24).x, landmarks.part(24).y)
                             eyebrow_right= (landmarks.part(19).x, landmarks.part(19).y)
                             eyebrow_center= (landmarks.part(27).x, landmarks.part(27).y)
                             
                             
                             eyebrow_width = int(hypot(eyebrow_left[0] - eyebrow_right[0],
                                                 eyebrow_left[1] - eyebrow_right[1])*2.6)
                             eyebrow_height = int(eyebrow_width*1.8)
                             
                             
                             top_left = (int(eyebrow_center[0] - eyebrow_width / 2),
                                                    int(eyebrow_center[1] - eyebrow_height / 2))
                             bottom_right = (int(eyebrow_center[0] + eyebrow_width / 2),
                                             int(eyebrow_center[1] + eyebrow_height / 2))
                            
                         
                               # Adding the new filter
                         
                             On_head = cv2.resize(on_face_image_dot_2, (eyebrow_width, eyebrow_height))
                             nose_pig_gray = cv2.cvtColor(On_head, cv2.COLOR_BGR2GRAY)
                             _, nose_mask = cv2.threshold(nose_pig_gray, 25, 255, cv2.THRESH_BINARY_INV)
                             nose_area = frame[top_left[1]: top_left[1] + eyebrow_height,
                                         top_left[0]: top_left[0] + eyebrow_width]
                             nose_area_no_nose = cv2.bitwise_and(nose_area, nose_area, mask=nose_mask)
                             On_Head_filter = cv2.add(nose_area_no_nose, On_head)
                             frame[top_left[1]: top_left[1] + eyebrow_height,
                                         top_left[0]: top_left[0] + eyebrow_width] = On_Head_filter
                             
                             
                             #################################################################
                             
                             pass
                         
                    if self.filter_mustache == 1: 
                              
                              left= (landmarks.part(54).x, landmarks.part(54).y)
                              right= (landmarks.part(48).x, landmarks.part(48).y)
                              center= (landmarks.part(66).x, landmarks.part(66).y)
                              
                              
                              eyebrow_width = int(hypot(left[0] - right[0],
                                                  left[1] - right[1])*1.3)
                              eyebrow_height = int(eyebrow_width)
                              
                              
                              top_left = (int(center[0] - eyebrow_width / 2),
                                                     int(center[1] - eyebrow_height / 2))
                              bottom_right = (int(center[0] + eyebrow_width / 2),
                                              int(center[1] + eyebrow_height / 2))
                             
                          
                                # Adding the new filter
                          
                              On_head = cv2.resize(on_head_mustache, (eyebrow_width, eyebrow_height))
                              eyebrow_gray = cv2.cvtColor(On_head, cv2.COLOR_BGR2GRAY)
                              _, nose_mask = cv2.threshold(eyebrow_gray, 25, 255, cv2.THRESH_BINARY_INV)
                              nose_area = frame[top_left[1]: top_left[1] + eyebrow_height,
                                          top_left[0]: top_left[0] + eyebrow_width]
                              eyebrow_area_no_nose = cv2.bitwise_and(nose_area, nose_area, mask=nose_mask)
                              On_Head_filter = cv2.add(eyebrow_area_no_nose, On_head)
                              frame[top_left[1]: top_left[1] + eyebrow_height,
                                          top_left[0]: top_left[0] + eyebrow_width] = On_Head_filter
                              
                              
                              #################################################################
                              
                              pass
                         
                    if self.filter_glasses == 1: 
                              
                              eyebrow_left= (landmarks.part(16).x, landmarks.part(16).y)
                              eyebrow_right= (landmarks.part(0).x, landmarks.part(0).y)
                              eyebrow_center= (landmarks.part(27).x, landmarks.part(27).y)
                              
                              
                              eyebrow_width = int(hypot(eyebrow_left[0] - eyebrow_right[0],
                                                  eyebrow_left[1] - eyebrow_right[1]))
                              eyebrow_height = int(eyebrow_width*0.80)
                              
                              
                              top_left = (int(eyebrow_center[0] - eyebrow_width / 2),
                                                     int(eyebrow_center[1] - eyebrow_height / 2))
                              bottom_right = (int(eyebrow_center[0] + eyebrow_width / 2),
                                              int(eyebrow_center[1] + eyebrow_height / 2))
                             
                          
                                # Adding the new filter
                          
                              On_head = cv2.resize(on_head_glasses, (eyebrow_width, eyebrow_height))
                              eyebrow_gray = cv2.cvtColor(On_head, cv2.COLOR_BGR2GRAY)
                              _, nose_mask = cv2.threshold(eyebrow_gray, 25, 255, cv2.THRESH_BINARY_INV)
                              nose_area = frame[top_left[1]: top_left[1] + eyebrow_height,
                                          top_left[0]: top_left[0] + eyebrow_width]
                              eyebrow_area_no_nose = cv2.bitwise_and(nose_area, nose_area, mask=nose_mask)
                              On_Head_filter = cv2.add(eyebrow_area_no_nose, On_head)
                              frame[top_left[1]: top_left[1] + eyebrow_height,
                                          top_left[0]: top_left[0] + eyebrow_width] = On_Head_filter
                              
                              
                              #################################################################
                              
                              pass
                          
                            
                    if self.filter_focus == 1: 
                             
                             eyebrow_left= (landmarks.part(24).x, 0.50*landmarks.part(24).y)
                             eyebrow_right= (landmarks.part(19).x, 0.50*landmarks.part(19).y)
                             eyebrow_center= (landmarks.part(27).x, 0.50*landmarks.part(27).y)
                             
                             
                             eyebrow_width = int(hypot(eyebrow_left[0] - eyebrow_right[0],
                                                 eyebrow_left[1] - eyebrow_right[1]))
                             eyebrow_height = int(eyebrow_width)
                             
                             
                             top_left = (int(eyebrow_center[0] - eyebrow_width / 2),
                                                    int(eyebrow_center[1] - eyebrow_height / 2))
                             bottom_right = (int(eyebrow_center[0] + eyebrow_width / 2),
                                             int(eyebrow_center[1] + eyebrow_height / 2))
                            
                             On_head = cv2.resize(on_face_image_focus, (eyebrow_width, eyebrow_height))
                             nose_pig_gray = cv2.cvtColor(On_head, cv2.COLOR_BGR2GRAY)
                             _, nose_mask = cv2.threshold(nose_pig_gray, 25, 255, cv2.THRESH_BINARY_INV)
                             nose_area = frame[top_left[1]: top_left[1] + eyebrow_height,
                                         top_left[0]: top_left[0] + eyebrow_width]
                             nose_area_no_nose = cv2.bitwise_and(nose_area, nose_area, mask=nose_mask)
                             On_Head_filter = cv2.add(nose_area_no_nose, On_head)
                             frame[top_left[1]: top_left[1] + eyebrow_height,
                                         top_left[0]: top_left[0] + eyebrow_width] = On_Head_filter
                             
                             
                             pass
                         
                    if self.filter_hat == 1: 
                             
                             eyebrow_left= (landmarks.part(16).x, 0.55*landmarks.part(16).y)
                             eyebrow_right= (landmarks.part(0).x, 0.55*landmarks.part(0).y)
                             eyebrow_center= (landmarks.part(27).x, 0.55*landmarks.part(27).y)
                             
                             
                             eyebrow_width = int(hypot(eyebrow_left[0] - eyebrow_right[0],
                                                 eyebrow_left[1] - eyebrow_right[1])*1.70)
                             eyebrow_height = int(eyebrow_width*0.80)
                             
                             
                             top_left = (int(eyebrow_center[0] - eyebrow_width / 2),
                                                    int(eyebrow_center[1] - eyebrow_height / 2))
                             bottom_right = (int(eyebrow_center[0] + eyebrow_width / 2),
                                             int(eyebrow_center[1] + eyebrow_height / 2))
                                                     
                             On_head = cv2.resize(on_face_image_hat, (eyebrow_width, eyebrow_height))
                             nose_pig_gray = cv2.cvtColor(On_head, cv2.COLOR_BGR2GRAY)
                             _, nose_mask = cv2.threshold(nose_pig_gray, 25, 255, cv2.THRESH_BINARY_INV)
                             nose_area = frame[top_left[1]: top_left[1] + eyebrow_height,
                                         top_left[0]: top_left[0] + eyebrow_width]
                             nose_area_no_nose = cv2.bitwise_and(nose_area, nose_area, mask=nose_mask)
                             On_Head_filter = cv2.add(nose_area_no_nose, On_head)
                             frame[top_left[1]: top_left[1] + eyebrow_height,
                                         top_left[0]: top_left[0] + eyebrow_width] = On_Head_filter
                             
                             
                             pass
                         
                    if self.filter_beard == 1: 
                             
                             left= (landmarks.part(12).x, 1.05*landmarks.part(12).y)
                             right= (landmarks.part(4).x, 1.05*landmarks.part(4).y)
                             center= (landmarks.part(57).x, 1.05*landmarks.part(57).y)
                             
                             
                             eyebrow_width = int(hypot(left[0] - right[0],
                                                 left[1] - right[1])*1.5)
                             eyebrow_height = int(eyebrow_width)
                             
                             
                             top_left = (int(center[0] - eyebrow_width / 2),
                                                    int(center[1] - eyebrow_height / 2))
                             bottom_right = (int(center[0] + eyebrow_width / 2),
                                             int(center[1] + eyebrow_height / 2))
                            
                        
                             On_head = cv2.resize(on_head_beard, (eyebrow_width, eyebrow_height))
                             eyebrow_gray = cv2.cvtColor(On_head, cv2.COLOR_BGR2GRAY)
                             _, nose_mask = cv2.threshold(eyebrow_gray, 25, 255, cv2.THRESH_BINARY_INV)
                             nose_area = frame[top_left[1]: top_left[1] + eyebrow_height,
                                         top_left[0]: top_left[0] + eyebrow_width]
                             eyebrow_area_no_nose = cv2.bitwise_and(nose_area, nose_area, mask=nose_mask)
                             On_Head_filter = cv2.add(eyebrow_area_no_nose, On_head)
                             frame[top_left[1]: top_left[1] + eyebrow_height,
                                         top_left[0]: top_left[0] + eyebrow_width] = On_Head_filter
                             
                             
                             pass
                        
                
                if ret:
                    
                    gray = cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)                  
                    faces = face_detector.detectMultiScale(gray,1.3,5)  
                    (flag,encodedImage) =cv2.imencode(".jpg",frame)
                                  
                    if self.button_capture == 1:
                        cv2.imwrite("../blockchain_integration/public/photo.jpg",frame)
                        self.button_capture = 0
                                              
                    
                    if not flag:
                        
                        continue
                    
                    yield (b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' + bytearray(encodedImage) + b'\r\n')
                    
                    
                
                
                

        @app.route("/")
        def index():
            return render_template("index.html")
            
        @app.route("/video_feed",methods = ['GET'])
        def video_feed():          
            return Response(generate(), mimetype='multipart/x-mixed-replace; boundary=frame')
        
        @app.route("/Edvardmunchcollection",methods = ['POST'])
        def Edvardmunchcollection():
            print("DATA RECIBIDA")
            self.Edvardmunchcollection_state = int(request.json)
            print(self.Edvardmunchcollection_state)
            return "ok"
        
        
        @app.route("/Claudemonetcollection",methods = ['POST'])
        def Claudemonetcollection():
            print("DATA RECIBIDA")
            self.Claudemonetcollection_state = int(request.json)
            print(self.Claudemonetcollection_state)
            return "ok"
        
        
        @app.route("/Picassocollection",methods = ['POST'])
        def Picassocollection():
            print("DATA RECIBIDA")
            self.Picassocollection_state = int(request.json)
            print(self.Picassocollection_state)
            return "ok"
        
        @app.route("/Vincentvangoghcollection",methods = ['POST'])
        def Vincentvangoghcollection():
            print("DATA RECIBIDA")
            self.Vincentvangoghcollection_state = int(request.json)
            print(self.Vincentvangoghcollection_state)
            return "ok"
        
        @app.route("/Davincicollection",methods = ['POST'])
        def Davincicollection():
            print("DATA RECIBIDA")
            self.Davincicollection_state = int(request.json)
            print(self.Davincicollection_state)
            return "ok"
        
        @app.route("/button_nose_pork",methods = ['POST'])
        def button_nose_pork():
            print("DATA RECIBIDA")
            print(request.json)
            self.filter_nose_pork = int(request.json)
            return "ok"
        @app.route("/button_nose_clown",methods = ['POST'])
        def button_nose_clown():
             
             print("DATA RECIBIDA")
             print(request.json)
             
            
             self.filter_nose_clown = int(request.json)
             
             return "ok"
            
        @app.route("/button_gavin",methods = ['POST'])
        def button_gavin():
             
             print("DATA RECIBIDA")
             print(request.json)
             self.filter_gavin = int(request.json)
             
             
        @app.route("/button_dot",methods = ['POST'])
        def button_dot():       
             print("DATA RECIBIDA")

             self.filter_dot = int(request.json)
         
        @app.route("/button_dot_2",methods = ['POST'])
        def button_dot_2():
              
              print("DATA RECIBIDA")
              print(request.json)
              
           
              self.filter_dot_2 = int(request.json)
              
              return "ok"
         
        @app.route("/button_glasses",methods = ['POST'])
        def button_glasses():
             
             print("DATA RECIBIDA")
             print(request.json)
             self.filter_glasses = int(request.json)
             return "ok"
         
        @app.route("/button_mustache",methods = ['POST'])
        def button_mustache():
             print("DATA RECIBIDA")
             print(request.json)
             self.filter_mustache = int(request.json)
             return "ok"
         
        @app.route("/button_focus",methods = ['POST'])
        def button_focus():
             print("DATA RECIBIDA")
             print(request.json)
             self.filter_focus = int(request.json)
             return "ok"
         
        @app.route("/button_hat",methods = ['POST'])
        def button_hat():
             print("DATA RECIBIDA")
             print(request.json)
             self.filter_hat = int(request.json)
             return "ok"
         
        @app.route("/button_beard",methods = ['POST'])
        def button_beard():
             
             print("DATA RECIBIDA")
             print(request.json)
             self.filter_beard = int(request.json) 
             return "ok"            
             
        @app.route("/button_capture",methods = ['POST'])
        def button_capture():
             
             print("DATA RECIBIDA")
             print(request.json)
             
             self.button_capture = int(request.json)
             
             return "ok"
        
        if __name__ == "__main__":
            
            
            app.run()
            
            
        cap.release()
        
        
Videocapture= Videocapture()

Videocapture.Main()

#Videocapture.Style_tranfer()