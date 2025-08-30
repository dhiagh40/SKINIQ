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
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
  },
  languageItem: {
    backgroundColor: '#F9F5F0',
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  languageText: {
    color: '#D1A39C',
    fontSize: 18,
    textAlign: 'center',
  },
  scrollView: {
    width: '100%',
  },
  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default LanguageScreen;