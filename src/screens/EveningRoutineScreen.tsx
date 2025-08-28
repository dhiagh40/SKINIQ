import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type EveningRoutineScreenRouteProp = RouteProp<RootStackParamList, 'EveningRoutine'>;
type EveningRoutineScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'EveningRoutine'>;

const EveningRoutineScreen = () => {
  const route = useRoute<EveningRoutineScreenRouteProp>();
  const navigation = useNavigation<EveningRoutineScreenNavigationProp>();
  
  const routine: string[] = Array.isArray(route.params?.routine) ? route.params.routine : [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Evening Routine</Text>
      <ScrollView style={styles.scrollView}>
        {routine.length > 0 ? (
          routine.map((step, index) => (
            <View key={index} style={styles.stepContainer}>
              <Text style={styles.stepName}>Step {index + 1}</Text>
              <Text style={styles.stepDescription}>{String(step)}</Text>
            </View>
          ))
        ) : (
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>No evening routine available at this time. Please try another analysis or check back later.</Text>
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
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333', textAlign: 'center' },
  scrollView: { width: '100%' },
  stepContainer: { backgroundColor: '#F9F5F0', borderRadius: 10, padding: 15, marginBottom: 15 },
  stepName: { fontSize: 18, fontWeight: 'bold', color: '#D1A39C', marginBottom: 5 },
  stepDescription: { fontSize: 16, color: '#666', lineHeight: 24 },
  infoBox: { backgroundColor: '#f0f0f0', borderRadius: 12, padding: 20, alignItems: 'center', justifyContent: 'center', minHeight: 150 },
  infoText: { fontSize: 16, color: '#666', textAlign: 'center' },
  backButton: { backgroundColor: '#A66B5A', paddingVertical: 14, paddingHorizontal: 20, borderRadius: 10, alignSelf: 'center', marginTop: 20 },
  buttonText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
});

export default EveningRoutineScreen;