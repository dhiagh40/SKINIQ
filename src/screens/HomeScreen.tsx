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
      // no need to pass params since all makeup screens now get data from the store
      navigation.navigate('BeautySectionScreen'); 
    } else {
      Alert.alert(
        'Action Required',
        'Please complete a skin analysis first to get personalized beauty recommendations.',
        [
          {
            text: 'Start Analysis',
            onPress: () => navigation.navigate('UploadPhotoScreen'),
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
          onPress={() => navigation.navigate('UploadPhotoScreen')}
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
          onPress={() => navigation.navigate('PackagesPricingScreen')}
        >
          <Text style={styles.buttonText}>Packages & Pricing</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AnalysisHistoryScreen')}
        >
          <Text style={styles.buttonText}>Analysis History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('NotificationsTipsScreen')}
        >
          <Text style={styles.buttonText}>Notifications & Tips</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SettingsScreen')}
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
  button: {
    alignItems: 'center',
    backgroundColor: '#D1A39C',
    borderRadius: 8,
    marginBottom: 15,
    paddingVertical: 18,
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
  },
  scrollViewContent: {
    alignItems: 'center',
    padding: 20,
  },
  subtitle: {
    color: '#666',
    fontSize: 16,
    marginBottom: 30,
  },
  welcomeText: {
    color: '#333',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;