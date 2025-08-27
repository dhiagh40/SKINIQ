import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import useAnalysisStore from '../store/analysisStore';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { skinTone, faceShape, skinType } = useAnalysisStore();

  const handleBeautySectionPress = () => {
    if (skinTone && faceShape && skinType) {
      navigation.navigate('BeautySection', { skinTone, faceShape, skinType });
    } else {
      Alert.alert(
        'Action Required',
        'Please complete a skin analysis first to get personalized beauty recommendations.',
        [
          {
            text: 'Start Analysis',
            onPress: () => navigation.navigate('UploadPhoto'),
          },
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.welcomeText}>Welcome to SKINIQ!</Text>
        <Text style={styles.subtitle}>Choose an option to begin</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('UploadPhoto')}
        >
          <Text style={styles.buttonText}>Start Skin Analysis</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleBeautySectionPress}
        >
          <Text style={styles.buttonText}>Beauty Section</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Packages')}
        >
          <Text style={styles.buttonText}>Packages & Pricing</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AnalysisHistory')}
        >
          <Text style={styles.buttonText}>Analysis History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Notifications')}
        >
          <Text style={styles.buttonText}>Notifications & Tips</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TestScreen')}
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