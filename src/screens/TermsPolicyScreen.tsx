import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TermsPolicyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terms & Conditions</Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>1. Introduction</Text>
        <Text style={styles.bodyText}>
          Welcome to SKINIQ. These terms and conditions outline the rules and regulations for the use of SKINIQ's application. By accessing this app, we assume you accept these terms and conditions in full. Do not continue to use SKINIQ if you do not accept all of the terms and conditions stated on this page.
        </Text>

        <Text style={styles.sectionTitle}>2. Privacy Policy</Text>
        <Text style={styles.bodyText}>
          Your privacy is important to us. This policy explains how we collect, use, and protect your personal information, including data from your skin and face analysis. We do not share your data with third parties without your explicit consent.
        </Text>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D1A39C',
    marginTop: 15,
    marginBottom: 5,
  },
  bodyText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 10,
  },
});

export default TermsPolicyScreen;