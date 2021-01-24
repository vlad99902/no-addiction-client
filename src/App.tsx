import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.sass';

import { useDispatch } from 'react-redux';
import { initState } from './store/timers/timersActions';

import { useRoutes } from './routes';
import { PageHeader } from './containers/PageHeader';
import { Container } from './components/Container';

export default function App() {
  const isAuth: boolean = true;
  const routes = useRoutes(isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initState());
  }, []);

  return (
    <div className="root">
      <BrowserRouter>
        {isAuth && <PageHeader />}

        {routes}
      </BrowserRouter>
    </div>
  );
}
