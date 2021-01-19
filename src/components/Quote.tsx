import React from "react";

import styled from "styled-components";
import { Container } from "./Container";

interface IQuote {
  author?: string;
  children: React.ReactNode;
  padding?: string;
  marginBottom?: string;
}

export const Quote: React.FC<IQuote> = ({
  author,
  children,
  padding,
  marginBottom = "0px",
}) => {
  return (
    <Container maxWidth="1400px" marginBottom="100px">
      <Text marginBottom={marginBottom}>{children}</Text>
      <Author>{author}</Author>
    </Container>
  );
};

const Text = styled.div<{ marginBottom: string }>`
  margin: 0 auto;
  font-size: 36px;
  margin-bottom: ${(props) => props.marginBottom};
`;
const Author = styled.div`
  font-size: 24px;
`;
