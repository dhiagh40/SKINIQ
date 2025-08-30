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
  bodyText: {
    color: '#666',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
  },
  scrollView: {
    width: '100%',
  },
  sectionTitle: {
    color: '#D1A39C',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15,
  },
  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default TermsPolicyScreen;