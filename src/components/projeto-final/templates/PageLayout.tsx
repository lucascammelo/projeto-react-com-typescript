import type { ReactNode } from 'react';
import Header from '../organisms/Header';
import { useTema } from '../context/ThemeContext';
import './PageLayout.css';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const { tema } = useTema();

  return (
    <div className={`page page-${tema}`}>
      <Header />
      <main className="page-conteudo">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
