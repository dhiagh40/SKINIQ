import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const EyeshadowScreen = () => {
  const eyeshadows = [
    { name: 'Natural Nudes', description: 'A palette of natural and earthy tones.' },
    { name: 'Smoky Grays', description: 'Dark and intense shades for a smoky look.' },
    { name: 'Warm Coppers', description: 'Shades of copper, bronze, and gold.' },
    { name: 'Pastel Pinks', description: 'Soft, light pinks for a subtle touch.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eyeshadows</Text>
      <ScrollView style={styles.scrollView}>
        {eyeshadows.map((palette, index) => (
          <View key={index} style={styles.paletteItem}>
            <Text style={styles.paletteName}>{palette.name}</Text>
            <Text style={styles.paletteDescription}>{palette.description}</Text>
          </View>
        ))}
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
  paletteItem: {
    backgroundColor: '#F9F5F0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  paletteName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D1A39C',
    marginBottom: 5,
  },
  paletteDescription: {
    fontSize: 16,
    color: '#666',
  },
});

export default EyeshadowScreen;