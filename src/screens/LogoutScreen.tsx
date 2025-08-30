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
  button: {
    alignItems: 'center',
    backgroundColor: '#FF6347',
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
  cancelButton: {
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 15,
    width: '100%',
  },
  cancelButtonText: {
    color: '#D1A39C',
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
  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
});

export default LogoutScreen;