import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = () => {
    navigation.navigate('UserLoginScreen'); 
  };

  const handleCreateAccount = () => {
    navigation.navigate('CreateAccountScreen');
  };
  
  const handleContinueAsGuest = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SKINIQ</Text>
      <Text style={styles.subtitle}>Log in or create an account to get started.</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
          <Text style={styles.buttonText}>Create an Account</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.guestButton} onPress={handleContinueAsGuest}>
          <Text style={styles.guestButtonText}>Continue as a Guest</Text>
        </TouchableOpacity>
      </View>
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
    width: '80%',
  },
  buttonContainer: {
    alignItems: 'center',
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
  guestButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#D1A39C',
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 15,
    width: '80%',
  },
  guestButtonText: {
    color: '#D1A39C',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#666',
    fontSize: 16,
    marginBottom: 50,
    textAlign: 'center',
  },
  title: {
    color: '#333',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default LoginScreen;