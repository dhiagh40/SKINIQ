import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type IntroScreen2NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Intro2'
>;

const IntroScreen2 = () => {
  const navigation = useNavigation<IntroScreen2NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover Your Perfect Routine!</Text>
      <Button title="Next" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', flex: 1, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
});

export default IntroScreen2;
