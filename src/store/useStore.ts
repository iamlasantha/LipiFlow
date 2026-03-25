import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  keyboardLayout: 'singlish' | 'wijesekara';
  customMappings: Record<string, string>;
  setKeyboardLayout: (layout: 'singlish' | 'wijesekara') => void;
  updateCustomMapping: (key: string, value: string) => void;
  clearCustomMappings: () => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      keyboardLayout: 'singlish',
      customMappings: {},
      
      setKeyboardLayout: (layout) => set({ keyboardLayout: layout }),
      
      updateCustomMapping: (key, value) => 
        set((state) => ({
          customMappings: { ...state.customMappings, [key]: value },
        })),
        
      clearCustomMappings: () => set({ customMappings: {} }),
    }),
    {
      name: 'lipi-flow-settings', // unique name
    }
  )
);
