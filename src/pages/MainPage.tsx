import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

import { Container } from '../components/Container';
import { InAddiction } from '../containers/InAddiction';

import { OutAddiction } from '../containers/OutAddiction';
import RecordsPage from './RecordsPage';

export const MainPage: React.FC = () => {
  const inAddiction = useSelector(
    (state: RootState) => state.timers.inAddiction
  );

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll(e: any) {
    const node = e.target;
    const down =
      node.documentElement.scrollHeight -
      node.documentElement.scrollTop -
      node.documentElement.clientHeight;
    if (down === 0) {
      document.location.href = '#records';
    }
    if (node.documentElement.scrollTop === 0) {
      document.location.href = '#';
    }
  }

  return (
    <div onScroll={handleScroll}>
      <div style={{ height: 'calc(100% - 100px)' }}>
        <section id="">
          <Container
            maxWidth="1600px"
            margin="0 auto"
            padding="100px 18px 0px"
            height="calc(100vh - 100px)"
          >
            {inAddiction ? <InAddiction /> : <OutAddiction />}
          </Container>
        </section>
        <section id="records">
          <RecordsPage />
        </section>
      </div>
    </div>
  );
};
