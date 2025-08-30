import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const SupportHelpScreen = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:support@skiniq.com');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+1234567890');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Support & Help</Text>
      <Text style={styles.subtitle}>
        How can we assist you today?
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Frequently Asked Questions (FAQ)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleEmailPress}>
        <Text style={styles.buttonText}>Send an Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePhonePress}>
        <Text style={styles.buttonText}>Call Us</Text>
      </TouchableOpacity>
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
  subtitle: {
    color: '#666',
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
  },
  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default SupportHelpScreen;