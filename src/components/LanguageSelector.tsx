import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types';

interface Props {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageSelector({ currentLang, onLanguageChange }: Props) {
  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4" />
      <select
        value={currentLang}
        onChange={(e) => onLanguageChange(e.target.value as Language)}
        className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}