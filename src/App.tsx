import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.sass';

import { useDispatch, useSelector } from 'react-redux';
import { initState } from './store/timers/timersActions';
import { getTokenFromLocalstorage } from './store/users/usersActions';
import { RootState } from './store/rootReducer';

import { useRoutes } from './routes';
import { PageHeader } from './containers/PageHeader';
import { Background } from './assets/Background';

export default function App() {
  const isAuth = useSelector((state: RootState) => state.users.isAuth);
  const routes = useRoutes(isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTokenFromLocalstorage());
  }, []);

  useEffect(() => {
    if (isAuth) dispatch(initState());
  }, [isAuth]);

  return (
    <div className="root">
      <BrowserRouter>
        <div className="scroll-bar">
          {/* <Background /> */}
          {isAuth && <PageHeader />}

          {routes}
        </div>
      </BrowserRouter>
    </div>
  );
}
