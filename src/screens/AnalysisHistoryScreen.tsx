import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import useAnalysisStore from '../store/analysisStore';

type AnalysisResultScreenRouteProp = RouteProp<RootStackParamList, 'AnalysisResult'>;
type AnalysisResultScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AnalysisResult'>;

// دالة لتحويل النصوص إلى مصفوفة خطوات
const processRoutine = (routine: string | string[] | undefined): string[] => {
  if (Array.isArray(routine)) return routine;
  if (typeof routine === 'string' && routine.trim() !== '' && routine.trim() !== 'غير متاح') {
    return routine.split(/[\n-•*]|\d+\./).filter(Boolean).map(step => step.trim());
  }
  return [];
};

const AnalysisResultScreen = () => {
  const route = useRoute<AnalysisResultScreenRouteProp>();
  const navigation = useNavigation<AnalysisResultScreenNavigationProp>();

  // ✅ تأكد من وجود params، وإعطاء قيم افتراضية إذا لم توجد
  const {
    skinType = 'غير متاح',
    issues = 'غير متاح',
    recommendations = 'غير متاح',
    imageUri = undefined,
    skinTone = 'غير متاح',
    faceShape = 'غير متاح',
    morningRoutine = [],
    eveningRoutine = [],
    productSuggestions = 'غير متاح',
  } = route.params || {};

  const [isLoading, setIsLoading] = useState(true);
  const { setAnalysisData } = useAnalysisStore();

  useEffect(() => {
    setAnalysisData({ skinTone, faceShape, skinType });
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [skinTone, faceShape, skinType]);

  const renderResultSection = (title: string, content: string | string[]) => {
    if (content === 'غير متاح' || (Array.isArray(content) && content.length === 0)) return null;
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {Array.isArray(content)
          ? content.map((item, index) => <Text key={index} style={styles.sectionContent}>{item}</Text>)
          : <Text style={styles.sectionContent}>{content}</Text>}
      </View>
    );
  };

  const handleMorningRoutineButton = () => {
    const steps = processRoutine(morningRoutine);
    if (steps.length === 0) {
      Alert.alert('Routine Not Available', 'There is no morning routine for this analysis.');
    } else {
      navigation.navigate('MorningRoutine', { routine: steps });
    }
  };

  const handleEveningRoutineButton = () => {
    const steps = processRoutine(eveningRoutine);
    if (steps.length === 0) {
      Alert.alert('Routine Not Available', 'There is no evening routine for this analysis.');
    } else {
      navigation.navigate('EveningRoutine', { routine: steps });
    }
  };

  const handleProductButton = () => {
    if (productSuggestions === 'غير متاح') {
      Alert.alert('Products Not Available', 'There are no recommended products for this analysis.');
    } else {
      navigation.navigate('ProductsRecommendations', { productSuggestions });
    }
  };

  const handleBeautySection = () => {
    navigation.navigate('BeautySection', { skinTone, faceShape, skinType });
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#D1A39C" />
        <Text style={styles.loadingText}>Analyzing your skin...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.mainTitle}>Analysis Result</Text>
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}

        {renderResultSection('Skin Type', skinType)}
        {renderResultSection('Issues', issues)}
        {renderResultSection('Recommendations', recommendations)}
        {renderResultSection('Skin Tone', skinTone)}
        {renderResultSection('Face Shape', faceShape)}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleMorningRoutineButton}>
            <Text style={styles.buttonText}>Morning Routine</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleEveningRoutineButton}>
            <Text style={styles.buttonText}>Evening Routine</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleProductButton}>
            <Text style={styles.buttonText}>Products Suggestions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleBeautySection}>
            <Text style={styles.buttonText}>Beauty Section</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { padding: 20, alignItems: 'center' },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  loadingText: { marginTop: 10, fontSize: 18, color: '#666' },
  mainTitle: { fontSize: 28, fontWeight: 'bold', color: '#A66B5A', marginBottom: 20, textAlign: 'center' },
  image: { width: '100%', height: 300, borderRadius: 10, marginBottom: 20 },
  section: { backgroundColor: '#F9F5F0', padding: 15, borderRadius: 10, marginBottom: 15, width: '100%' },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#D1A39C', marginBottom: 5 },
  sectionContent: { fontSize: 16, color: '#666', lineHeight: 24 },
  buttonContainer: { width: '100%', marginTop: 20 },
  button: { backgroundColor: '#D1A39C', paddingVertical: 15, borderRadius: 8, alignItems: 'center', marginBottom: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default AnalysisResultScreen;