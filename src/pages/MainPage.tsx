import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

import { Container } from '../components/Container';
import { InAddiction } from '../containers/InAddiction';

import { OutAddiction } from '../containers/OutAddiction';
import RecordsPage from './RecordsPage';
import { StatusPage } from './StatusPage';
interface IParam {
  down: number;
  scrollHeight: number;
  clientHeight: number;
  scrollTop: number;
  direction: number;
}

export const MainPage: React.FC = () => {
  const [param, setParam] = useState<IParam>({
    down:
      document.documentElement.scrollHeight -
      document.documentElement.scrollTop -
      document.documentElement.clientHeight,
    scrollHeight: document.documentElement.scrollHeight * 2 - 100,
    scrollTop: document.documentElement.scrollTop,
    clientHeight: document.documentElement.clientHeight,
    direction: 0,
  });

  console.log(
    'param = ',
    param
    // ' param.scrollHeight = ',
    // param.scrollHeight,
    // 'param.clientHeight = ',
    // param.clientHeight
  );

  useEffect(() => {
    // console.log('down ', param.down);
    // console.log('scrollHeight ', param.scrollHeight);
    // console.log('scrollTop ', param.scrollTop);
    // console.log('clientHeight ', param.clientHeight);
    // console.log('direction ', param.direction);

    if (param.down <= 0) {
      document.location.href = '#records';
    }
    if (!!!param.scrollTop) {
      document.location.href = '#';
    }

    if (param.direction > 0) {
      window.scroll(0, param.scrollTop - param.scrollHeight / 100); // scroll up
    } else if (param.direction < 0) {
      window.scroll(0, param.scrollTop + param.scrollHeight / 100); // scroll down
    } else window.scrollBy(0, 0);
  });

  useEffect(() => {
    setParam({
      down:
        document.documentElement.scrollHeight -
        document.documentElement.scrollTop -
        document.documentElement.clientHeight,
      scrollHeight: document.documentElement.scrollHeight,
      scrollTop: document.documentElement.scrollTop,
      clientHeight: document.documentElement.clientHeight,
      direction: (document.location.href = '#records') ? 1 : -1,
    });
    console.log(
      'param on render = ',
      param
      // 'on init param.scrollHeight = ',
      // param.scrollHeight * 2 - 100,
      // 'param.clientHeight = ',
      // param.clientHeight
    );
    document.addEventListener('scroll', setParamOnScroll);
    return () => {
      document.removeEventListener('scroll', setParamOnScroll);
    };
  }, []);

  const setParamOnScroll = () => {
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
          prev.scrollTop - document.documentElement.scrollTop === 0
            ? prev.direction
            : prev.scrollTop - document.documentElement.scrollTop,
      };
    });
  };

  return (
    <div>
      <div style={{ height: 'calc(100% - 100px)' }}>
        <section id="">
          <StatusPage />
        </section>
        <section id="records">
          <RecordsPage />
        </section>
      </div>
    </div>
  );
};
