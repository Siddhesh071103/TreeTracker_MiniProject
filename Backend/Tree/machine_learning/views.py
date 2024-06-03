from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ImageUploadSerializer
from .image_processing import detect_objects

class ImageProcessingView(APIView):
    def post(self, request):
        serializer = ImageUploadSerializer(data=request.data)
        if serializer.is_valid():
            image = serializer.validated_data['image']
            object_count_text, processed_image = detect_objects(image)

            return Response(
                {
                    "object_count": object_count_text
                }, 
                status=status.HTTP_200_OK
            )
            
        else:
            return Response(
                serializer.errors, 
                status=status.HTTP_400_BAD_REQUEST
            )

# class Addimg(APIView):
#     def post(self, request, *args, **kwargs):
#         if 'image' in request.FILES:
#             image_file = request.FILES['image']

#             return Response({'message': 'Image uploaded successfully'}, status=status.HTTP_201_CREATED)
#         else:
#             return Response({'error': 'No image file provided'}, status=status.HTTP_400_BAD_REQUEST)


# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from ultralytics import YOLO
# import pandas as pd

# class ObjectDetector:
#     def __init__(self, model_path, class_list):
#         self.model = YOLO(model_path)
#         self.class_list = class_list

#     def detect_objects(self, image_path):
#         results = self.model.predict(image_path)
#         boxes_data = results[0].boxes.data
#         df = pd.DataFrame(boxes_data).astype("float")
#         object_classes = [self.class_list[int(row[5])] for index, row in df.iterrows()]
#         tree_count = object_classes.count('tree')
#         return tree_count

# @csrf_exempt
# def predict_trees(request):
#     if request.method == 'POST':
#         image_file = request.FILES.get('image')
#         if image_file:
#             # Save the image file temporarily
#             with open('temp_image.jpg', 'wb+') as destination:
#                 for chunk in image_file.chunks():
#                     destination.write(chunk)
#             # Perform object detection
#             detector = ObjectDetector(model_path="best1.pt", class_list=['tree'])
#             tree_count = detector.detect_objects('temp_image.jpg')
#             # Delete the temporary image file
#             os.remove('temp_image.jpg')
#             return JsonResponse({'tree_count': tree_count})
#     return JsonResponse({'error': 'Invalid request'}, status=400)
