import { useState, useCallback } from 'react';
import { transliterate } from '../utils/engine';

export function useTransliteration() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  // Updates the input text and simultaneously computes the output transliteration
  const handleInputChange = useCallback((newText: string) => {
    setInputText(newText);
    const result = transliterate(newText);
    setOutputText(result);
  }, []);

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
