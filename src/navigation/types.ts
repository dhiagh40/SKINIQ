export type RootStackParamList = {
  Splash: undefined;
  Intro: undefined;
  Intro2: undefined;
  Intro3: undefined;
  Login: undefined;
  Home: undefined;
  UploadPhoto: undefined;
  AnalysisResult: { 
    skinType?: string;
    issues?: string;
    recommendations?: string;
    imageUri?: string;
    morningRoutine?: string[];
    eveningRoutine?: string[];
    skinTone?: string;
    faceShape?: string;
    productSuggestions?: string;
  };
  MorningRoutine: { routine: string[] };
  EveningRoutine: { routine: string[] };
  Products: undefined;
  BeautySection: undefined;
  LipstickColor: { skinTone: string }; // ✅ أضف هذا السطر
  Eyeshadow: { skinTone: string }; // ✅ أضف هذا السطر
  Foundation: { skinTone: string; skinType: string }; // ✅ أضف هذا السطر
  // قم بإضافة باقي الشاشات هنا
};