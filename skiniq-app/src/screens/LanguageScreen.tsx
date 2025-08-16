import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const LanguageScreen = () => {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Language</Text>
      <ScrollView style={styles.scrollView}>
        {languages.map((language) => (
          <TouchableOpacity key={language.code} style={styles.languageItem}>
            <Text style={styles.languageText}>{language.name}</Text>
          </TouchableOpacity>
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
  languageItem: {
    backgroundColor: '#F9F5F0',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  languageText: {
    fontSize: 18,
    color: '#D1A39C',
    textAlign: 'center',
  },
});

export default LanguageScreen;