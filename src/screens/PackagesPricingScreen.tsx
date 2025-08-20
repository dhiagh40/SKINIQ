import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type PackagesPricingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PackagesPricing'
>;

const PackagesPricingScreen = () => {
  const navigation = useNavigation<PackagesPricingScreenNavigationProp>();

  const plans = [
    { name: 'Basic Plan', price: '$9.99/month', features: ['10 analyses per month', 'Basic routines'] },
    { name: 'Premium Plan', price: '$24.99/month', features: ['Unlimited analyses', 'Advanced routines', 'Makeup recommendations'] },
    { name: 'Yearly Plan', price: '$199.99/year', features: ['All Premium features', '2 free months', 'Priority support'] },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plans & Pricing</Text>
      <ScrollView style={styles.scrollView}>
        {plans.map((plan, index) => (
          <View key={index} style={styles.planCard}>
            <Text style={styles.planName}>{plan.name}</Text>
            <Text style={styles.planPrice}>{plan.price}</Text>
            {plan.features.map((feature, featureIndex) => (
              <Text key={featureIndex} style={styles.featureText}>- {feature}</Text>
            ))}
            <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate('Payment')}
            >
              <Text style={styles.buttonText}>Choose Plan</Text>
            </TouchableOpacity>
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
  planCard: {
    backgroundColor: '#F9F5F0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  planName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D1A39C',
    marginBottom: 5,
  },
  planPrice: {
    fontSize: 18,
    color: '#666',
    marginBottom: 15,
  },
  featureText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#D1A39C',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PackagesPricingScreen;