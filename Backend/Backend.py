# -*- coding: utf-8 -*-
from flask import Flask, render_template, Response
import cv2
import dlib
import numpy as np
from math import hypot



app = Flask(__name__)


cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)


face_detector= cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")



# Loading Face detector
detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor("shape_predictor_68_face_landmarks.dat")


def generate():
    
    while True:
        
        ret, frame =cap.read()
        
    
        gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        points = detector(frame)
        for face in points:
            landmarks = predictor(gray_frame, face)
            
       
            
        #######################################################
        
        if ret:
            
            gray = cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
        
            
            faces = face_detector.detectMultiScale(gray,1.3,5)
            for (x,y,w,h) in faces:
                
                cv2.rectangle(frame,(x,y), (x + w, y + h),(0,255,0),2)
                
                cv2.circle(frame,(landmarks.part(18).x,landmarks.part(18).y), 2, (255,0,0), -1)
                cv2.circle(frame,(landmarks.part(19).x,landmarks.part(19).y), 2, (255,0,0), -1)
                cv2.circle(frame,(landmarks.part(20).x,landmarks.part(31).y), 2, (255,0,0), -1)
                
                cv2.circle(frame,(landmarks.part(23).x,landmarks.part(23).y), 2, (255,0,0), -1)
                cv2.circle(frame,(landmarks.part(24).x,landmarks.part(24).y), 2, (255,0,0), -1)
                cv2.circle(frame,(landmarks.part(25).x,landmarks.part(25).y), 2, (255,0,0), -1)
                
                cv2.circle(frame,(landmarks.part(36).x,landmarks.part(36).y), 2, (255,0,0), -1)
                cv2.circle(frame,(landmarks.part(37).x,landmarks.part(37).y), 2, (255,0,0), -1)
                cv2.circle(frame,(landmarks.part(38).x,landmarks.part(38).y), 2, (255,0,0), -1)
                cv2.circle(frame,(landmarks.part(39).x,landmarks.part(39).y), 2, (255,0,0), -1)
                cv2.circle(frame,(landmarks.part(40).x,landmarks.part(40).y), 2, (255,0,0), -1)
                
                
                cv2.circle(frame,(landmarks.part(42).x,landmarks.part(42).y), 2, (255,0,0), -1)
                cv2.circle(frame,(landmarks.part(43).x,landmarks.part(43).y), 2, (255,0,0), -1)
                cv2.circle(frame,(landmarks.part(44).x,landmarks.part(44).y), 2, (255,0,0), -1)
                cv2.circle(frame,(landmarks.part(45).x,landmarks.part(45).y), 2, (255,0,0), -1)
                cv2.circle(frame,(landmarks.part(47).x,landmarks.part(47).y), 2, (255,0,0), -1)
                
                
                cv2.circle(frame,(landmarks.part(31).x,landmarks.part(31).y), 2, (255,0,0), -1)
                cv2.circle(frame,(landmarks.part(30).x,landmarks.part(30).y), 2, (255,0,0), -1)
                cv2.circle(frame,(landmarks.part(35).x,landmarks.part(35).y), 2, (255,0,0), -1)
                
                
                cv2.circle(frame,(landmarks.part(48).x,landmarks.part(48).y), 2, (255,0,0), -1)
                cv2.circle(frame,(landmarks.part(50).x,landmarks.part(50).y), 2, (255,0,0), -1)
                cv2.circle(frame,(landmarks.part(52).x,landmarks.part(52).y), 2, (255,0,0), -1)
                cv2.circle(frame,(landmarks.part(54).x,landmarks.part(54).y), 2, (255,0,0), -1)
                cv2.circle(frame,(landmarks.part(57).x,landmarks.part(57).y), 2, (255,0,0), -1)
                
                
                
              
                
            (flag,encodedImage) =cv2.imencode(".jpg",frame)
            
            if not flag:
                
                continue
            
            yield (b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' + bytearray(encodedImage) + b'\r\n')
            
            
        
        
        

@app.route("/")
def index():
    
    
    return render_template("index.html")
    


@app.route("/video_feed")
def video_feed():
    
   
    return Response(generate(), mimetype='multipart/x-mixed-replace; boundary=frame')


@app.route("/button")
def button():
    
   
    return Response(generate(), mimetype='multipart/x-mixed-replace; boundary=frame')





if __name__ == "__main__":
    
    
    app.run()
    
    
cap.release()