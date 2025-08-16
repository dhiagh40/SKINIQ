import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type UploadPhotoScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'UploadPhoto'
>;

const UploadPhotoScreen = () => {
  const navigation = useNavigation<UploadPhotoScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Photo for Analysis</Text>
      <Text style={styles.subtitle}>
        Take a selfie or choose one from your gallery to analyze your skin.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AnalysisResult')}
      >
        <Text style={styles.buttonText}>Upload Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#D1A39C',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UploadPhotoScreen;