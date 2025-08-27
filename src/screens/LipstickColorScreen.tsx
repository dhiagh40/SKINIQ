import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type LipstickColorScreenRouteProp = RouteProp<RootStackParamList, 'LipstickColor'>;

const getLipstickRecommendations = (skinTone: string) => {
  switch (skinTone.toLowerCase()) {
    case 'warm':
      return [
        { name: 'Warm Nude', hex: '#F0D6C0', description: 'Adds a natural and warm touch to your features.' },
        { name: 'Brick Red', hex: '#9E2A2B', description: 'A bold color that gives you an attractive, warm look.' },
        { name: 'Coral', hex: '#FF7F50', description: 'Highlights your warm skin and gives a vibrant glow.' },
        { name: 'Peach', hex: '#FFCBA4', description: 'A perfect choice for a soft and bright look.' },
      ];
    case 'cool':
      return [
        { name: 'Mauve', hex: '#E0B0FF', description: 'Gives you an elegant and modern look that suits your cool skin.' },
        { name: 'Cherry Red', hex: '#B20025', description: 'Adds a classic and attractive touch to your lips.' },
        { name: 'Rose Pink', hex: '#F7A7A5', description: 'A delicate choice suitable for daily use.' },
        { name: 'Plum', hex: '#8E4585', description: 'A deep and attractive color for a distinctive evening look.' },
      ];
    case 'neutral':
      return [
        { name: 'Neutral Nude', hex: '#D2B48C', description: 'A natural color suitable for all occasions.' },
        { name: 'True Red', hex: '#A8201A', description: 'A classic red that highlights the beauty of your neutral skin.' },
        { name: 'Dusty Pink', hex: '#E3C1C3', description: 'A calm and elegant color that gives you a natural look.' },
        { name: 'Berry', hex: '#8C3B5E', description: 'A versatile color for a day or evening look.' },
      ];
    default:
      return [
        { name: 'Nude', hex: '#F0D6C0', description: 'A natural and attractive choice.' },
        { name: 'Red', hex: '#A8201A', description: 'A classic color suitable for everyone.' },
        { name: 'Pink', hex: '#F7A7A5', description: 'A delicate and soft color.' },
        { name: 'Berry', hex: '#8C3B5E', description: 'A perfect choice for an elegant look.' },
      ];
  }
};

const LipstickColorScreen = () => {
  const route = useRoute<LipstickColorScreenRouteProp>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { skinTone } = route.params;

  const allRecommendations = getLipstickRecommendations(skinTone);
  const bestRecommendation = allRecommendations[0];
  const otherRecommendations = allRecommendations.slice(1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Perfect Lipstick Colors</Text>
      <Text style={styles.subtitle}>
        Based on your skin analysis, these colors were hand-picked to match your{' '}
        <Text style={styles.highlight}>{skinTone}</Text> skin tone.
      </Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.bestRecommendation}>
          <Text style={styles.bestRecTitle}>Most Recommended</Text>
          <View style={styles.colorItem}>
            <View style={[styles.colorBox, { backgroundColor: bestRecommendation.hex }]} />
            <View style={styles.textContainer}>
              <Text style={styles.colorName}>{bestRecommendation.name}</Text>
              <Text style={styles.colorDescription}>{bestRecommendation.description}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Shop Now</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.listTitle}>Other Suggestions</Text>
        {otherRecommendations.map((color, index) => (
          <View key={index} style={styles.colorItem}>
            <View style={[styles.colorBox, { backgroundColor: color.hex }]} />
            <View style={styles.textContainer}>
              <Text style={styles.colorName}>{color.name}</Text>
              <Text style={styles.colorDescription}>{color.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
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
    marginBottom: 5,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#A66B5A',
  },
  scrollView: {
    width: '100%',
  },
  bestRecommendation: {
    backgroundColor: '#F9F5F0',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  bestRecTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A66B5A',
    marginBottom: 10,
  },
  colorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    width: '100%',
  },
  colorBox: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  colorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D1A39C',
  },
  colorDescription: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    marginTop: 10,
  },
  buyButton: {
    backgroundColor: '#4a6792',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 15,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#A66B5A',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LipstickColorScreen;