import { create } from 'zustand';

interface AnalysisState {
  skinTone: string | null;
  faceShape: string | null;
  skinType: string | null;
  setAnalysisData: (data: { skinTone: string; faceShape: string; skinType: string }) => void;
  clearAnalysisData: () => void;
}

const useAnalysisStore = create<AnalysisState>((set) => ({
  skinTone: null,
  faceShape: null,
  skinType: null,
  setAnalysisData: (data) => set(data),
  clearAnalysisData: () => set({ skinTone: null, faceShape: null, skinType: null }),
}));

export default useAnalysisStore;