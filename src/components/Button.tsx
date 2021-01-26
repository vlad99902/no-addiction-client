import React from 'react';

import { colors } from '../styles/colors';

type TypeOfStyleType =
  | 'main'
  | 'smallText'
  | 'oneWordOneLine'
  | 'extraSmallText';

type ButtonType = {
  children: React.ReactNode;
  styleType?: TypeOfStyleType;
  onClick(e: any): void;
  type?: 'submit';
  form?: string;
};

export const Button: React.FC<ButtonType> = ({
  children,
  styleType = 'main',
  onClick,
  type,
  form,
}) => {
  const setNewLines = (children: React.ReactNode): React.ReactNode => {
    const line = String(children).trim();
    const resArray: Array<JSX.Element> = [];

    line.split(' ').forEach((word, i) => {
      resArray.push(<p key={i}>{word.trim()}</p>);
    });

    return <>{resArray.map((el) => el)}</>;
  };

  return (
    <button
      style={{ ...style, ...styleTypeFunction(styleType) }}
      onClick={onClick}
      type={type}
      form={form}
    >
      {styleType === 'oneWordOneLine' ? setNewLines(children) : children}
    </button>
  );
};

const styleTypeFunction = (type: string): React.CSSProperties => {
  switch (type) {
    case 'smallText':
      return {
        fontSize: '24px',
        textAlign: 'center',
        padding: '24px 52px',
      };
    case 'extraSmallText':
      return {
        fontSize: '16px',
        textAlign: 'center',
        padding: '10px 14px',
        borderRadius: '12px',
      };
    case 'oneWordOneLine':
      return {
        fontSize: '24px',
        textAlign: 'center',
        display: 'table-caption',
        padding: '24px 52px',
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
  cursor: 'pointer',
  userSelect: 'none',

  border: 'none',
  borderRadius: '20px',
  padding: '6px 52px',
  fontSize: '72px',
};
