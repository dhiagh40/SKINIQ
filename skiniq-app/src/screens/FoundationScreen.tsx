import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FoundationScreen = () => {
  const foundationShades = [
    { name: 'Ivory', hex: '#F3E0C8', description: 'Very light with cool undertones.' },
    { name: 'Beige', hex: '#EED9B9', description: 'Light with neutral undertones.' },
    { name: 'Warm Sand', hex: '#F0C28A', description: 'Medium with warm undertones.' },
    { name: 'Tan', hex: '#CD9A74', description: 'Deep tan with golden undertones.' },
    { name: 'Mocha', hex: '#9E6D52', description: 'Deep with warm undertones.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Foundation Shades</Text>
      <ScrollView style={styles.scrollView}>
        {foundationShades.map((shade, index) => (
          <View key={index} style={styles.shadeItem}>
            <View style={[styles.shadeBox, { backgroundColor: shade.hex }]} />
            <View style={styles.textContainer}>
              <Text style={styles.shadeName}>{shade.name}</Text>
              <Text style={styles.shadeDescription}>{shade.description}</Text>
            </View>
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
  shadeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F5F0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  shadeBox: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  shadeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D1A39C',
  },
  shadeDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default FoundationScreen;