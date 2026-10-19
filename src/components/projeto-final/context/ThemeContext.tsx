import { createContext, useState, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

type Tema = 'claro' | 'escuro';

interface ThemeContextValue {
  tema: Tema;
  alternarTema: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [tema, setTema] = useState<Tema>('claro');

  const alternarTema = () => {
    setTema((temaAtual) => (temaAtual === 'claro' ? 'escuro' : 'claro'));
  };

  const temaMui = useMemo(
    () => createTheme({ palette: { mode: tema === 'escuro' ? 'dark' : 'light' } }),
    [tema]
  );

  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      <MuiThemeProvider theme={temaMui}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTema = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTema precisa ser usado dentro de um ThemeProvider');
  }
  return context;
};
