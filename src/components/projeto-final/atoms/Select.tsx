import type { ChangeEvent, ReactNode } from 'react';
import './Input.css';

interface SelectProps {
  valor: string;
  aoMudar: (e: ChangeEvent<HTMLSelectElement>) => void;
  nome?: string;
  children: ReactNode;
}

const Select = ({ valor, aoMudar, nome, children }: SelectProps) => {
  return (
    <select value={valor} onChange={aoMudar} name={nome} className="input">
      {children}
    </select>
  );
};

export default Select;
