import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'amber' | 'emerald' | 'amethyst';

export interface ThemeConfig {
  id: ThemeMode;
  name: string;
  badge: string;
  primaryColor: string;
  secondaryColor: string;
  gradient: string;
  iconColor: string;
}

export const THEME_OPTIONS: ThemeConfig[] = [
  {
    id: 'amber',
    name: 'Sunset Amber',
    badge: '🔥 Amber',
    primaryColor: '#FF8C00',
    secondaryColor: '#EC4899',
    gradient: 'from-[#FF8C00] via-[#EC4899] to-[#A855F7]',
    iconColor: 'bg-[#FF8C00]',
  },
  {
    id: 'emerald',
    name: 'Cyber Emerald',
    badge: '⚡ Emerald',
    primaryColor: '#10B981',
    secondaryColor: '#06B6D4',
    gradient: 'from-[#10B981] via-[#06B6D4] to-[#3B82F6]',
    iconColor: 'bg-[#10B981]',
  },
  {
    id: 'amethyst',
    name: 'Royal Amethyst',
    badge: '🔮 Amethyst',
    primaryColor: '#A855F7',
    secondaryColor: '#3B82F6',
    gradient: 'from-[#A855F7] via-[#3B82F6] to-[#06B6D4]',
    iconColor: 'bg-[#A855F7]',
  },
];

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  activeThemeConfig: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('tanova_theme');
    return (saved as ThemeMode) || 'amber';
  });

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('tanova_theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const activeThemeConfig = THEME_OPTIONS.find((t) => t.id === theme) || THEME_OPTIONS[0];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, activeThemeConfig }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
