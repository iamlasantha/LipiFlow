import mappings from './mapping.json';

const { consonants, vowels, modifiers, special, hal_kirima } = mappings;

// Sort the mapping keys by length descending to ensure the "Longest Match First" algorithm works
const consonantKeys = Object.keys(consonants).sort((a, b) => b.length - a.length);
const vowelKeys = Object.keys(vowels).sort((a, b) => b.length - a.length);
const modifierKeys = Object.keys(modifiers).sort((a, b) => b.length - a.length);
const specialKeys = Object.keys(special).sort((a, b) => b.length - a.length);

/**
 * Transliterates Phonetic text (Singlish) to Sinhala Unicode
 * using a Longest Match First pattern based on mapping.json.
 */
export function transliterate(text: string): string {
  if (!text) return '';
  
  let result = '';
  let i = 0;

  while (i < text.length) {
    // 1. Check for a Consonant Match first
    let foundConsonant = '';
    let consonantLen = 0;

    for (const k of consonantKeys) {
      if (text.startsWith(k, i)) {
        foundConsonant = k;
        consonantLen = k.length;
        break;
      }
    }

    if (foundConsonant) {
      // If we found a consonant, we check if it is followed by a modifier
      let foundModifier = '';
      let modifierLen = 0;

      for (const m of modifierKeys) {
        if (text.startsWith(m, i + consonantLen)) {
          foundModifier = m;
          modifierLen = m.length;
          break;
        }
      }

      if (foundModifier !== '') {
        // Consonant + Modifier (e.g., k + a -> ක, k + i -> කි)
        const sinhalaConsonant = consonants[foundConsonant as keyof typeof consonants];
        const sinhalaModifier = modifiers[foundModifier as keyof typeof modifiers];
        result += sinhalaConsonant + sinhalaModifier;
        i += consonantLen + modifierLen;
      } else {
        // Consonant standalone without a modifier receives a zero-inherent vowel mark (hal kirima)
        // (e.g., k -> ක්)
        const sinhalaConsonant = consonants[foundConsonant as keyof typeof consonants];
        result += sinhalaConsonant + hal_kirima;
        i += consonantLen;
      }
      continue;
    }

    // 2. Check for an Independent Vowel Match
    let foundVowel = '';
    let vowelLen = 0;

    for (const v of vowelKeys) {
      if (text.startsWith(v, i)) {
        foundVowel = v;
        vowelLen = v.length;
        break;
      }
    }

    if (foundVowel) {
      result += vowels[foundVowel as keyof typeof vowels];
      i += vowelLen;
      continue;
    }

    // 3. Check for Special Marks Match
    let foundSpecial = '';
    let specialLen = 0;

    for (const s of specialKeys) {
      if (text.startsWith(s, i)) {
        foundSpecial = s;
        specialLen = s.length;
        break;
      }
    }

    if (foundSpecial) {
      result += special[foundSpecial as keyof typeof special];
      i += specialLen;
      continue;
    }

    // 4. No Match - Append English Character
    result += text[i];
    i++;
  }

  return result;
}
