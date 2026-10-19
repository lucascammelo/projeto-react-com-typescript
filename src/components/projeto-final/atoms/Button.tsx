import type { ReactNode, MouseEvent } from 'react';
import './Button.css';

interface ButtonProps {
  children: ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  //union type
  variante?: 'primario' | 'perigo' | 'sucesso'; 
}

const Button = ({ children, onClick, type = 'button', variante = 'primario' }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={`btn btn-${variante}`}>
      {children}
    </button>
  );
};

export default Button;
