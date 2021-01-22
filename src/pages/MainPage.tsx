import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useStore } from 'react-redux';
import { RootState } from '../store/rootReducer';

import { Container } from '../components/Container';
import { InAddiction } from '../containers/InAddiction';

import { OutAddiction } from '../containers/OutAddiction';
import RecordsPage from './RecordsPage';
import { debounce } from 'lodash';

interface IParam {
  down: number;
  scrollHeight: number;
  clientHeight: number;
  scrollTop: number;
  direction: string;
}

export const MainPage: React.FC = () => {
  const inAddiction = useSelector(
    (state: RootState) => state.timers.inAddiction
  );

  // const [height, setHeight] = useState(window.innerHeight - 100);
  // const [element, setElement] = useState();

  const [direction, setDirection] = useState('');

  const [param, setParam] = useState<IParam>({
    down:
      document.documentElement.scrollHeight -
      document.documentElement.scrollTop -
      document.documentElement.clientHeight,
    scrollHeight: document.documentElement.scrollHeight,
    scrollTop: document.documentElement.scrollTop,
    clientHeight: document.documentElement.clientHeight,
    direction: 'stop',
  });

  // const animationToBottom = () => {
  //     window.scrollBy(0, 10);
  // };

  useEffect(() => {
    console.log('in use eff param.down = ', param.down);
    console.log('in use eff param.scrollHeight = ', param.scrollHeight);
    console.log('in use eff param.scrollTop = ', param.scrollTop);
    console.log('in use eff param.clientHeight = ', param.clientHeight);
    console.log('in use eff param.direction = ', param.direction);

    switch (param.direction) {
      case 'up':
        window.scroll(0, param.scrollTop - 10);
        break;
      // case 'down':

      //   break;
      default:
        window.scroll(0, param.scrollTop + 10);
        break;
    }
    // (param.direction > 0)
    // ? param =
    // if (param.direction < 0) {
    //   if (param.scrollTop >= 100) {
    //     window.scrollBy(0, 15);
    //   }
    // }
    // if (param.direction > 0) {
    //   if (param.down >= 100) {
    //     window.scrollBy(0, -15);
    //   }
    // }
  }, [param.down]);

  useEffect(() => {
    setParam({
      down:
        document.documentElement.scrollHeight -
        document.documentElement.scrollTop -
        document.documentElement.clientHeight,
      scrollHeight: document.documentElement.scrollHeight,
      scrollTop: document.documentElement.scrollTop,
      clientHeight: document.documentElement.clientHeight,
      direction: 'stop',
    });
    document.addEventListener('scroll', setParamOnScroll);
    return () => {
      document.removeEventListener('scroll', setParamOnScroll);
    };
  }, []);

  const setParamOnScroll = debounce((e: any) => {
    console.log('setParamOnScroll work');
    setParam((prev) => {
      return {
        down:
          document.documentElement.scrollHeight -
          document.documentElement.scrollTop -
          document.documentElement.clientHeight,
        scrollHeight: document.documentElement.scrollHeight,
        scrollTop: document.documentElement.scrollTop,
        clientHeight: document.documentElement.clientHeight,
        direction:
          prev.scrollTop - document.documentElement.scrollTop > 0
            ? 'up'
            : 'down',
      };
    });
  }, 0);

  // const records = document.getElementById('records');
  // if (records) {
  //   if (down <= 0) {
  //     document.location.href = '#records';
  //   }
  //   if (!!!node.documentElement.scrollTop) {
  //     document.location.href = '#';
  //   }
  // }

  return (
    <div>
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
