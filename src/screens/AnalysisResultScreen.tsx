import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type AnalysisResultScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AnalysisResult'
>;

type AnalysisResultScreenRouteProp = RouteProp<RootStackParamList, 'AnalysisResult'>;

const AnalysisResultScreen = () => {
  const navigation = useNavigation<AnalysisResultScreenNavigationProp>();
  const route = useRoute<AnalysisResultScreenRouteProp>();
  const { skinType, issues, recommendations, imageUri } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Analysis Results</Text>
      <ScrollView style={styles.scrollView}>
        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.image} resizeMode="cover" />
        )}
        <View style={styles.resultBox}>
          <Text style={styles.resultTitle}>Skin Type:</Text>
          <Text style={styles.resultText}>{skinType}</Text>
        </View>
        <View style={styles.resultBox}>
          <Text style={styles.resultTitle}>Issues:</Text>
          <Text style={styles.resultText}>{issues}</Text>
        </View>
        <View style={styles.resultBox}>
          <Text style={styles.resultTitle}>Recommendations:</Text>
          <Text style={styles.resultText}>{recommendations}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MorningRoutine')}
          >
            <Text style={styles.buttonText}>Morning Routine</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('EveningRoutine')}
          >
            <Text style={styles.buttonText}>Evening Routine</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  scrollView: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  resultBox: {
    backgroundColor: '#F9F5F0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D1A39C',
    marginBottom: 5,
  },
  resultText: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#D1A39C',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    width: '48%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AnalysisResultScreen;
