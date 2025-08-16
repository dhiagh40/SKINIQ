import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.infoText}>Placeholder User</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.infoText}>user@example.com</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Skin Type:</Text>
        <Text style={styles.infoText}>Oily</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
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
    marginBottom: 40,
    color: '#333',
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#F9F5F0',
    padding: 15,
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D1A39C',
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    backgroundColor: '#D1A39C',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;