import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 60) / 2;

type LipstickColorScreenRouteProp = RouteProp<RootStackParamList, 'LipstickColor'>;

const getLipstickRecommendations = (skinTone: string) => {
  switch (skinTone.toLowerCase()) {
    case 'warm':
      return [
        { name: 'Warm Nude', hex: '#E0BBAA', description: 'Natural and warm touch.' },
        { name: 'Brick Red', hex: '#9E2A2B', description: 'Bold color for an attractive look.' },
        { name: 'Coral', hex: '#FF7F50', description: 'Highlights your skin with a vibrant glow.' },
        { name: 'Peach', hex: '#FFCBA4', description: 'Perfect for a soft and bright look.' },
        { name: 'Terracotta', hex: '#E2725B', description: 'A stylish and earthy tone.' },
        { name: 'Golden Brown', hex: '#B87333', description: 'Rich and elegant for a deep look.' },
      ];
    case 'cool':
      return [
        { name: 'Mauve', hex: '#B266B2', description: 'Elegant and modern look.' },
        { name: 'Cherry Red', hex: '#B20025', description: 'Classic and attractive touch.' },
        { name: 'Rose Pink', hex: '#F7A7A5', description: 'Delicate choice for daily use.' },
        { name: 'Plum', hex: '#8E4585', description: 'Deep and attractive for an evening look.' },
        { name: 'Fuchsia', hex: '#FF00FF', description: 'A vibrant and bold choice.' },
        { name: 'Burgundy', hex: '#800020', description: 'A sophisticated and rich color.' },
      ];
    case 'neutral':
      return [
        { name: 'Neutral Nude', hex: '#A88D7F', description: 'Natural color for all occasions.' },
        { name: 'True Red', hex: '#A8201A', description: 'Classic red that highlights your beauty.' },
        { name: 'Dusty Pink', hex: '#E3C1C3', description: 'A calm and elegant natural look.' },
        { name: 'Berry', hex: '#8C3B5E', description: 'Versatile for a day or evening look.' },
        { name: 'Rose', hex: '#F08080', description: 'A soft and romantic shade.' },
        { name: 'Tawny', hex: '#CD5700', description: 'A balanced color for neutral tones.' },
      ];
    default:
      return [
        { name: 'Nude', hex: '#F0D6C0', description: 'Natural and attractive choice.' },
        { name: 'Red', hex: '#A8201A', description: 'Classic color suitable for everyone.' },
        { name: 'Pink', hex: '#F7A7A5', description: 'Delicate and soft color.' },
        { name: 'Berry', hex: '#8C3B5E', description: 'Perfect for an elegant look.' },
      ];
  }
};

const LipstickColorScreen = () => {
  const route = useRoute<LipstickColorScreenRouteProp>();
  const { skinTone } = route.params;
  const recommendations = getLipstickRecommendations(skinTone);
  const bestRecommendation = recommendations[0];
  const otherRecommendations = recommendations.slice(1);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Your Perfect Lipstick Colors</Text>
          <Text style={styles.infoText}>
            Based on your analysis, these colors are hand-picked to match your{' '}
            <Text style={styles.highlightText}>{skinTone}</Text> skin tone.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Most Recommended</Text>
          <View style={styles.colorItem}>
            <View style={[styles.colorBox, { backgroundColor: bestRecommendation.hex }]} />
            <View style={styles.textContainer}>
              <Text style={styles.colorName}>{bestRecommendation.name}</Text>
              <Text style={styles.colorDescription}>{bestRecommendation.description}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.listHeader}>Other Suggestions</Text>
        <View style={styles.suggestionsGrid}>
          {otherRecommendations.map((color, index) => (
            <View key={index} style={styles.listItemCard}>
              <View style={[styles.colorBoxGrid, { backgroundColor: color.hex }]} />
              <Text style={styles.colorNameGrid}>{color.name}</Text>
              <Text style={styles.colorDescriptionGrid}>{color.description}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F0',
    padding: 20,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  infoBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D1A39C',
    textAlign: 'center',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  highlightText: {
    fontWeight: 'bold',
    color: '#A66B5A',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D1A39C',
    marginBottom: 15,
    textAlign: 'center',
  },
  colorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  colorBox: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#eee',
  },
  textContainer: {
    flex: 1,
  },
  colorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  colorDescription: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  listHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    marginTop: 10,
  },
  suggestionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listItemCard: {
    width: ITEM_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  colorBoxGrid: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#eee',
  },
  colorNameGrid: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  colorDescriptionGrid: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default LipstickColorScreen;