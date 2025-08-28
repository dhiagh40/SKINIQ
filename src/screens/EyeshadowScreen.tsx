import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import useAnalysisStore from '../store/analysisStore';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 60) / 2;

type EyeshadowScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Eyeshadow'>;

interface EyeshadowPalette {
  name: string;
  description: string;
  colors: string[];
}

const getEyeshadowRecommendations = (skinTone: string): EyeshadowPalette[] => {
  switch (skinTone.toLowerCase()) {
    case 'warm':
      return [
        { name: 'Warm Coppers', description: 'Shades of copper, bronze, and gold.', colors: ['#B87333', '#CD7F32', '#FFD700'] },
        { name: 'Golden Browns', description: 'Rich, earthy tones for a natural look.', colors: ['#8B4513', '#A0522D', '#D2B48C'] },
        { name: 'Warm Neutrals', description: 'A versatile palette of everyday shades.', colors: ['#F0D6C0', '#E0BBAA', '#C6A78E'] },
      ];
    case 'cool':
      return [
        { name: 'Smoky Grays', description: 'Dark and intense shades for a smoky look.', colors: ['#696969', '#A9A9A9', '#D3D3D3'] },
        { name: 'Silvery Tones', description: 'Shimmery silver and cool-toned metallics.', colors: ['#C0C0C0', '#D3D3D3', '#E0E0E0'] },
        { name: 'Jewel Tones', description: 'Rich shades of sapphire, emerald, and amethyst.', colors: ['#0F52BA', '#50C878', '#9966CC'] },
      ];
    case 'neutral':
      return [
        { name: 'Natural Nudes', description: 'A palette of natural and earthy tones.', colors: ['#F5DEB3', '#D2B48C', '#BC8F8F'] },
        { name: 'Dusty Pinks', description: 'Soft, light pinks for a subtle touch.', colors: ['#FADADD', '#E3C1C3', '#DBB2D1'] },
        { name: 'Deep Plums', description: 'Mysterious purples and mauves.', colors: ['#8E4585', '#673147', '#DDA0DD'] },
      ];
    default:
      return [
        { name: 'Natural Nudes', description: 'A palette of natural and earthy tones.', colors: ['#F5DEB3', '#D2B48C', '#BC8F8F'] },
        { name: 'Warm Coppers', description: 'Shades of copper, bronze, and gold.', colors: ['#B87333', '#CD7F32', '#FFD700'] },
      ];
  }
};

const renderItem = ({ item }: { item: EyeshadowPalette }) => (
  <View style={styles.paletteCard}>
    <View style={styles.colorPaletteDisplay}>
      {item.colors.map((color: string, colorIndex: number) => (
        <View key={colorIndex} style={[styles.paletteColorSwatch, { backgroundColor: color }]} />
      ))}
    </View>
    <Text style={styles.paletteName}>{item.name}</Text>
    <Text style={styles.paletteDescription}>{item.description}</Text>
  </View>
);

const EyeshadowScreen = () => {
  const navigation = useNavigation<EyeshadowScreenNavigationProp>();
  const skinTone = useAnalysisStore(state => state.skinTone);

  if (!skinTone) {
    Alert.alert(
      "No Analysis Found",
      "Please perform a skin analysis first to get personalized eyeshadow recommendations.",
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

  const eyeshadows = getEyeshadowRecommendations(skinTone);

  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Your Perfect Eyeshadows</Text>
        <Text style={styles.infoText}>
          Based on your <Text style={styles.highlightText}>{skinTone}</Text> skin tone, here are our top palette suggestions.
        </Text>
      </View>
      <FlatList
        data={eyeshadows}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
        columnWrapperStyle={styles.rowWrapper}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F0',
    padding: 20,
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
  listContainer: {
    paddingBottom: 20,
  },
  rowWrapper: {
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  paletteCard: {
    width: ITEM_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  colorPaletteDisplay: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  paletteColorSwatch: {
    flex: 1,
    height: '100%',
  },
  paletteName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginTop: 5,
  },
  paletteDescription: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default EyeshadowScreen;