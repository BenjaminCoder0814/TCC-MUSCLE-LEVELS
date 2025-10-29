import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useCurrentLocale, useChangeLocale } from 'locales/client';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh-CN', name: '中文 (简体)', flag: '🇨🇳' }
];

// Valid locales that match the middleware configuration
const validLocales = ['pt', 'en', 'es', 'fr', 'ru', 'zh-CN'];

export const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const router = useRouter();
  const pathname = usePathname();

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  // Debug info
  React.useEffect(() => {
    console.log('LanguageSelector Debug:', {
      currentLocale,
      pathname,
      validLocales,
      languages,
      currentLanguage
    });
  }, [currentLocale, pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (languageCode: string) => {
    setIsOpen(false);
    
    try {
      // Validate locale
      if (!validLocales.includes(languageCode)) {
        console.error('Invalid locale:', languageCode);
        return;
      }
      
      // Don't change if already on the same locale
      if (currentLocale === languageCode) {
        return;
      }
      
      // Get current path without locale using pathname
      let pathWithoutLocale = pathname;
      
      // Remove current locale from path (support both xx and xx-XX formats)
      const localeRegex = /^\/[a-z]{2}(-[A-Z]{2})?/;
      if (localeRegex.test(pathWithoutLocale)) {
        pathWithoutLocale = pathWithoutLocale.replace(localeRegex, '') || '/';
      }
      
      // Ensure path starts with /
      if (!pathWithoutLocale.startsWith('/')) {
        pathWithoutLocale = '/' + pathWithoutLocale;
      }
      
      // Create new path with new locale
      const newPath = `/${languageCode}${pathWithoutLocale}`;
      
      console.log('Language change:', {
        from: currentLocale,
        to: languageCode,
        currentPath: pathname,
        pathWithoutLocale,
        newPath
      });
      
      // Navigate to new path
      router.push(newPath);
      
    } catch (error) {
      console.error('Error changing language:', error);
      // Fallback to home page with new locale
      if (validLocales.includes(languageCode)) {
        router.push(`/${languageCode}`);
      }
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        aria-label="Select language"
        title={`Current language: ${currentLanguage.name}`}
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">{currentLanguage.flag}</span>
        <ChevronDown className="w-3 h-3" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 py-1">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center space-x-3 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                currentLocale === language.code
                  ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              disabled={currentLocale === language.code}
              title={`Switch to ${language.name}`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="font-medium">{language.name}</span>
              {currentLocale === language.code && (
                <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};