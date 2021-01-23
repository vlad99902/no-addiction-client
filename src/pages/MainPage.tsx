import animateScrollTo from 'animated-scroll-to';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import RecordsPage from './RecordsPage';
import StatusPage from './StatusPage';
interface IParam {
  down: number;
  scrollHeight: number;
  clientHeight: number;
  scrollTop: number;
  direction: number;
}
const param = {
  animation: false,
  speed: Math.round(document.documentElement.scrollHeight / 0.7),
  action: 0,
};

const MainPage: React.FC = () => {
  const scroll = () => {
    if (param.action === 1 || document.location.hash === '') {
      param.action = 1;
      if (param.animation) {
        if (document.location.hash === '') {
          param.animation = false;
          // @ts-ignore
          animateScrollTo(document.getElementById('records'), {
            cancelOnUserAction: false,
            speed: param.speed,
          });
        } else if (document.location.hash === '#records') {
          param.animation = false;
          //@ts-ignore
          animateScrollTo(document.getElementById('#'), {
            cancelOnUserAction: false,
            speed: param.speed,
          });
        }
      }
      if (document.documentElement.scrollTop === 0) {
        param.animation = true;
      }
      if (
        document.documentElement.scrollTop ===
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      ) {
        param.animation = true;
      }
      if (document.documentElement.scrollTop <= 0) {
        document.location.href = '#';
      } else if (
        document.documentElement.scrollHeight -
          document.documentElement.scrollTop -
          document.documentElement.clientHeight <=
        0
      ) {
        document.location.href = '#records';
      }
    } else if (param.action === 0) {
      param.action = 1;
      console.log('param.action changed, action = ', param.action);
    }
  };
  useEffect(() => {
    param.animation = true;
    console.log('component did mount');
    document.addEventListener('scroll', scroll);
    return () => {
      document.removeEventListener('scroll', scroll);
    };
  }, []);
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
