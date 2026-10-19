import type { ReactNode } from 'react';
import './Label.css';

interface LabelProps {
  children: ReactNode;
}

const Label = ({ children }: LabelProps) => {
  return <label className="label">{children}</label>;
};

export default Label;
