import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import useAnalysisStore from '../store/analysisStore';

// ✅ تم تصحيح نوع التنقل ليطابق الاسم الصحيح 'ProductsRecommendationsScreen'
type ProductsRecommendationsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProductsRecommendationsScreen'
>;

const ProductsRecommendationsScreen = () => {
  const navigation = useNavigation<ProductsRecommendationsScreenNavigationProp>();
  // ✅ استخدام useAnalysisStore لجلب بيانات التحليل
  const { analysisData } = useAnalysisStore();

  // مثال لمنتجات مقترحة بناءً على بيانات وهمية
  const products = [
    { id: 1, name: 'Squalane Cleanser', category: 'Cleanser', description: 'Gently cleanses and moisturizes the skin without stripping it of its natural oils.' },
    { id: 2, name: 'Hyaluronic Acid 2% + B5', category: 'Hydration Serum', description: 'Provides deep hydration to all skin types, making the skin appear plumper and smoother.' },
    { id: 3, name: 'Salicylic Acid 2% Solution', category: 'Exfoliant', description: 'Targets blemishes and helps to clear pores, suitable for oily and acne-prone skin.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended Products</Text>
      <ScrollView style={styles.scrollView}>
        {products.map((product) => (
          <TouchableOpacity key={product.id} style={styles.productContainer}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productCategory}>{product.category}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
            {/* 💡 هنا يمكنك إضافة أزرار للتنقل إلى صفحات الشراء على Amazon/Sephora */}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
  },
  productCategory: {
    color: '#666',
    fontSize: 14,
    marginBottom: 5,
  },
  productContainer: {
    backgroundColor: '#F9F5F0',
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
  },
  productDescription: {
    color: '#333',
    fontSize: 14,
    marginTop: 5,
  },
  productName: {
    color: '#D1A39C',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
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

export default ProductsRecommendationsScreen;