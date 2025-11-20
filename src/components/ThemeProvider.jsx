import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext({ mode: 'system', setMode: () => {} });

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => localStorage.getItem('theme-mode') || 'system');

  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
    const root = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = mode === 'dark' || (mode === 'system' && prefersDark);
    root.classList.toggle('dark', dark);
  }, [mode]);

  const value = useMemo(() => ({ mode, setMode }), [mode]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
