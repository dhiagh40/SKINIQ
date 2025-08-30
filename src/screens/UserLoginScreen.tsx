import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

// ✅ تم تصحيح نوع التنقل ليطابق الاسم الصحيح 'UserLoginScreen'
type UserLoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'UserLoginScreen'
>;

const UserLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<UserLoginScreenNavigationProp>();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter your email and password.');
      return;
    }
    
    Alert.alert('Success', 'You have logged in successfully!');
    navigation.navigate('Home');
  };

  const handleForgotPassword = () => {
    // ✅ تم تصحيح اسم الشاشة ليطابق 'ForgotPasswordScreen'
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
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
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