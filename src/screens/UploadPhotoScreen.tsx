import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { RootStackParamList } from '../navigation/types';
import { GEMINI_API_KEY } from '@env';

type AnalysisResult = {
  skinType?: string;
  issues?: string;
  recommendations?: string;
  skinTone?: string;
  faceShape?: string;
  morningRoutine?: string[];
  eveningRoutine?: string[];
  productSuggestions?: string;
};

type UploadPhotoScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'UploadPhoto'
>;

const UploadPhotoScreen = () => {
  const navigation = useNavigation<UploadPhotoScreenNavigationProp>();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Access to gallery is needed.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Camera access is needed.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const convertImageToBase64 = async (uri: string) => {
    return await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
  };

  const handleUpload = async () => {
    if (!imageUri) {
      Alert.alert('No Image Selected', 'Please select a photo to analyze.');
      return;
    }

    if (!GEMINI_API_KEY) {
      Alert.alert('Error', 'API key is missing.');
      return;
    }

    setLoading(true);

    try {
      const base64Image = await convertImageToBase64(imageUri);
      
      const requestBody = {
        contents: [
          {
            parts: [
              {
                text: `Analyze the skin in this image. Provide a highly detailed analysis using the following JSON structure ONLY. Ensure the response is a single, valid JSON object without any additional text, markdown, or commentary.
                {
                  "skinType": "Provide the primary skin type (e.g., Oily, Dry, Combination, Normal, Sensitive). Also, include 2-3 sentences of detailed reasoning based on visible characteristics like pore size, oiliness, or dryness.",
                  "issues": "List specific skin issues observed (e.g., Acne, Fine lines, Redness). For each issue, provide a brief 1-2 sentence explanation of its appearance in the photo.",
                  "skinTone": "Provide the skin undertone (e.g., Warm, Cool, Neutral) and a 1-2 sentence reasoning based on visible color.",
                  "faceShape": "Provide the estimated face shape (e.g., Oval, Round, Square, Heart) and a 1-2 sentence reasoning based on facial structure.",
                  "morningRoutine": ["Provide a step-by-step, highly detailed morning skincare routine. Each step should be a separate string in this array, starting with the step number."],
                  "eveningRoutine": ["Provide a step-by-step, highly detailed evening skincare routine. Each step should be a separate string in this array, starting with the step number."],
                  "productSuggestions": "Provide a list of 3-5 specific product categories or key ingredients (e.g., Hyaluronic Acid, Salicylic Acid, Vitamin C Serum) that would be most beneficial, with a short explanation for each."
                }`
              },
              {
                inlineData: {
                  mimeType: 'image/jpeg',
                  data: base64Image,
                },
              },
            ],
          },
        ],
      };
      
      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-goog-api-key': GEMINI_API_KEY,
          },
          body: JSON.stringify(requestBody),
        }
      );
      
      const data = await response.json();
      
      let parsedResult: AnalysisResult = {};
      let geminiText = '';

      if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
        geminiText = data.candidates[0].content.parts[0].text;
      }
      
      if (geminiText) {
        const cleanedText = geminiText.replace(/```json/g, '').replace(/```/g, '').trim();
        try {
          parsedResult = JSON.parse(cleanedText);
        } catch (e) {
          console.error('Failed to parse JSON:', e);
          Alert.alert('Error', `Failed to parse analysis data from Gemini.`);
          setLoading(false);
          return;
        }
      } else {
        Alert.alert('Error', 'No analysis data received from Gemini.');
        setLoading(false);
        return;
      }

      navigation.navigate('AnalysisResult', {
        skinType: parsedResult.skinType || 'غير متاح',
        issues: parsedResult.issues || 'غير متاح',
        recommendations: parsedResult.recommendations || 'غير متاح',
        skinTone: parsedResult.skinTone || 'غير متاح',
        faceShape: parsedResult.faceShape || 'غير متاح',
        morningRoutine: parsedResult.morningRoutine || [],
        eveningRoutine: parsedResult.eveningRoutine || [],
        productSuggestions: parsedResult.productSuggestions || 'غير متاح',
        imageUri,
      });
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to analyze the image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Photo for Analysis</Text>
      <Text style={styles.subtitle}>
        Take a selfie or choose one from your gallery to analyze your skin.
      </Text>

      <TouchableOpacity style={styles.button} onPress={takePhoto}>
        <Text style={styles.buttonText}>Take Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Choose from Gallery</Text>
      </TouchableOpacity>

      {imageUri && (
        <>
          <Image source={{ uri: imageUri }} style={styles.previewImage} />
          <TouchableOpacity style={styles.uploadButton} onPress={handleUpload} disabled={loading}>
            {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Upload Photo</Text>}
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#333', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 20, textAlign: 'center' },
  button: { backgroundColor: '#D1A39C', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 8, alignItems: 'center', marginBottom: 15 },
  uploadButton: { backgroundColor: '#A66B5A', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  previewImage: { width: 250, height: 250, borderRadius: 10, marginTop: 20 },
});

export default UploadPhotoScreen;