import { describe, it, expect } from 'vitest';
import { transliterate } from './engine';

describe('Singlish to Sinhala Transliteration Engine', () => {
  it('should translate single consonants using hal kirima', () => {
    expect(transliterate('k')).toBe('ක්');
    expect(transliterate('m')).toBe('ම්');
    expect(transliterate('T')).toBe('ඨ්');
  });

  it('should translate consonants with modifiers correctly', () => {
    expect(transliterate('ka')).toBe('ක');
    expect(transliterate('kii')).toBe('කී');
    expect(transliterate('koo')).toBe('කෝ');
    expect(transliterate('zga')).toBe('ඟ');
  });

  it('should translate complex modifiers like ru/ruu', () => {
    expect(transliterate('kru')).toBe('කෘ');
    expect(transliterate('kruu')).toBe('කෲ');
  });

  it('should handle rakaransaya natively by producing consonant + r', () => {
    // 'k' -> ක්, 'r' -> ර්, 'a' -> ් replaced by empty, so 'ක්ර'
    expect(transliterate('kra')).toBe('ක්ර'); 
    expect(transliterate('pri')).toBe('ප්රි'); 
  });

  it('should handle yansaya natively by producing consonant + y', () => {
    expect(transliterate('kya')).toBe('ක්ය');
    expect(transliterate('thyoo')).toBe('ත්යෝ');
  });

  it('should correctly handle special independent marks like visarga and anusvara', () => {
    expect(transliterate('kaH')).toBe('කඃ');
    expect(transliterate('kax')).toBe('කං');
    expect(transliterate('kazn')).toBe('කං');
    expect(transliterate('kaX')).toBe('කඞ');
  });

  it('should translate standalone vowels as independent characters', () => {
    expect(transliterate('a')).toBe('අ');
    expect(transliterate('uu')).toBe('ඌ');
    expect(transliterate('ai')).toBe('ඓ');
    expect(transliterate('R')).toBe('ඍ');
  });

  it('should translate long words and sentences accurately', () => {
    expect(transliterate('sinhala')).toBe('සින්හල');
    expect(transliterate('kaamaithhii')).toBe('කාමෛථී'); // Note: arbitrary test word
    expect(transliterate('obata sthuthiy')).toBe('ඔබට ස්තුතිය්');
  });
  
  it('should handle non-matching characters natively (preservation)', () => {
    expect(transliterate('k123')).toBe('ක්123');
    expect(transliterate('hello world!')).toBe('හෙල්ලො වොර්ල්ඩ්!'); // rough phonetics
  });
});
