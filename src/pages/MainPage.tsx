import animateScrollTo from 'animated-scroll-to';
import React, { useEffect } from 'react';
import { Loader } from '../components/Loader';
import { RecordsPage } from './RecordsPage';
import { StatusPage } from './StatusPage';
import { Container } from '../components/Container';
import { Input } from '../components/Input';
import { animationSpeed } from '../constants/validationConst';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { Link, Route, useHistory, useLocation } from 'react-router-dom';
import { Modal } from '../containers/Modal';
import { SettingsPage } from './SettingsPage';

const param = {
  animation: false,
  speed: animationSpeed,
  action: 0,
};

export const MainPage: React.FC = () => {
  const loading = useSelector(
    (state: RootState) => state.users.loading.component
  );
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
  //         animateScrollTo(0, 0, {
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
  const history = useHistory();
  const locate = useLocation();

  return (
    <Container margin="100px auto 0" height="calc(200vh - 200px)">
      <Route
        path={`${locate.pathname.slice(0, -9)}/settings`}
        children={({ match }) => {
          return (
            <Modal
              setIsOpened={history.goBack}
              isOpened={!!match}
              maxWidth="1000px"
            >
              <SettingsPage />
            </Modal>
          );
        }}
      />
      <div style={{ height: 'calc(100% - 100px)' }}>
        <Loader isLoading={loading} />
        <section>
          <StatusPage />
        </section>
        <section id="records" style={{}}>
          <RecordsPage />
        </section>
      </div>
    </Container>
  );
};
