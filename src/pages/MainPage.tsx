import animateScrollTo from 'animated-scroll-to';
import React, { useCallback, useEffect, useState } from 'react';
import RecordsPage from './RecordsPage';
import StatusPage from './StatusPage';
interface IParam {
  down: number;
  scrollHeight: number;
  clientHeight: number;
  scrollTop: number;
  direction: number;
}

const MainPage: React.FC = () => {
  const [param, setParam] = useState<IParam>({
    down: 0,
    scrollHeight: 0,
    scrollTop: 0,
    clientHeight: 0,
    direction: 0,
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
      direction: 0,
    });
    console.log('component did mount');
    document.addEventListener('scroll', setParamOnScroll);
    return () => {
      document.removeEventListener('scroll', setParamOnScroll);
    };
  }, []);

  useEffect(() => {
    if (param.direction !== 0)
      if (param.scrollTop <= 0) {
        document.location.href = '#';
      } else if (param.down <= 0) {
        document.location.href = '#records';
      }

    if (param.direction > 0) {
      window.scroll(0, param.scrollTop - param.scrollHeight / 50); // scroll up
    } else if (param.direction < 0) {
      window.scroll(0, param.scrollTop + param.scrollHeight / 50); // scroll down
    }
    // else window.scrollBy(0, 0);
  });

  const setParamOnScroll = () => {
    console.count('setParamOnScroll worked');

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
          {console.count('mainPage render')}
          <StatusPage />
        </section>
        <section id="records">
          <RecordsPage />
        </section>
      </div>
    </div>
  );
};

export default React.memo(MainPage);
