import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.sass';

import { useDispatch, useSelector } from 'react-redux';
import { getCurrentTimer, initTimers } from './store/timers/timersActions';

import { RootState } from './store/rootReducer';
import { useRoutes } from './routes';
import { PageHeader } from './containers/PageHeader';

export default function App() {
  const isAuth: boolean = true;
  const routes = useRoutes(isAuth);

  const dispatch = useDispatch();
  const currentTimer = useSelector(
    (state: RootState) => state.timers.currentTimer,
  );
  // console.log(currentTimer);

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
