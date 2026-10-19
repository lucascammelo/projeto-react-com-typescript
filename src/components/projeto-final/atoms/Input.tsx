import type { ChangeEvent } from 'react';
import './Input.css';

interface InputProps {
  tipo?: string;
  valor: string;
  aoMudar: (e: ChangeEvent<HTMLInputElement>) => void;
  nome?: string;
}

const Input = ({ tipo = 'text', valor, aoMudar, nome }: InputProps) => {
  return (
    <input type={tipo} value={valor} onChange={aoMudar} name={nome} className="input" />
  );
};

export default Input;
