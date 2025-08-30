import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type IntroScreen3NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Intro3'
>;

const IntroScreen3 = () => {
  const navigation = useNavigation<IntroScreen3NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"Let's get started!"}</Text>
      <Text style={styles.subtitle}>Unlock your personalized beauty journey.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#D1A39C',
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 12,
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
  subtitle: {
    color: '#666',
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
  },
  title: {
    color: '#333',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default IntroScreen3;
