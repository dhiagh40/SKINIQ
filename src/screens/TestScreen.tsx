import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type TestScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Test'
>;

const TestScreen = () => {
  const navigation = useNavigation<TestScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Screens Built!</Text>
      <Text style={styles.subtitle}>
        Congratulations! The basic structure for all 26 screens of the SKINIQ app is now complete. You can use this screen to perform tests.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#D1A39C',
    borderRadius: 8,
    paddingHorizontal: 40,
    paddingVertical: 15,
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
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default TestScreen;