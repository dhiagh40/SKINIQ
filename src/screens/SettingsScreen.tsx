import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

// ✅ تم تصحيح نوع التنقل ليطابق الاسم الصحيح 'SettingsScreen'
type SettingsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SettingsScreen'
>;

const SettingsScreen = () => {
  const navigation = useNavigation<SettingsScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProfileScreen')}
      >
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LanguageScreen')}
      >
        <Text style={styles.buttonText}>Language</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AppNotificationsScreen')}
      >
        <Text style={styles.buttonText}>App Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('UpdatesScreen')}
      >
        <Text style={styles.buttonText}>New Updates</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={() => navigation.navigate('LogoutScreen')}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#F9F5F0',
    borderRadius: 8,
    marginBottom: 15,
    paddingVertical: 20,
    width: '100%',
  },
  buttonText: {
    color: '#D1A39C',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logoutButton: {
    backgroundColor: '#FF6347',
    marginTop: 20,
  },
  title: {
    color: '#333',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
});

export default SettingsScreen;