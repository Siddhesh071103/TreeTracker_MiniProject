import React, { useState } from 'react';
import { View, Button, Image, Platform } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';

export default function App() {
  const [image, setImage] = useState(null);

  const pickImage = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel) {
        setImage(response.uri);
        // Convert image to base64 or FormData and send to Django
        sendImageToDjango(response.uri);
      }
    });
  };

  const sendImageToDjango = async (uri) => {
    // Convert image to base64 or FormData
    let formData = new FormData();
    formData.append('image', {
      uri,
      type: 'image/jpeg',
      name: 'photo.jpg',
    });

    // Send image to Django
    try {
      const response = await axios.post('https://your-django-backend.com/upload-image/', formData);
      console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
