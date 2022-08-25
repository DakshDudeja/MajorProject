# import os
# import cv2
# import sys

# file=sys.argv[1]
# sample = cv2.imread(file)

# best_score = 0
# filename = None
# image = None
# kp1, kp2, mp = None, None, None

# counter =0

# # l = os.listdir("/home/ankit/Desktop/SIH/backend/archive/SOCOFing/Altered")
# # print(l)
# for folder in os.listdir("backend2/controllers/archive/f_archive"):
    
#         #   print('/home/ankit/Desktop/SIH/backend/archive/SOCOFing/Altered/' + folder + '/' +file)
#     print(counter)
#     counter+=1
#     fingerprint_image = cv2.imread('backend2/controllers/archive/f_archive/' + file)
#     print(fingerprint_image)
#     sift = cv2.SIFT_create()

#     keypoint_1, desriptors_1 = sift.detectAndCompute(sample, None)
#     keypoint_2, desriptors_2 = sift.detectAndCompute(fingerprint_image, None)

#     matches = cv2.FlannBasedMatcher({'algorithm': 0, 'trees': 10},
#                 {}).knnMatch(desriptors_1, desriptors_2, k=2)

#     match_points = []

#     for p, q in matches:
#         if p.distance < 0.1 * q.distance:
#             match_points.append(p)

#     keypoints = 0
#     if len(keypoint_1) < len(keypoint_2):
#         keypoints = len(keypoint_2)
#     else:
#             keypoints = len(keypoint_1)
            
            
#             if len(match_points)/keypoints * 100 > best_score:
#                 best_score = len(match_points)/keypoints * 100
#                 filename = file
#                 image = fingerprint_image
#                 kp1 = keypoint_1
#                 kp2 = keypoint_2
#                 mp = match_points

# print(filename)
# print("score: " + str(best_score))

# result = cv2.drawMatches(sample, kp1, image, kp2, mp, None)
# result = cv2.resize(result, (0,0), fx=4, fy=4)
# # print(result)
# # cv2.imshow('result', result)
# # cv2.waitKey(0)
# cv2.destroyAllWindows()


import os
import cv2
import sys


file=sys.argv[1]
sample = cv2.imread(file)

best_score = 0
filename = None
image = None
kp1, kp2, mp = None, None, None


counter =0
for file in os.listdir("D:/SIH_Kanpur/backend2/controllers/archive/f_archive"):
    
    counter+=1
    fingerprint_image = cv2.imread('D:/SIH_Kanpur/backend2/controllers/archive/f_archive/' +file)
    sift = cv2.SIFT_create()

    keypoint_1, desriptors_1 = sift.detectAndCompute(sample, None)
    keypoint_2, desriptors_2 = sift.detectAndCompute(fingerprint_image, None)

    matches = cv2.FlannBasedMatcher({'algorithm': 0, 'trees': 10},
            {}).knnMatch(desriptors_1, desriptors_2, k=2)

    match_points = []

    for p, q in matches:
        if p.distance < 0.1 * q.distance:
            match_points.append(p)

    keypoints =0
    if len(keypoint_1) < len(keypoint_2):
        keypoints = len(keypoint_2)

    else:
        keypoints = len(keypoint_1)

    if len(match_points)/keypoints * 100 > best_score:
        best_score = len(match_points)/keypoints * 100
        filename = file
        image = fingerprint_image
        kp1 = keypoint_1
        kp2 = keypoint_2
        mp = match_points



result = cv2.drawMatches(sample, kp1, image, kp2, mp, None)
result = cv2.resize(result, (0,0), fx=4, fy=4)
print(filename)
print("score: " + str(best_score))
# cv2.waitKey()
cv2.destroyAllWindows()