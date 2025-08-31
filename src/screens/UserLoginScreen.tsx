import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { RootStackParamList } from '../navigation/types';

type UserLoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'UserLoginScreen'
>;

const UserLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<UserLoginScreenNavigationProp>();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter your email and password.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post('https://3000-dhiagh40-skiniq-8qbo0xk598r.ws-eu121.gitpod.io/login', {
        email,
        password,
      });

      if (response.status === 200) {
        Alert.alert('Success', 'You have logged in successfully!');
        navigation.navigate('Home');
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        Alert.alert('Login Error', error.response.data.error || 'Invalid credentials. Please try again.');
      } else {
        Alert.alert('Error', 'Failed to connect to the server.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Log In</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#D1A39C',
    borderRadius: 8,
    marginTop: 20,
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
  forgotPasswordText: {
    alignSelf: 'flex-end',
    color: '#D1A39C',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 20,
    marginTop: -10,
  },
  input: {
    borderColor: '#D1A39C',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 15,
    padding: 15,
    width: '100%',
  },
  title: {
    color: '#333',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
  },
});

export default UserLoginScreen;