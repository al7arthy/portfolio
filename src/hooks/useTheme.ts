import { useEffect, useState } from 'react';

export default function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  const toggleTheme = () => {
    const html = document.documentElement;
    
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      setIsDark(true);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('color-theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  return { 
    theme: isDark ? 'dark' : 'light', 
    toggleTheme 
  };
}
