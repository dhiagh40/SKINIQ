import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type IntroScreen1NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Intro1'
>;

const IntroScreen1 = () => {
  const navigation = useNavigation<IntroScreen1NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SKINIQ!</Text>
      <Button title="Next" onPress={() => navigation.navigate('Intro2')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', flex: 1, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
});

export default IntroScreen1;
