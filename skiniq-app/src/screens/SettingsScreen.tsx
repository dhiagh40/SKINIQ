import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type SettingsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Settings'
>;

const SettingsScreen = () => {
  const navigation = useNavigation<SettingsScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Language')}
      >
        <Text style={styles.buttonText}>Language</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AppNotifications')}
      >
        <Text style={styles.buttonText}>App Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Updates')}
      >
        <Text style={styles.buttonText}>New Updates</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={() => navigation.navigate('Logout')}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#F9F5F0',
    paddingVertical: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D1A39C',
  },
  logoutButton: {
    backgroundColor: '#FF6347',
    marginTop: 20,
  },
});

export default SettingsScreen;