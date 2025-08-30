import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from '../screens/SplashScreen';
import IntroScreen1 from '../screens/IntroScreen1';
import IntroScreen2 from '../screens/IntroScreen2';
import IntroScreen3 from '../screens/IntroScreen3';
import LoginScreen from '../screens/LoginScreen';
import UserLoginScreen from '../screens/UserLoginScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import UploadPhotoScreen from '../screens/UploadPhotoScreen';
import AnalysisResultScreen from '../screens/AnalysisResultScreen';
import MorningRoutineScreen from '../screens/MorningRoutineScreen';
import EveningRoutineScreen from '../screens/EveningRoutineScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ProductsRecommendationsScreen from '../screens/ProductsRecommendationsScreen';
import BeautySectionScreen from '../screens/BeautySectionScreen';
import LipstickColorScreen from '../screens/LipstickColorScreen';
import EyeshadowScreen from '../screens/EyeshadowScreen';
import FoundationScreen from '../screens/FoundationScreen';
import PackagesPricingScreen from '../screens/PackagesPricingScreen';
import PaymentScreen from '../screens/PaymentScreen';
import AnalysisHistoryScreen from '../screens/AnalysisHistoryScreen';
import NotificationsTipsScreen from '../screens/NotificationsTipsScreen';
import SupportHelpScreen from '../screens/SupportHelpScreen';
import TermsPolicyScreen from '../screens/TermsPolicyScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LanguageScreen from '../screens/LanguageScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LogoutScreen from '../screens/LogoutScreen';
import AppNotificationsScreen from '../screens/AppNotificationsScreen';
import UpdatesScreen from '../screens/UpdatesScreen';
import TestScreen from '../screens/TestScreen';

import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Intro1" component={IntroScreen1} />
        <Stack.Screen name="Intro2" component={IntroScreen2} />
        <Stack.Screen name="Intro3" component={IntroScreen3} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="UserLoginScreen" component={UserLoginScreen} />
        <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />
        <Stack.Screen name="UploadPhotoScreen" component={UploadPhotoScreen} options={{ headerShown: true }} />
        <Stack.Screen name="AnalysisResultScreen" component={AnalysisResultScreen} options={{ headerShown: true }} />
        <Stack.Screen name="MorningRoutineScreen" component={MorningRoutineScreen} options={{ headerShown: true }} />
        <Stack.Screen name="EveningRoutineScreen" component={EveningRoutineScreen} options={{ headerShown: true }} />
        <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} options={{ headerShown: true }} />
        <Stack.Screen name="ProductsRecommendationsScreen" component={ProductsRecommendationsScreen} options={{ headerShown: true }} />
        <Stack.Screen name="BeautySectionScreen" component={BeautySectionScreen} options={{ headerShown: true }} />
        <Stack.Screen name="LipstickColorScreen" component={LipstickColorScreen} options={{ headerShown: true }} />
        <Stack.Screen name="EyeshadowScreen" component={EyeshadowScreen} options={{ headerShown: true }} />
        <Stack.Screen name="FoundationScreen" component={FoundationScreen} options={{ headerShown: true }} />
        <Stack.Screen name="PackagesPricingScreen" component={PackagesPricingScreen} options={{ headerShown: true }} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{ headerShown: true }} />
        <Stack.Screen name="AnalysisHistoryScreen" component={AnalysisHistoryScreen} options={{ headerShown: true }} />
        <Stack.Screen name="NotificationsTipsScreen" component={NotificationsTipsScreen} options={{ headerShown: true }} />
        <Stack.Screen name="SupportHelpScreen" component={SupportHelpScreen} options={{ headerShown: true }} />
        <Stack.Screen name="TermsPolicyScreen" component={TermsPolicyScreen} options={{ headerShown: true }} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: true }} />
        <Stack.Screen name="LanguageScreen" component={LanguageScreen} options={{ headerShown: true }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: true }} />
        <Stack.Screen name="LogoutScreen" component={LogoutScreen} options={{ headerShown: true }} />
        <Stack.Screen name="AppNotificationsScreen" component={AppNotificationsScreen} options={{ headerShown: true }} />
        <Stack.Screen name="UpdatesScreen" component={UpdatesScreen} options={{ headerShown: true }} />
        <Stack.Screen name="TestScreen" component={TestScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;