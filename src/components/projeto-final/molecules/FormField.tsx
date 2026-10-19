import type { ChangeEvent } from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';
import './FormField.css';

interface FormFieldProps {
  rotulo: string;
  tipo?: string;
  valor: string;
  // é tipado como um função
  aoMudar: (e: ChangeEvent<HTMLInputElement>) => void;
  nome?: string;
  erro?: string;
}

const FormField = ({ rotulo, tipo, valor, aoMudar, nome, erro }: FormFieldProps) => {
  return (
    <div>
      <Label>{rotulo}</Label>
      <Input tipo={tipo} valor={valor} aoMudar={aoMudar} nome={nome} />
      {erro && <span className="erro-campo">{erro}</span>}
    </div>
  );
};

export default FormField;
