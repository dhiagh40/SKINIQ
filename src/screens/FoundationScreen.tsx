import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Alert } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import useAnalysisStore from '../store/analysisStore';

const { width } = Dimensions.get('window');

type FoundationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Foundation'>;

interface FoundationShade {
  name: string;
  hex: string;
  description: string;
}

const getFoundationRecommendations = (skinTone: string): { mostRecommended: FoundationShade, otherSuggestions: FoundationShade[] } => {
  switch (skinTone.toLowerCase()) {
    case 'warm':
      return {
        mostRecommended: { name: 'Warm Sand', hex: '#F0C28A', description: 'A perfect match for golden and yellow undertones.' },
        otherSuggestions: [
          { name: 'Tan', hex: '#CD9A74', description: 'Deep tan with golden undertones.' },
          { name: 'Golden Beige', hex: '#D7AE9A', description: 'A lighter shade with a warm finish.' },
        ]
      };
    case 'cool':
      return {
        mostRecommended: { name: 'Porcelain', hex: '#F0F0D8', description: 'Ideal for very fair skin with cool undertones.' },
        otherSuggestions: [
          { name: 'Ivory', hex: '#F3E0C8', description: 'Very light with cool undertones.' },
          { name: 'Rose Beige', hex: '#F5C6C6', description: 'A subtle pink tint for a cool complexion.' },
        ]
      };
    case 'neutral':
      return {
        mostRecommended: { name: 'Beige', hex: '#EED9B9', description: 'A balanced shade that works with both warm and cool undertones.' },
        otherSuggestions: [
          { name: 'Medium Neutral', hex: '#E2C8A7', description: 'A versatile shade for a balanced look.' },
          { name: 'Natural Tan', hex: '#B8860B', description: 'Perfect for a healthy, balanced glow.' },
        ]
      };
    default:
      return {
        mostRecommended: { name: 'Beige', hex: '#EED9B9', description: 'A balanced shade that works with most undertones.' },
        otherSuggestions: [
          { name: 'Warm Sand', hex: '#F0C28A', description: 'A perfect match for golden and yellow undertones.' },
          { name: 'Ivory', hex: '#F3E0C8', description: 'Very light with cool undertones.' },
        ]
      };
  }
};

const FoundationScreen = () => {
  const navigation = useNavigation<FoundationScreenNavigationProp>();
  const skinTone = useAnalysisStore(state => state.skinTone);

  if (!skinTone) {
    Alert.alert(
      "No Analysis Found",
      "Please perform a skin analysis first to get personalized foundation recommendations.",
      [
        {
          text: "Start Analysis",
          onPress: () => navigation.navigate('UploadPhoto'),
        },
        {
          text: "Cancel",
          onPress: () => navigation.goBack(),
          style: "cancel",
        },
      ]
    );
    return null;
  }

  const { mostRecommended, otherSuggestions } = getFoundationRecommendations(skinTone);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Your Perfect Foundation</Text>
          <Text style={styles.infoText}>
            Based on your analysis, these shades are perfect for your <Text style={styles.highlightText}>{skinTone}</Text> skin tone.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Most Recommended</Text>
          <View style={styles.shadeItem}>
            <View style={[styles.shadeBox, { backgroundColor: mostRecommended.hex }]} />
            <View style={styles.textContainer}>
              <Text style={styles.shadeName}>{mostRecommended.name}</Text>
              <Text style={styles.shadeDescription}>{mostRecommended.description}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.listHeader}>Other Suggestions</Text>
        <View style={styles.suggestionsList}>
          {otherSuggestions.map((shade, index) => (
            <View key={index} style={styles.listItemCard}>
              <View style={[styles.shadeBoxSmall, { backgroundColor: shade.hex }]} />
              <View style={styles.textContainerSmall}>
                <Text style={styles.shadeNameSmall}>{shade.name}</Text>
                <Text style={styles.shadeDescriptionSmall}>{shade.description}</Text>
              </View>
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
  shadeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  shadeBox: {
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
  shadeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  shadeDescription: {
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
  suggestionsList: {
    flexDirection: 'column',
  },
  listItemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  shadeBoxSmall: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#eee',
  },
  textContainerSmall: {
    flex: 1,
  },
  shadeNameSmall: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  shadeDescriptionSmall: {
    fontSize: 12,
    color: '#888',
  },
});

export default FoundationScreen;