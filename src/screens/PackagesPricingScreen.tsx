import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

// ✅ تم تصحيح نوع التنقل ليطابق الاسم الصحيح 'PackagesPricingScreen'
type PackagesPricingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PackagesPricingScreen'
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
              onPress={() => navigation.navigate('PaymentScreen')}
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
  button: {
    backgroundColor: '#D1A39C',
    borderRadius: 8,
    marginTop: 15,
    paddingHorizontal: 30,
    paddingVertical: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
  },
  featureText: {
    color: '#333',
    fontSize: 16,
    marginBottom: 5,
  },
  planCard: {
    alignItems: 'center',
    backgroundColor: '#F9F5F0',
    borderRadius: 10,
    marginBottom: 15,
    padding: 20,
  },
  planName: {
    color: '#D1A39C',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  planPrice: {
    color: '#666',
    fontSize: 18,
    marginBottom: 15,
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

export default PackagesPricingScreen;