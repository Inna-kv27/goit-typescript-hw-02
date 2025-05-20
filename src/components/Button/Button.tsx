// src/components/Button/Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode; // Тип для вмісту кнопки (текст, іконки тощо)
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
}) => {
  return (
    <button
      type="button"
      className="Button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
