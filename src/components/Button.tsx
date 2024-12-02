import { ReactNode } from 'react';
import '../styles/button.css';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ children, disabled = false, onClick }: ButtonProps) => {
  return (
    <button className="buttonContainer" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
