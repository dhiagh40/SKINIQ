import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const UpdatesScreen = () => {
  const updates = [
    { version: '1.2.0', date: 'August 15, 2025', features: 'Added new makeup recommendations.' },
    { version: '1.1.0', date: 'July 1, 2025', features: 'Improved skin analysis algorithm.' },
    { version: '1.0.0', date: 'June 1, 2025', features: 'Initial release of the app.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Updates</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.currentVersion}>
          <Text style={styles.versionText}>Current Version: 1.2.0</Text>
        </View>
        <TouchableOpacity style={styles.checkButton}>
          <Text style={styles.checkButtonText}>Check for Updates</Text>
        </TouchableOpacity>
        <View style={styles.updatesList}>
          {updates.map((update, index) => (
            <View key={index} style={styles.updateItem}>
              <Text style={styles.updateVersion}>Version {update.version} ({update.date})</Text>
              <Text style={styles.updateFeatures}>{update.features}</Text>
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
  currentVersion: {
    marginBottom: 10,
    alignItems: 'center',
  },
  versionText: {
    fontSize: 16,
    color: '#666',
  },
  checkButton: {
    backgroundColor: '#D1A39C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 20,
  },
  checkButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  updatesList: {
    marginTop: 10,
  },
  updateItem: {
    backgroundColor: '#F9F5F0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  updateVersion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D1A39C',
    marginBottom: 5,
  },
  updateFeatures: {
    fontSize: 16,
    color: '#666',
  },
});

export default UpdatesScreen;