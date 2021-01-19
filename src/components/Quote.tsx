import React from "react";

import styled from "styled-components";
import { Container } from "./Container";

interface IQuote {
  author: string;
  children: React.ReactNode;
  padding?: string;
}

export const Quote: React.FC<IQuote> = ({
  author,
  children,
  padding = "0px",
}) => {
  return (
    <Container maxWidth="1400px" padding="100px 0">
      <Text padding={padding}>{children}</Text>
      <Author>{author}</Author>
    </Container>
  );
};

const Text = styled.div<{ padding: string }>`
  margin: 0 auto;
  font-size: 36px;
  padding-bottom: ${(props) => props.padding};
`;
const Author = styled.div`
  font-size: 24px;
`;
