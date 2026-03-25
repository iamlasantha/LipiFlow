import { useState, useCallback } from 'react';
import { transliterate as phoneticTransliterate } from '../utils/engine';
import { useStore } from '../store/useStore';
import wijesekaraMap from '../utils/wijesekara.json';

// Single character replacement transliteration format
function wijesekaraTransliterate(text: string): string {
  if (!text) return '';
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    result += (wijesekaraMap as Record<string, string>)[char] || char;
  }
  return result;
}

export function useTransliteration() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  
  const keyboardLayout = useStore((state) => state.keyboardLayout);

  // Updates the input text and simultaneously computes the output transliteration
  const handleInputChange = useCallback((newText: string) => {
    setInputText(newText);
    const result = keyboardLayout === 'singlish' 
      ? phoneticTransliterate(newText)
      : wijesekaraTransliterate(newText);
    setOutputText(result);
  }, [keyboardLayout]);

  // Utility to clear both inputs (useful for the Toolbar)
  const clear = useCallback(() => {
    setInputText('');
    setOutputText('');
  }, []);

  return {
    inputText,
    outputText,
    handleInputChange,
    clear,
  };
}
