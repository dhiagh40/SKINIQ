import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ForgotPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>Enter your email to receive a password reset link.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  title: {
    color: '#333',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ForgotPasswordScreen;