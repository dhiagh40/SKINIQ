import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'; // فقط useNavigation مستخدم
import { RootStackParamList } from '../navigation/types';
import useAnalysisStore from '../store/analysisStore';

type AnalysisResultScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AnalysisResultScreen'>;

const processRoutine = (routine: string | string[] | undefined): string[] => {
  if (Array.isArray(routine)) return routine;
  if (typeof routine === 'string' && routine.trim() !== '' && routine.trim() !== 'Not Available') {
    return routine.split(/[\n-•*]|\d+\./).filter(Boolean).map(step => step.trim());
  }
  return [];
};

const AnalysisHistoryScreen = () => {
  const navigation = useNavigation() as AnalysisResultScreenNavigationProp;
  const {
    skinType,
    issues,
    recommendations,
    imageUri,
    skinTone,
    faceShape,
    morningRoutine,
    eveningRoutine,
    productSuggestions,
  } = useAnalysisStore();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const renderResultSection = (title: string, content: string | string[]) => {
    if (content === 'Not Available' || (Array.isArray(content) && content.length === 0)) return null;
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
      navigation.navigate('MorningRoutineScreen');
    }
  };

  const handleEveningRoutineButton = () => {
    const steps = processRoutine(eveningRoutine);
    if (steps.length === 0) {
      Alert.alert('Routine Not Available', 'There is no evening routine for this analysis.');
    } else {
      navigation.navigate('EveningRoutineScreen');
    }
  };

  const handleProductButton = () => {
    if (productSuggestions === 'Not Available') {
      Alert.alert('Products Not Available', 'There are no recommended products for this analysis.');
    } else {
      navigation.navigate('ProductsRecommendationsScreen');
    }
  };

  const handleBeautySection = () => {
    navigation.navigate('BeautySectionScreen');
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
        {renderResultSection('Skin Type', skinType ?? 'Not Available')}
        {renderResultSection('Issues', issues ?? 'Not Available')}
        {renderResultSection('Recommendations', recommendations ?? 'Not Available')}
        {renderResultSection('Skin Tone', skinTone ?? 'Not Available')}
        {renderResultSection('Face Shape', faceShape ?? 'Not Available')}
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
  button: { alignItems: 'center', backgroundColor: '#D1A39C', borderRadius: 8, marginBottom: 10, paddingVertical: 15 },
  buttonContainer: { marginTop: 20, width: '100%' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  container: { backgroundColor: '#fff', flex: 1 },
  image: { borderRadius: 10, height: 300, marginBottom: 20, width: '100%' },
  loadingContainer: { alignItems: 'center', backgroundColor: '#fff', flex: 1, justifyContent: 'center' },
  loadingText: { color: '#666', fontSize: 18, marginTop: 10 },
  mainTitle: { color: '#A66B5A', fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  scrollContent: { alignItems: 'center', padding: 20 },
  section: { backgroundColor: '#F9F5F0', borderRadius: 10, marginBottom: 15, padding: 15, width: '100%' },
  sectionContent: { color: '#666', fontSize: 16, lineHeight: 24 },
  sectionTitle: { color: '#D1A39C', fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
});

export default AnalysisHistoryScreen;