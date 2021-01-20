import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { Container } from '../components/Container';
import { Loader } from '../components/Loader';
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
  // const loading = useSelector((state: RootState) => state.users.loading);
  const loading = true;
  const visibility = (loading: boolean) => {
    if (loading) return 'hidden';
    else return 'visible';
  };
  const display = (loading: boolean) => {
    if (loading) return 'block';
    else return 'none';
  };
  return (
    <>
      <Container
        maxWidth="1400px"
        marginBottom="100px"
        visibility={visibility(loading)}
      >
        <Text marginBottom={marginBottom} marginTop={marginTop}>
          {quote.quote}
        </Text>
        <Author>{quote.author}</Author>
        <Loader display={display(loading)} />
      </Container>
    </>
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
