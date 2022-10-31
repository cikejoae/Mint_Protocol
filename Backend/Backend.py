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
        
        
        #MAIN PANEL
        self.Vincentvangoghcollection_state = 0
        self.Picassocollection_state = 0
        self.Claudemonetcollection_state = 0
        self.Edvardmunchcollection_state = 0
        self.Renoircollection_state = 0
        self.Salvadordalicollection_state = 0
        self.Davincicollection_state = 0
        self.Rembrandcollection_state = 0
        self.mainpanel=[]
        
        #Style tranfer
        self.Style_transfer=0
        
        
    def execution(self):
        
        
        
        print("Iniciando procesamiento de este panel")
        
        print(self.mainpanel)
        
        if (len(self.mainpanel) > 0) and  (len(self.mainpanel) < 3):
            
            self.n=0#Number process
        
            for i in self.mainpanel:
                
                print("Procesando",i)
                self.n += 1
            
                lr=0.05
                self.Style_tranfer(i,lr,self.n)
                time.sleep(5)
            
                
        if (len(self.mainpanel) > 3):
             
             Newpanel=[self.mainpanel[-1],self.mainpanel[-2],self.mainpanel[-3]]
             
             print(Newpanel)
             
        if (len(self.mainpanel) == 0):
             
             print("Panel sin elementos de estilo...")
             
             
        #Reset panel 
        self.mainpanel=[]
        self.n=0#Number process
    

        
        
    def Multiprocess(self):
        
        print("Panel actual")
        print(self.mainpanel)
        

        self.Vincentvangoghcollection=["Vincent_van_gogh_collection/Irises-1889.jpg","Vincent_van_gogh_collection/landscape-with-house-and-ploughman-1889.jpg","Vincent_van_gogh_collection/paul-gauguin-s-armchair-1888.jpg","Vincent_van_gogh_collection/prisoners-exercising-prisoners-round-1890.jpg","Vincent_van_gogh_collection/red-vineyards-at-arles-1888.jpg","Vincent_van_gogh_collection/self-portrait-1887.jpg","Vincent_van_gogh_collection/self-portrait-with-bandaged-ear-1889.jpg","Vincent_van_gogh_collection/StarryNight.jpg","Vincent_van_gogh_collection/still-life-vase-with-fifteen-sunflowers-1888.jpg","Vincent_van_gogh_collection/wheatfield-with-crows-1890.jpg"]
           
        if self.Vincentvangoghcollection_state != 0 :
            
            self.mainpanel.append(self.Vincentvangoghcollection[self.Vincentvangoghcollection_state-1])
            self.Vincentvangoghcollection_state = 0
    
            
            print(self.mainpanel)
            
            
        self.Picassocollection=["Pablo_picasso_collection/cat-catching-a-bird-1939.jpg","Pablo_picasso_collection/child-with-dove-1901.jpg","Pablo_picasso_collection/figures-at-the-seaside-1931.jpg","Pablo_picasso_collection/girl-on-the-ball-1905.jpg","Pablo_picasso_collection/mujeres_de_argel_picasso.jpg","Pablo_picasso_collection/old-guitarist-chicago-1903.jpg","Pablo_picasso_collection/portrait-of-ambroise-vollard-1910.jpg","Pablo_picasso_collection/portrait-of-dora-maar-1937.jpg","Pablo_picasso_collection/Portrait-of-woman-in-dhermine-pass-1937.jpg","Pablo_picasso_collection/the-girls-of-avignon-1907.jpg"]
           
        if self.Picassocollection_state != 0 :
            
            self.mainpanel.append(self.Picassocollection[self.Picassocollection_state-1])
            self.Picassocollection_state = 0
           
            
            print(self.mainpanel)
            
            
        self.Claudemonetcollection=["Claude_monet_collection/autumn-on-the-seine-at-argenteuil-1873.jpg","Claude_monet_collection/camille-with-green-parasol-1876.jpg","Claude_monet_collection/claude-monet-irises-in-monets-garden-1899.jpg","Claude_monet_collection/impression-sunrise-1872.jpg","Claude_monet_collection/madame-monet-and-child-1875.jpg","Claude_monet_collection/poplars-at-giverny-1887.jpg","Claude_monet_collection/snow-at-argenteuil-1875.jpg","Claude_monet_collection/the-boat-studio-1876.jpg","Claude_monet_collection/the-shoot-1876.jpg","Claude_monet_collection/waterloo-bridge-london-1903.jpg"]
           
        if self.Claudemonetcollection_state != 0 :
            
            self.mainpanel.append(self.Claudemonetcollection[self.Claudemonetcollection_state-1])
            self.Claudemonetcollection_state = 0
            
            
            print(self.mainpanel)
            
        
        self.Edvardmunchcollection=["Edvard_munch_collection/august-stindberg-1892.jpg","Edvard_munch_collection/edvard-munch-rosa-meissner.jpg","Edvard_munch_collection/girl-combing-her-hair-1892.jpg","Edvard_munch_collection/morning-1884.jpg","Edvard_munch_collection/portrait-of-the-painter-jensen-hjell-1885.jpg","Edvard_munch_collection/Selvportrett-1926.jpg","Edvard_munch_collection/spring-day-on-karl-johan-street-1890.jpg","Edvard_munch_collection/street-lafayette-1891.jpg","Edvard_munch_collection/the-scream-1893.jpg","Edvard_munch_collection/view-over-the-rover-at-st-cloud-1890.jpg"]
           
        if self.Edvardmunchcollection_state != 0 :
            
            self.mainpanel.append(self.Edvardmunchcollection[self.Edvardmunchcollection_state-1])
            self.Edvardmunchcollection_state = 0
            
            
            print(self.mainpanel)
            
            
            
        self.Renoircollection=["Pierre_auguste_renoir_collection/banks-of-the-seine-at-champrosay-1876.jpg","Pierre_auguste_renoir_collection/by-the-fireside-1875.jpg","Pierre_auguste_renoir_collection/by-the-seashore-1883.jpg","Pierre_auguste_renoir_collection/girl-gathering-flowers-1872.jpg","Pierre_auguste_renoir_collection/girl-with-a-dog-1875.jpg","Pierre_auguste_renoir_collection/jeanne-samary-in-a-low-necked-dress-1877.jpg","Pierre_auguste_renoir_collection/self-portrait-with-a-white-hat-1910.jpg","Pierre_auguste_renoir_collection/the-duck-pond-1873.jpg","Pierre_auguste_renoir_collection/the-seine-at-argenteuil-1875.jpg","Pierre_auguste_renoir_collection/young-woman-with-a-dog-1876.jpg","Pierre_auguste_renoir_collection/young-woman-with-a-japanese-umbrella-1876.jpg"]
            
        if self.Renoircollection_state != 0 :
             
             self.mainpanel.append(self.Renoircollection[self.Renoircollection_state-1])
             self.Renoircollection_state = 0
            
             
             print(self.mainpanel)
             
             
             
        self.Salvadordalicollection=["Salvador_dali_collection/3salvador-dali-peyzazh-bliz-figerasa-1910.jpg","Salvador_dali_collection/boat-1918.jpg","Salvador_dali_collection/Dream_for_bee_1944.jpg","Salvador_dali_collection/landscape-1916.jpg","Salvador_dali_collection/landscape-near-ampurdan-1914.jpg","Salvador_dali_collection/llane-beach-cadaques-1919.jpg","Salvador_dali_collection/Persistencia_de_la_memoria.jpg","Salvador_dali_collection/portdogue-1918.jpg","Salvador_dali_collection/the-disintegration-of-the-persistence-of-memory-1952.jpg","Salvador_dali_collection/the-great-masturbator-1929.jpg"]
            
        if self.Salvadordalicollection_state != 0 :
             
             self.mainpanel.append(self.Salvadordalicollection[self.Salvadordalicollection_state-1])
             self.Salvadordalicollection_state = 0
            
             
             print(self.mainpanel)
             
             
             
        self.Davincicollection=["Leonardo_davinci_collection/da-vinci-vitruve-luc-viatour.jpg","Leonardo_davinci_collection/drapery-for-a-seated-1470.jpg","Leonardo_davinci_collection/mona-lisa.1503.jpg","Leonardo_davinci_collection/profile-of-a-warrior-in-helmet-1472.jpg","Leonardo_davinci_collection/study-of-hands-1474.jpg","Leonardo_davinci_collection/the-baptism-of-christ-c-1475.png","Leonardo_davinci_collection/the-madonna-of-the-carnation-1480.jpg","Leonardo_davinci_collection/the-lady-with-the-ermine-cecilia-gallerani-1496.jpg","Leonardo_davinci_collection/Autorretrato.jpg"]
             
        if self.Davincicollection_state != 0 :
              
              self.mainpanel.append(self.Davincicollection[self.Davincicollection_state-1])
              self.Davincicollection_state = 0
             
              
              print(self.mainpanel)
              
              
              
        self.Rembrandcollection=["Rembrandt_collection/beggar-man-and-woman-1628.jpg","Rembrandt_collection/beggar-man-and-woman-behind-a-bank-1630.jpg","Rembrandt_collection/old-man-in-a-long-cloak-sitting-in-an-armchair-1630.jpg","Rembrandt_collection/seated-old-man-1630.jpg","Rembrandt_collection/self-portrait-1630.jpg","Rembrandt_collection/self-portrait-leaning-forward-listening-1628.jpg","Rembrandt_collection/st-jerome-kneeling-1630.jpg","Rembrandt_collection/st-paul-in-meditation-1629.jpg","Rembrandt_collection/the-flight-into-egypt-a-sketch-1627.jpg","Rembrandt_collection/widebrim-1632.jpg"]
              
        if self.Rembrandcollection_state != 0 :
               
               self.mainpanel.append(self.Rembrandcollection[self.Rembrandcollection_state-1])
               self.Rembrandcollection_state = 0
               
               
               print(self.mainpanel)
            
            
            
        
            
            
        
            
        
        
        
        
    def Style_tranfer(self,style_file,lr,n):
        
        

        vgg = models.vgg19(pretrained=True).features


        for parameters in vgg.parameters():
    
            vgg.requires_grad_(False)
    
    
        device= torch.device("cuda" if torch.cuda.is_available() else "cpu" )


        vgg.to(device)



        def load_image(img_path,max_size=400,shape=None):
    
    
            image = Image.open(img_path).convert("RGB")
    
            if max(image.size) > max_size:
        
                size = max_size
        
            else:
        
                size =max(image.size)
        
            if shape is not None:
        
                size=shape
        
        
            in_transform = transforms.Compose((
                transforms.Resize(size),
                transforms.ToTensor(),
                transforms.Normalize((0.5,0.5,0.5),(0.5,0.5,0.5)) 
                ))
    
            image = in_transform(image).unsqueeze(0)
    
    
            return image
        
        def im_convert(tensor):
    
                image=tensor.cpu().clone().detach().numpy()
                image=image.squeeze()
                image=image.transpose(1,2,0)
                image=image*np.array((0.5,0.5,0.5)) + np.array((0.5,0.5,0.5))
                image.clip(0,1)
    
                return image


        def get_features(image,model):
    
                layers={"0":"conv1_1",
                        "5":"conv2_1",
                        "10":"conv3_1",
                        "19":"conv4_1",
                        "21":"conv4_2",
                        "28":"conv5_1"  
                        }
                features={}
    
                for name, layer in model._modules.items():
        
                        image = layer(image)
        
                        if name in layers:
            
                            features[layers[name]] = image
            
            
                return features



        if int(n) == 1:            

                content = load_image("../blockchain_integration/public/images/photo.jpg").to(device)
                
        elif int(n) > 1:
            
                content = load_image("./images/photo" + str(int(n)-1)+ ".jpg").to(device)
                
                print("Procesando","./images/photo" + str(int(n)-1)+ ".jpg" )
        
        
        Style = load_image(str("../blockchain_integration/public/style/") + str(style_file),shape=content.shape[-2:]).to(device)
    
        content_feature = get_features(content, vgg)  
        style_feature = get_features(Style, vgg)
        
        
        def gram_matrix(tensor):
    
                    _,d , h, w = tensor.size()
    
                    tensor = tensor.view( d ,h*w)
                    gram = torch.mm(tensor,tensor.t())
    
                    return gram



        style_grams = {layer: gram_matrix(style_feature[layer]) for layer in style_feature}
    
    
        style_weights = {
                        "conv1_1" : 1,
                        "conv2_1" : 0.75,
                        "conv3_1" : 0.2,
                        "conv4_1" : 0.2,
                        "conv5_1" : 0.2,
    
                            }

        content_weight= 1

        style_weight= 1e6

        target = content.clone().requires_grad_(True).to(device)

        show_every = 30

        optimizer = optim.Adam([target],lr=float(lr))

        steps=30


        height, width, channels = im_convert(target).shape
        image_array=np.empty(shape=(300, height, width, channels ))
        capture_frame=steps/300

        counter = 0


        for ii in range(1, steps + 1):
    
                    target_features =get_features(target, vgg)
    
                    content_loss = torch.mean((target_features["conv4_2"] - content_feature["conv4_2"])**2)
    
                    style_loss=0
    
                    for layer in style_weights:
        
                        target_feature = target_features[layer]
                        target_gram = gram_matrix(target_feature)
        
                        style_gram = style_grams[layer]
        
                        layer_style_loss = style_weights[layer]*torch.mean((target_gram-style_gram)**2)
                        _, d, h, w = target_feature.shape
                        style_loss += layer_style_loss/(d*h*w)
    
                    total_loss = content_weight*content_loss + style_weight*style_loss
    
                    optimizer.zero_grad()
                    total_loss.backward()
    
                    optimizer.step()
    
                    if ii%show_every == 0:
        
                        print("Total loss: ", total_loss.item())
                        print("Iteration: ", ii)
                              
                        figure = plt.figure()
                        plt.imshow(im_convert(target))
                        plt.axis("off")
                        figure.savefig("./images/photo" + str(n)+ ".jpg", dpi=300, bbox_inches="tight")
                        
                        
                        if len(self.mainpanel) == self.n :
                            
                            figure = plt.figure()
                            plt.imshow(im_convert(target))
                            plt.axis("off")
                            figure.savefig("../blockchain_integration/public/images/photo.jpg", dpi=300, bbox_inches="tight")
                                
                        
                            
                            
                            
                        
        
                    if ii%capture_frame == 0:
        
                        image_array[counter] = im_convert(target)
                        counter = counter + 1
    
     
    
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
                        cv2.imwrite("../blockchain_integration/public/images/photo.jpg",frame)
                        cv2.imwrite("./images/photo.jpg",frame)
                        self.button_capture = 0
                        
                        #Filters reset
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
                        
                    if self.Style_transfer == 1:
                        
                        self.execution()
                        
                        self.Style_transfer=0
                        
                        
                        pass
                                              
                    
                    if not flag:
                        
                        continue
                    
                    yield (b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' + bytearray(encodedImage) + b'\r\n')
                    
                    
                
                
                

        @app.route("/")
        def index():
            return render_template("index.html")
            
        @app.route("/video_feed",methods = ['GET'])
        def video_feed():          
            return Response(generate(), mimetype='multipart/x-mixed-replace; boundary=frame')
    
        
        @app.route("/Rembrandcollection",methods = ['POST'])
        def Rembrandcollection():
            print("DATA RECIBIDA")
            self.Rembrandcollection_state = int(request.json)
            print(self.Rembrandcollection_state)
            self.Multiprocess()
            return "ok"
        
        
        
        @app.route("/Salvadordalicollection",methods = ['POST'])
        def Salvadordalicollection():
            print("DATA RECIBIDA")
            self.Salvadordalicollection_state = int(request.json)
            print(self.Salvadordalicollection_state)
            self.Multiprocess()
            return "ok"
        
        
        @app.route("/Renoircollection",methods = ['POST'])
        def Renoircollection():
            print("DATA RECIBIDA")
            self.Renoircollection_state = int(request.json)
            print(self.Renoircollection_state)
            self.Multiprocess()
            return "ok"
        
        
        
        @app.route("/Edvardmunchcollection",methods = ['POST'])
        def Edvardmunchcollection():
            print("DATA RECIBIDA")
            self.Edvardmunchcollection_state = int(request.json)
            print(self.Edvardmunchcollection_state)
            self.Multiprocess()
            return "ok"
        
        
        @app.route("/Claudemonetcollection",methods = ['POST'])
        def Claudemonetcollection():
            print("DATA RECIBIDA")
            self.Claudemonetcollection_state = int(request.json)
            print(self.Claudemonetcollection_state)
            self.Multiprocess()
            return "ok"
        
        
        @app.route("/Picassocollection",methods = ['POST'])
        def Picassocollection():
            print("DATA RECIBIDA")
            self.Picassocollection_state = int(request.json)
            print(self.Picassocollection_state)
            self.Multiprocess()
            return "ok"
        
        @app.route("/Vincentvangoghcollection",methods = ['POST'])
        def Vincentvangoghcollection():
            print("DATA RECIBIDA")
            self.Vincentvangoghcollection_state = int(request.json)
            print(self.Vincentvangoghcollection_state)
            self.Multiprocess()
            return "ok"
        
        @app.route("/Davincicollection",methods = ['POST'])
        def Davincicollection():
            print("DATA RECIBIDA")
            self.Davincicollection_state = int(request.json)
            print(self.Davincicollection_state)
            self.Multiprocess()
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
              
             
         
        @app.route("/button_glasses",methods = ['POST'])
        def button_glasses():
             
             print("DATA RECIBIDA")
             print(request.json)
             self.filter_glasses = int(request.json)
            
         
        @app.route("/button_mustache",methods = ['POST'])
        def button_mustache():
             print("DATA RECIBIDA")
             print(request.json)
             self.filter_mustache = int(request.json)
            
         
        @app.route("/button_focus",methods = ['POST'])
        def button_focus():
             print("DATA RECIBIDA")
             print(request.json)
             self.filter_focus = int(request.json)
            
         
        @app.route("/button_hat",methods = ['POST'])
        def button_hat():
             print("DATA RECIBIDA")
             print(request.json)
             self.filter_hat = int(request.json)
            
         
        @app.route("/button_beard",methods = ['POST'])
        def button_beard():
             
             print("DATA RECIBIDA")
             print(request.json)
             self.filter_beard = int(request.json) 
            

        @app.route("/tranferstyle",methods = ['POST'])
        def tranferstyle():
             
             print("DATA RECIBIDA")
             print(request.json)
             
             self.Style_transfer = int(request.json)
             
             
            

        @app.route("/mainpanel",methods = ['GET'])
        def mainpanel():
            
            
            print("Preparando main panel")
              
            return {"panel1":self.mainpanel[-1],"panel2":self.mainpanel[-2],"panel3":self.mainpanel[-3]}
             
        @app.route("/button_capture",methods = ['POST'])
        def button_capture():
             
             print("DATA RECIBIDA")
             print(request.json)
             
             self.button_capture = int(request.json)
             
             return {"Recibido": True}
        
            
        
        if __name__ == "__main__":
            
            
            app.run()
            
            
        cap.release()
        
        
Videocapture= Videocapture()

Videocapture.Main()

#Videocapture.Style_tranfer()