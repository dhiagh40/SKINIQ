import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const LipstickColorScreen = () => {
  const lipstickColors = [
    { name: 'Nude', hex: '#F0D6C0' },
    { name: 'Red', hex: '#A8201A' },
    { name: 'Pink', hex: '#F7A7A5' },
    { name: 'Berry', hex: '#8C3B5E' },
    { name: 'Coral', hex: '#FF7F50' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lipstick Colors</Text>
      <ScrollView style={styles.scrollView}>
        {lipstickColors.map((color, index) => (
          <View key={index} style={styles.colorItem}>
            <View style={[styles.colorBox, { backgroundColor: color.hex }]} />
            <Text style={styles.colorName}>{color.name}</Text>
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
  colorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F5F0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  colorBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  colorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D1A39C',
  },
});

export default LipstickColorScreen;