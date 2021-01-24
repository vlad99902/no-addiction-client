import animateScrollTo from 'animated-scroll-to';
import React, { useEffect } from 'react';
import { Loader } from '../components/Loader';
import { RecordsPage } from './RecordsPage';
import { StatusPage } from './StatusPage';
import { Container } from '../components/Container';

const param = {
  animation: false,
  speed: Math.round(document.documentElement.scrollHeight / 2),
  action: 0,
};

export const MainPage: React.FC = () => {
  // const scroll = () => {
  //   if (param.action === 1 || document.location.hash === '') {
  //     param.action = 1;
  //     if (param.animation) {
  //       if (document.location.hash === '') {
  //         param.animation = false;
  //         // @ts-ignore
  //         animateScrollTo(document.getElementById('records'), {
  //           cancelOnUserAction: false,
  //           speed: param.speed,
  //         });
  //       } else if (document.location.hash === '#records') {
  //         param.animation = false;
  //         //@ts-ignore
  //         animateScrollTo(document.getElementById('#'), {
  //           cancelOnUserAction: false,
  //           speed: param.speed,
  //         });
  //       }
  //     }
  //     if (document.documentElement.scrollTop === 0) {
  //       param.animation = true;
  //     }
  //     if (
  //       document.documentElement.scrollTop ===
  //       document.documentElement.scrollHeight -
  //         document.documentElement.clientHeight
  //     ) {
  //       param.animation = true;
  //     }
  //     if (document.documentElement.scrollTop <= 0) {
  //       document.location.href = '#';
  //     } else if (
  //       document.documentElement.scrollHeight -
  //         document.documentElement.scrollTop -
  //         document.documentElement.clientHeight <=
  //       0
  //     ) {
  //       document.location.href = '#records';
  //     }
  //   } else if (param.action === 0) {
  //     param.action = 1;
  //   }
  // };

  // useEffect(() => {
  //   param.animation = true;
  //   document.addEventListener('scroll', scroll);
  //   return () => {
  //     document.removeEventListener('scroll', scroll);
  //   };
  // }, []);

  return (
    <Container margin="100px auto 0" height="calc(200vh - 200px)">
      <div style={{ height: 'calc(100% - 100px)' }}>
        <section id="">
          <Loader isLoading={false} />
          <StatusPage />
        </section>
        <section id="records" style={{}}>
          <Loader isLoading={false} />
          <RecordsPage />
        </section>
      </div>
    </Container>
  );
};
