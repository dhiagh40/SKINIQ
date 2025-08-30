import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type ProductDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProductDetails'
>;

const ProductDetailsScreen = () => {
  const navigation = useNavigation<ProductDetailsScreenNavigationProp>();

  const product = {
    name: 'Placeholder Product Name',
    brand: 'Placeholder Brand',
    description: 'This is a placeholder description for the recommended product. It will be replaced with real product information based on the user\'s skin type and concerns.',
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productBrand}>{product.brand}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy Now</Text>
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
    paddingHorizontal: 40,
    paddingVertical: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  productBrand: {
    color: '#666',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  productDescription: {
    color: '#333',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 30,
    textAlign: 'justify',
  },
  productName: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  scrollContent: {
    alignItems: 'center',
    padding: 20,
  },
});

export default ProductDetailsScreen;