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
  button: {
    alignItems: 'center',
    backgroundColor: '#D1A39C',
    borderRadius: 8,
    marginTop: 30,
    paddingVertical: 15,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
  },
  infoContainer: {
    alignItems: 'center',
    backgroundColor: '#F9F5F0',
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 20,
    padding: 15,
  },
  infoText: {
    color: '#333',
    fontSize: 16,
  },
  label: {
    color: '#D1A39C',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
});

export default ProfileScreen;