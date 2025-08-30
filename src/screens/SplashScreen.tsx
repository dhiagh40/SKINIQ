import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Splash'
>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Intro1'); // الآن TypeScript يعرف أن 'Intro1' صحيح
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>SKINIQ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F9F5F0',
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    height: 120,
    marginBottom: 20,
    width: 120,
  },
  title: {
    color: '#333',
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
