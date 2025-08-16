import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const AnalysisHistoryScreen = () => {
  const historyRecords = [
    { id: 1, date: '2025-08-10', summary: 'Skin Type: Oily, Issues: Acne' },
    { id: 2, date: '2025-07-25', summary: 'Skin Type: Combination, Issues: Dry patches' },
    { id: 3, date: '2025-06-15', summary: 'Skin Type: Normal, Issues: T-zone shine' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Analysis History</Text>
      <ScrollView style={styles.scrollView}>
        {historyRecords.map((record) => (
          <TouchableOpacity key={record.id} style={styles.recordItem}>
            <Text style={styles.recordDate}>{record.date}</Text>
            <Text style={styles.recordSummary}>{record.summary}</Text>
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
  recordItem: {
    backgroundColor: '#F9F5F0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  recordDate: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D1A39C',
    marginBottom: 5,
  },
  recordSummary: {
    fontSize: 16,
    color: '#666',
  },
});

export default AnalysisHistoryScreen;