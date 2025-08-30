import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import useAnalysisStore from '../store/analysisStore';

type BeautySectionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'BeautySectionScreen'
>;

const BeautySectionScreen = () => {
  const navigation = useNavigation<BeautySectionScreenNavigationProp>();
  const skinTone = useAnalysisStore(state => state.skinTone);
  const skinType = useAnalysisStore(state => state.skinType);
  const faceShape = useAnalysisStore(state => state.faceShape);

  if (!skinTone || !skinType || !faceShape) {
    Alert.alert(
      "No Analysis Found",
      "Please perform a skin analysis first to use this feature.",
      [
        {
          text: "Start Analysis",
          onPress: () => navigation.navigate('UploadPhotoScreen'),
        },
        {
          text: "Cancel",
          onPress: () => navigation.goBack(),
          style: "cancel",
        },
      ]
    );
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beauty Section</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LipstickColorScreen')}
      >
        <Text style={styles.buttonText}>Lipstick Colors</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EyeshadowScreen')}
      >
        <Text style={styles.buttonText}>Eyeshadows</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FoundationScreen')}
      >
        <Text style={styles.buttonText}>Foundation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#D1A39C',
    borderRadius: 8,
    marginBottom: 15,
    paddingVertical: 15,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#333',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
  },
});

export default BeautySectionScreen;