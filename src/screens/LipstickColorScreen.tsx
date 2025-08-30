import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import useAnalysisStore from '../store/analysisStore';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 60) / 2;

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
  const skinTone = useAnalysisStore(state => state.skinTone) || 'default';
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 5,
    marginBottom: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  cardTitle: {
    color: '#D1A39C',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  colorBox: {
    borderColor: '#eee',
    borderRadius: 30,
    borderWidth: 2,
    height: 60,
    marginRight: 15,
    width: 60,
  },
  colorBoxGrid: {
    borderColor: '#eee',
    borderRadius: 40,
    borderWidth: 2,
    height: 80,
    marginBottom: 8,
    width: 80,
  },
  colorDescription: {
    color: '#888',
    fontSize: 14,
    marginTop: 4,
  },
  colorDescriptionGrid: {
    color: '#888',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
  colorItem: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  colorName: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  colorNameGrid: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#F9F5F0',
    flex: 1,
    padding: 20,
  },
  highlightText: {
    color: '#A66B5A',
    fontWeight: 'bold',
  },
  infoBox: {
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 3,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  infoText: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center',
  },
  infoTitle: {
    color: '#D1A39C',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  listHeader: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 10,
  },
  listItemCard: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 2,
    marginBottom: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    width: ITEM_WIDTH,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  suggestionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
  },
});

export default LipstickColorScreen;
