import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type MorningRoutineScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MorningRoutine'
>;

const MorningRoutineScreen = () => {
  const navigation = useNavigation<MorningRoutineScreenNavigationProp>();

  const routineSteps = [
    { name: 'Step 1: Cleanser', description: 'Gently wash your face to remove impurities.' },
    { name: 'Step 2: Toner', description: 'Balance your skin\'s pH level.' },
    { name: 'Step 3: Serum', description: 'Apply a targeted serum for your skin concerns.' },
    { name: 'Step 4: Moisturizer', description: 'Hydrate your skin to keep it soft and supple.' },
    { name: 'Step 5: Sunscreen', description: 'Protect your skin from harmful UV rays.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Morning Routine</Text>
      <ScrollView style={styles.scrollView}>
        {routineSteps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <Text style={styles.stepName}>{step.name}</Text>
            <Text style={styles.stepDescription}>{step.description}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('ProductDetails')}
            >
              <Text style={styles.buttonText}>View Recommended Products</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  scrollView: {
    width: '100%',
  },
  stepContainer: {
    backgroundColor: '#F9F5F0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  stepName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D1A39C',
    marginBottom: 5,
  },
  stepDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#D1A39C',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default MorningRoutineScreen;