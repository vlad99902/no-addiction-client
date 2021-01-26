import React from 'react';

import styled from 'styled-components';

type ContainerType = {
  maxWidth?: string;
  padding?: string;
  style?: React.CSSProperties;
  display?: string;
  margin?: string;
  marginBottom?: string;
  marginTop?: string;
  alignItems?: string;
  justifyContent?: string;
  pos?: string;
  width?: string;
  lastChild?: string;
  position?: string;
  visibility?: string;
  height?: string;
  onScroll?(): void;
  onClick?(e: any): void;
};

export const Container: React.FC<ContainerType> = ({
  children,
  maxWidth,
  padding,
  style,
  width,
  display,
  margin,
  marginBottom,
  marginTop,
  justifyContent,
  alignItems,
  pos,
  lastChild,
  position,
  visibility,
  height,
  onScroll,
  onClick,
}) => {
  return (
    <ContainerWrapper
      style={{
        ...style,
      }}
      padding={padding}
      maxWidth={maxWidth}
      width={width}
      display={display}
      margin={margin}
      marginBottom={marginBottom}
      alignItems={alignItems}
      justifyContent={justifyContent}
      pos={pos}
      lastChild={lastChild}
      position={position}
      visibility={visibility}
      height={height}
      marginTop={marginTop}
      onScroll={onScroll}
      onClick={onClick}
    >
      {children}
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div<ContainerType>`
  ${(props) => {
    if (props.pos === 'space-between') {
      return `display: flex; justify-content: space-between; align-items: center; flex-grow: 1;`;
    } else if (props.pos === 'start') {
      return `display: flex; justify-content: flex-start; align-items: center`;
    } else if (props.pos === 'center') {
      return `display: flex; justify-content: center; align-items: center`;
    } else if (props.pos === 'end') {
      return `display: flex; justify-content: flex-end; align-items: center`;
    }
  }};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  position: ${(props) => props.position};
  max-width: ${(props) => props.maxWidth};
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  visibility: ${(props) => props.visibility};
  height: ${(props) => props.height};
  :last-child {
    ${(props) => props.lastChild}
  }
`;
