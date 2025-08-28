import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import useAnalysisStore from '../store/analysisStore'; // ✅ استيراد المخزن

type BeautySectionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'BeautySection'
>;

const BeautySectionScreen = () => {
  const navigation = useNavigation<BeautySectionScreenNavigationProp>();
  // ❌ حذف route.params والاعتماد على المخزن
  const skinTone = useAnalysisStore(state => state.skinTone);
  const skinType = useAnalysisStore(state => state.skinType);
  const faceShape = useAnalysisStore(state => state.faceShape);

  // ✅ إضافة منطق التحقق
  if (!skinTone || !skinType || !faceShape) {
    Alert.alert(
      "No Analysis Found",
      "Please perform a skin analysis first to use this feature.",
      [
        {
          text: "Start Analysis",
          onPress: () => navigation.navigate('UploadPhoto'),
        },
        {
          text: "Cancel",
          onPress: () => navigation.goBack(),
          style: "cancel",
        },
      ]
    );
    return null; // 👈 إرجاع null لمنع عرض المحتوى الفارغ
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beauty Section</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LipstickColor', { skinTone: skinTone! })}
      >
        <Text style={styles.buttonText}>Lipstick Colors</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Eyeshadow', { skinTone: skinTone! })}
      >
        <Text style={styles.buttonText}>Eyeshadows</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Foundation', { skinTone: skinTone!, skinType: skinType! })}
      >
        <Text style={styles.buttonText}>Foundation</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  button: {
    width: '100%',
    backgroundColor: '#D1A39C',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BeautySectionScreen;