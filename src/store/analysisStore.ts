import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 1. تعريف أنواع البيانات في المخزن
interface AnalysisState {
  imageUri: string | null;
  skinType: string | null;
  issues: string | null;
  recommendations: string | null;
  skinTone: string | null;
  faceShape: string | null;
  morningRoutine: string[];
  eveningRoutine: string[];
  productSuggestions: string | null;
  
  // ✅ أضفنا دالة setAnalysisData
  setAnalysisData: (data: Partial<AnalysisState>) => void;
  clearAnalysisResult: () => void;
}

// 2. إنشاء المخزن مع إضافة خاصية الحفظ الدائم
const useAnalysisStore = create<AnalysisState>()(
  persist(
    (set) => ({
      // الحالة الأولية (Initial State)
      imageUri: null,
      skinType: null,
      issues: null,
      recommendations: null,
      skinTone: null,
      faceShape: null,
      morningRoutine: [],
      eveningRoutine: [],
      productSuggestions: null,

      // الإجراءات (Actions)
      setAnalysisData: (data) => set((state) => ({ ...state, ...data })),
      clearAnalysisResult: () => set({
        imageUri: null,
        skinType: null,
        issues: null,
        recommendations: null,
        skinTone: null,
        faceShape: null,
        morningRoutine: [],
        eveningRoutine: [],
        productSuggestions: null,
      }),
    }),
    {
      name: 'analysis-storage', // اسم فريد للمخزن
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useAnalysisStore;