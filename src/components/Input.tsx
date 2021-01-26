import React, { InputHTMLAttributes } from 'react';
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
interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  styleProps?: IInputArea;
}

export const Input: React.FC<IInput> = ({ styleProps, ...rest }) => {
  return <InputArea style={styleProps} {...rest} />;
};

const InputArea = styled.input<IStyleProps>`
  width: ${(props) => props.styleProps?.width || '100%'};
  height: ${(props) => props.styleProps?.height || '100%'};
  margin: ${(props) => props.styleProps?.margin || '0 auto'};
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
  :invalid {
    border: 2px solid ${colors.$red};
  }
`;