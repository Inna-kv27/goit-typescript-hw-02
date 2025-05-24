import React from 'react';
import styles from './Button.module.css';
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
}) => {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
