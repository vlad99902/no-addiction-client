import React from 'react';

import { colors } from '../styles/colors';

type ButtonType = {
  children: React.ReactNode;
  type?: string;
  onClick(): void;
};

export const Button: React.FC<ButtonType> = ({
  children,
  type = 'main',
  onClick,
}) => {
  return (
    <button style={{ ...style, ...styleType(type) }} onClick={onClick}>
      {children}
    </button>
  );
};

const styleType = (type: string): React.CSSProperties => {
  switch (type) {
    case 'smallText':
      return {
        fontSize: '24px',
        textAlign: 'center',
        display: 'table-caption',
      };
    default:
      return {
        fontSize: '72px',
      };
  }
};

const style: React.CSSProperties = {
  backgroundColor: colors.$black,
  color: colors.$red,

  border: 'none',
  borderRadius: '20px',
  padding: '6px 52px',
  fontSize: '72px',
};
