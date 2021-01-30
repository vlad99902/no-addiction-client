import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { colors, IColors } from '../styles/colors';

type designType = 'normal' | 'negative' | 'switchOn' | 'switchOff';

interface ISecondButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  design: designType;
  width?: string;
  padding?: string;
}

// interface IStyledButton {}

export const SecondButton: React.FC<ISecondButton> = ({
  design,
  children,
  width,
  padding,
  ...rest
}) => {
  return (
    <StyledButton
      {...rest}
      style={{ ...styleType(design), ...rest.style }}
      width={width}
      padding={padding}
    >
      {children}
    </StyledButton>
  );
};

const styleType = (design: designType): React.CSSProperties => {
  switch (design) {
    case 'negative':
      return {
        backgroundColor: colors.$pink,
        color: colors.$absolutlyWhite,
      };
    case 'switchOn':
      return {
        backgroundColor: colors.$black,
        color: colors.$absolutlyWhite,
      };
    case 'switchOff':
      return {
        color: colors.$black,
        border: `1px solid ${colors.$black}`,
        backgroundColor: 'transparent',
      };
    default:
      return {
        backgroundColor: colors.$purple,
        color: colors.$absolutlyWhite,
      };
  }
};

const StyledButton = styled.button<{ width?: string; padding?: string }>`
  width: ${(p) => p.width};
  cursor: pointer;
  user-select: none;
  border: none;
  font-family: 'Alegreya Sans';
  padding: ${(p) => p.padding || '10px 15px'};
  border-radius: 18px;
  font-size: 18px;
`;
