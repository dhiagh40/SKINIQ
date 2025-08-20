import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type ProductsRecommendationsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProductsRecommendations'
>;

const ProductsRecommendationsScreen = () => {
  const navigation = useNavigation<ProductsRecommendationsScreenNavigationProp>();

  const products = [
    { id: 1, name: 'Product A', category: 'Moisturizer' },
    { id: 2, name: 'Product B', category: 'Sunscreen' },
    { id: 3, name: 'Product C', category: 'Serum' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended Products</Text>
      <ScrollView style={styles.scrollView}>
        {products.map((product) => (
          <TouchableOpacity key={product.id} style={styles.productContainer}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productCategory}>{product.category}</Text>
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
  productContainer: {
    backgroundColor: '#F9F5F0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D1A39C',
    marginBottom: 5,
  },
  productCategory: {
    fontSize: 14,
    color: '#666',
  },
});

export default ProductsRecommendationsScreen;