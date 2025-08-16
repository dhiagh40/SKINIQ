import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.welcomeText}>Welcome to SKINIQ!</Text>
        <Text style={styles.subtitle}>Choose an option to begin</Text>

        {/* زر لتحليل البشرة */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('UploadPhoto')}
        >
          <Text style={styles.buttonText}>Start Skin Analysis</Text>
        </TouchableOpacity>

        {/* زر لقسم التجميل */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BeautySection')}
        >
          <Text style={styles.buttonText}>Beauty Section</Text>
        </TouchableOpacity>

        {/* زر للباقات والأسعار */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PackagesPricing')}
        >
          <Text style={styles.buttonText}>Packages & Pricing</Text>
        </TouchableOpacity>

        {/* زر لسجل التحليلات */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AnalysisHistory')}
        >
          <Text style={styles.buttonText}>Analysis History</Text>
        </TouchableOpacity>

        {/* زر للتنبيهات والنصائح */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('NotificationsTips')}
        >
          <Text style={styles.buttonText}>Notifications & Tips</Text>
        </TouchableOpacity>

        {/* زر للإعدادات */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        
        {/* زر للشاشة التجريبية */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Test')}
        >
          <Text style={styles.buttonText}>Test Screen</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    padding: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  button: {
    width: '100%',
    backgroundColor: '#D1A39C',
    paddingVertical: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;