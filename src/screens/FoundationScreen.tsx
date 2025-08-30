import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import useAnalysisStore from '../store/analysisStore';

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
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'FoundationScreen'>>();
  const skinTone = useAnalysisStore(state => state.skinTone);

  if (!skinTone) {
    Alert.alert(
      "No Analysis Found",
      "Please perform a skin analysis first to get personalized foundation recommendations.",
      [
        {
          text: "Start Analysis",
          onPress: () => navigation.navigate('UploadPhotoScreen'),
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
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  shadeBox: {
    borderColor: '#eee',
    borderRadius: 30,
    borderWidth: 2,
    height: 60,
    marginRight: 15,
    width: 60,
  },
  shadeBoxSmall: {
    borderColor: '#eee',
    borderRadius: 20,
    borderWidth: 2,
    height: 40,
    marginRight: 10,
    width: 40,
  },
  shadeDescription: {
    color: '#888',
    fontSize: 14,
    marginTop: 4,
  },
  shadeDescriptionSmall: {
    color: '#888',
    fontSize: 12,
  },
  shadeItem: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  shadeName: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  shadeNameSmall: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  suggestionsList: {
    flexDirection: 'column',
  },
  textContainer: {
    flex: 1,
  },
  textContainerSmall: {
    flex: 1,
  },
});

export default FoundationScreen;
