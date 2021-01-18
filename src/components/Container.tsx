import React from "react";

import styled from "styled-components";

type ContainerType = {
  maxWidth?: string;
  padding?: string;
  style?: React.CSSProperties;
  display?: string;
  margin?: string;
  marginBottom?: string;
  alignItems?: string;
  justifyContent?: string;
  pos?: string;
  lastChild?: string;
};

export const Container: React.FC<ContainerType> = ({
  children,
  maxWidth,
  padding,
  style,
  display,
  margin,
  marginBottom,
  justifyContent,
  alignItems,
  pos,
  lastChild,
}) => {
  return (
    <ContainerWrapper
      style={{
        ...style,
      }}
      padding={padding}
      maxWidth={maxWidth}
      display={display}
      margin={margin}
      marginBottom={marginBottom}
      alignItems={alignItems}
      justifyContent={justifyContent}
      pos={pos}
      lastChild={lastChild}
    >
      {children}
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div<ContainerType>`
  ${(props) => {
    if (props.pos === "space-between") {
      return `display: flex; justify-content: space-between; align-items: center; flex-grow: 1;`;
    } else if (props.pos === "start") {
      return `display: flex; justify-content: flex-start; align-items: center`;
    } else if (props.pos === "center") {
      return `display: flex; justify-content: center; align-items: center`;
    } else if (props.pos === "end") {
      return `display: flex; justify-content: flex-end; align-items: center`;
    }
  }};
  padding: ${(props) => props.padding};
  max-width: ${(props) => props.maxWidth};
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginBottom};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  :last-child {
    ${(props) => props.lastChild}
  }
`;
