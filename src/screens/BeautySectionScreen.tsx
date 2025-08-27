import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type BeautySectionScreenRouteProp = RouteProp<RootStackParamList, 'BeautySection'>;

type BeautySectionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'BeautySection'
>;

const BeautySectionScreen = () => {
  const navigation = useNavigation<BeautySectionScreenNavigationProp>();
  const route = useRoute<BeautySectionScreenRouteProp>();
  const { skinTone, faceShape, skinType } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beauty Section</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LipstickColor', { skinTone })}
      >
        <Text style={styles.buttonText}>Lipstick Colors</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Eyeshadow', { skinTone })}
      >
        <Text style={styles.buttonText}>Eyeshadows</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Foundation', { skinTone, skinType })}
      >
        <Text style={styles.buttonText}>Foundation</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  button: {
    width: '100%',
    backgroundColor: '#D1A39C',
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
});

export default BeautySectionScreen;