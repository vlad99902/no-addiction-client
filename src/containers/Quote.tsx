import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { Container } from '../components/Container';
import { RootState } from '../store/rootReducer';

interface IQuote {
  author?: string | null;
  children?: React.ReactNode;
  padding?: string;
  marginBottom?: string;
  marginTop?: string;
}

export const Quote: React.FC<IQuote> = ({
  author,
  children,
  padding,
  marginBottom = '0px',
  marginTop = '0px',
}) => {
  const quote = useSelector((state: RootState) => state.timers.quote);

  return (
    <Container maxWidth="1400px" marginBottom="100px" height="50vh">
      <Container>
        <Text marginBottom={marginBottom} marginTop={marginTop}>
          {quote.quote}
        </Text>
        <Author>{quote.author}</Author>
      </Container>
    </Container>
  );
};

const Text = styled.div<{ marginBottom: string; marginTop: string }>`
  margin: 0 auto;
  font-size: 36px;
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
`;
const Author = styled.div`
  font-size: 24px;
`;
