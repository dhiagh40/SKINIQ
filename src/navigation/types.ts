import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Splash: undefined;
  Intro1: undefined;
  Intro2: undefined;
  Intro3: undefined;
  Login: undefined;
  UserLogin: undefined;
  CreateAccount: undefined;
  ForgotPassword: undefined;
  Home: undefined;
  UploadPhoto: undefined;
  AnalysisResult: {
    skinType: string;
    issues: string;
    recommendations: string;
    imageUri?: string;
    skinTone: string;
    faceShape: string;
    morningRoutine: string[];
    eveningRoutine: string[];
    productSuggestions: string;
  };
  MorningRoutine: { routine: string[] };
  EveningRoutine: { routine: string[] };
  ProductsRecommendations: { productSuggestions: string };
  BeautySection: { skinTone: string; faceShape: string; skinType: string };
  LipstickColor: { skinTone: string };
  Eyeshadow: { skinTone: string };
  Foundation: { skinTone: string; skinType: string };
  ProductDetails: undefined;
  PackagesPricing: undefined;
  Payment: undefined;
  AnalysisHistory: undefined;
  NotificationsTips: undefined;
  SupportHelp: undefined;
  TermsPolicy: undefined;
  Settings: undefined;
  Language: undefined;
  Profile: undefined;
  Logout: undefined;
  AppNotifications: undefined;
  Updates: undefined;
  Test: undefined;
  // This is a test screen and should not be used in production
  TestScreen: undefined;
};