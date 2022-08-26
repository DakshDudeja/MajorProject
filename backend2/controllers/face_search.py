from pyexpat import model
import face_recognition
import imutils
import pickle
import time
import cv2
import sys
import os
 
# file = sys.argv[1]

cascPathface = "C:/Users/mudit/AppData/Local/Programs/Python/Python310/Lib/site-packages/cv2/data/haarcascade_frontalface_alt2.xml"
#find path of xml file containing haarcascade fileg
# cascPathface = os.path.dirname(
#  cv2._file_) + "/data/haarcascade_frontalface_alt2.xml"
# load the harcaascade in the cascade classifier
faceCascade = cv2.CascadeClassifier(cascPathface)
# load the known faces and embeddings saved in last filez
data = pickle.loads(open('/home/ankit/Desktop/SIH-New-build/backend2/controllers/cyduck_face_enc', "rb").read())
#Find path to the image you want to detect face and pass it here
image = cv2.imread(file)
rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
#convert image to Greyscale for haarcascade
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
#Use Face_recognition to locate faces
boxes = face_recognition.face_locations(rgb,model='hog')
# compute the facial embedding for the face
encodings = face_recognition.face_encodings(rgb, boxes)


# the facial embeddings for face in input
boxes = face_recognition.face_locations(rgb,model='cnnd')

encodings = face_recognition.face_encodings(rgb, boxes)
names = []
# loop over the facial embeddings incase0
# we have multiple embeddings for multiple fcaes
count =0
for encoding in encodings:
    #Compare encodings with encodings in data["encodings"]
    #Matches contain array with boolean values and True for the embeddings it matches closely
    #and False for rest
    matches = face_recognition.compare_faces(data["encodings"],
    encoding)
    #set name =inknown if no encoding matches
    
    name = "Unknown"
    
    count+=1
    # check to see if we have found a match
    if True in matches:
        #Find positions at which we get True and store them
        matchedIdxs = [i for (i, b) in enumerate(matches) if b]

        counts = {}
        # loop over the matched indexes and maintain a count for
        # each recognized face face
        for i in matchedIdxs:
            #Check the names at respective indexes we stored in matchedIdxs
            name = data["names"][i]
            #increase count for the name we got
            counts[name] = counts.get(name, 0) + 1
            #set name which has highest count
            name = max(counts, key=counts.get)

 
        # update the list of names
        
        print(name)
        break