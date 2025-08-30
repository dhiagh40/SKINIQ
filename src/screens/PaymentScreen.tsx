import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type PaymentScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PaymentScreen'
>;

const PaymentScreen = () => {
  const navigation = useNavigation<PaymentScreenNavigationProp>();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');

  const handlePayment = () => {
    if (!cardNumber || !expiryDate || !cvv || !cardHolder) {
      Alert.alert('Error', 'Please fill in all the payment details.');
      return;
    }
    
    // هنا يمكنك إضافة منطق معالجة الدفع الفعلي
    Alert.alert('Success', 'Payment processed successfully!');
    // بعد الدفع، يمكنك التوجيه إلى شاشة التأكيد أو الصفحة الرئيسية
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Secure Payment</Text>
        <Text style={styles.subtitle}>Enter your card details to complete the subscription.</Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={setCardNumber}
            maxLength={16}
          />
          <TextInput
            style={styles.input}
            placeholder="Cardholder Name"
            value={cardHolder}
            onChangeText={setCardHolder}
          />
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="MM/YY"
              keyboardType="numeric"
              value={expiryDate}
              onChangeText={setExpiryDate}
              maxLength={5}
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="CVV"
              keyboardType="numeric"
              value={cvv}
              onChangeText={setCvv}
              maxLength={3}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Pay Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#D1A39C',
    borderRadius: 8,
    marginTop: 30,
    paddingVertical: 15,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
  },
  formContainer: {
    marginTop: 30,
    width: '100%',
  },
  halfInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  input: {
    borderColor: '#D1A39C',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 15,
    padding: 15,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center',
  },
  title: {
    color: '#333',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default PaymentScreen;