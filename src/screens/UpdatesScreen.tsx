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
  checkButton: {
    alignSelf: 'center',
    backgroundColor: '#D1A39C',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  checkButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
  },
  currentVersion: {
    alignItems: 'center',
    marginBottom: 10,
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
  updateFeatures: {
    color: '#666',
    fontSize: 16,
  },
  updateItem: {
    backgroundColor: '#F9F5F0',
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
  },
  updateVersion: {
    color: '#D1A39C',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  updatesList: {
    marginTop: 10,
  },
  versionText: {
    color: '#666',
    fontSize: 16,
  },
});

export default UpdatesScreen;