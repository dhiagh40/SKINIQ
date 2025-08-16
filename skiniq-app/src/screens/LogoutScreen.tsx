import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type LogoutScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Logout'
>;

const LogoutScreen = () => {
  const navigation = useNavigation<LogoutScreenNavigationProp>();

  const handleLogout = () => {
    // هنا سيتم إضافة منطق تسجيل الخروج الفعلي
    // ثم الانتقال إلى شاشة تسجيل الدخول
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you sure you want to log out?</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#D1A39C',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LogoutScreen;