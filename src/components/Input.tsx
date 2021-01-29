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
  style?: React.CSSProperties;
  valid?: boolean;
}

export const Input: React.FC<IInput> = ({
  styleProps,
  style,
  valid = true,
  ...rest
}) => {
  const invalidStyle: React.CSSProperties = {
    border: `2px solid ${colors.$red}`,
  };
  !valid && (style = { ...style, ...invalidStyle });
  return (
    <>
      <InputArea
        styleProps={styleProps}
        {...rest}
        autoComplete="off"
        style={{ ...style }}
      />
    </>
  );
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
    border: 2px solid ${colors.$darkGray};
  }
  ::placeholder {
    font-weight: 400;
    color: ${colors.$gray};
  }
  /*:invalid {
    border: 2px solid ${colors.$red};
  } */
`;
