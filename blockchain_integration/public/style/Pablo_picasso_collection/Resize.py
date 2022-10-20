# -*- coding: utf-8 -*-

import cv2

def Resize(file):
    
    src = cv2.imread(str(file))
    output = cv2.resize(src, (980,980))
 
    cv2.imwrite(str(file),output)
    
    print(file," Redimensionada correctamente")
    
    

lis=["cat-catching-a-bird-1939","child-with-dove-1901","figures-at-the-seaside-1931","girl-on-the-ball-1905","old-guitarist-chicago-1903","portrait-of-ambroise-vollard-1910","portrait-of-dora-maar-1937","Portrait-of-woman-in dhermine-pass-1937","the-girls-of-avignon-1907"]


for i in lis:
    
    print(str(i)+".jpg")
    
    try:
    
        Resize(str(i)+".jpg")
        
    except:
        
        Resize(str(i)+".png")