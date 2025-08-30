import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import useAnalysisStore from '../store/analysisStore';

const AnalysisResultScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'AnalysisResultScreen'>>();
  const { skinType, issues, recommendations, imageUri } = useAnalysisStore(state => state);

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
            onPress={() => navigation.navigate('MorningRoutineScreen')}
          >
            <Text style={styles.buttonText}>Morning Routine</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('EveningRoutineScreen')}
          >
            <Text style={styles.buttonText}>Evening Routine</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('LipstickColorScreen')}
          >
            <Text style={styles.buttonText}>Lipstick Color</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('EyeshadowScreen')}
          >
            <Text style={styles.buttonText}>Eyeshadow</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('FoundationScreen')}
          >
            <Text style={styles.buttonText}>Foundation</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#D1A39C',
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '48%',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
  },
  image: {
    borderRadius: 10,
    height: 200,
    marginBottom: 20,
    width: '100%',
  },
  resultBox: {
    backgroundColor: '#F9F5F0',
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
  },
  resultText: {
    color: '#333',
    fontSize: 16,
  },
  resultTitle: {
    color: '#D1A39C',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  scrollView: {
    width: '100%',
  },
  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default AnalysisResultScreen;