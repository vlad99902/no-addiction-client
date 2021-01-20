import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.sass';

import { useDispatch } from 'react-redux';
import { initTimers } from './store/timers/timersActions';

import { useRoutes } from './routes';
import { PageHeader } from './containers/PageHeader';

export default function App() {
  const isAuth: boolean = true;
  const routes = useRoutes(isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initTimers());
  }, []);

  return (
    <BrowserRouter>
      {isAuth && <PageHeader />}
      {routes}
    </BrowserRouter>
  );
}
