import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import useAnalysisStore from '../store/analysisStore'; // ✅ استيراد المتجر

type MorningRoutineScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MorningRoutine'>;

const MorningRoutineScreen = () => {
  const navigation = useNavigation<MorningRoutineScreenNavigationProp>();
  // ✅ التعديل: قراءة الروتين مباشرة من المتجر
  const morningRoutine = useAnalysisStore(state => state.morningRoutine);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Morning Routine</Text>
      <ScrollView style={styles.scrollView}>
        {morningRoutine && morningRoutine.length > 0 ? (
          morningRoutine.map((step, index) => (
            <View key={index} style={styles.stepContainer}>
              <Text style={styles.stepName}>Step {index + 1}</Text>
              <Text style={styles.stepDescription}>{String(step)}</Text>
            </View>
          ))
        ) : (
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>No morning routine available at this time.</Text>
          </View>
        )}
      </ScrollView>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Analysis</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: { alignSelf: 'center', backgroundColor: '#A66B5A', borderRadius: 10, marginTop: 20, paddingHorizontal: 20, paddingVertical: 14 },
  buttonText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  container: { backgroundColor: '#fff', flex: 1, padding: 20 },
  infoBox: { alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 12, justifyContent: 'center', minHeight: 150, padding: 20 },
  infoText: { color: '#666', fontSize: 16, textAlign: 'center' },
  scrollView: { width: '100%' },
  stepContainer: { backgroundColor: '#F9F5F0', borderRadius: 10, marginBottom: 15, padding: 15 },
  stepDescription: { color: '#666', fontSize: 16, lineHeight: 24 },
  stepName: { color: '#D1A39C', fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  title: { color: '#333', fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
});

export default MorningRoutineScreen;