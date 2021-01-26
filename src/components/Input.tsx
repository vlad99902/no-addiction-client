import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';

interface IInputArea {
  margin?: string;
  width?: string;
  height?: string;
}

interface IStyleProps {
  styleProps?: IInputArea;
}

interface IInpint extends IStyleProps {
  placeholder: string;
  type: 'text' | 'password';
  style?: React.CSSProperties;
}

export const Input: React.FC<IInpint> = ({
  placeholder,
  type,
  styleProps,
  style,
}) => {
  return (
    <InputArea
      type={type}
      placeholder={placeholder}
      styleProps={styleProps}
      style={{ ...style }}
    />
  );
};

const InputArea = styled.input<IStyleProps>`
  width: ${(props) => props.styleProps?.width};
  height: ${(props) => props.styleProps?.height};
  margin: ${(props) => props.styleProps?.margin};
  font-size: 16px;
  padding: 12px 16px;
  border: 2px solid ${colors.$gray};
  border-radius: 16px;
  outline: none;
  color: ${colors.$black};
  :focus {
    border: 2px solid ${colors.$black};
  }
  ::placeholder {
    font-weight: 400;
    color: ${colors.$gray};
  }
`;
