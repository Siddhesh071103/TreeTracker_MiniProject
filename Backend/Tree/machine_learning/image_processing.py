import numpy as np
import pandas as pd
from collections import Counter
from PIL import Image
from ultralytics import YOLO
from io import BytesIO


def detect_objects(image_file):
    image_data = image_file.read()
    image = Image.open(BytesIO(image_data))
    if image.mode != 'RGB':
        image = image.convert('RGB')

    model = YOLO("best1.pt")
    class_list = ['tree']
    results = model.predict(image)

    boxes_data = results[0].boxes.data
    px = pd.DataFrame(boxes_data).astype("float")

    object_classes = []
    for index, row in px.iterrows():
        d = int(row[5])
        obj_class = class_list[d]
        object_classes.append(obj_class)

    counter = Counter(object_classes)
    object_count_text = "\n".join([f"{obj} count : {count}" for obj, count in counter.items()])

    im_rgb = results[0].plot()
    return object_count_text, im_rgb



