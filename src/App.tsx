import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.sass';

import { useDispatch, useSelector } from 'react-redux';
import { initState } from './store/timers/timersActions';

import { useRoutes } from './routes';
import { PageHeader } from './containers/PageHeader';
import { RootState } from './store/rootReducer';
import { Loader } from './components/Loader';

export default function App() {
  const isAuth: boolean = true;
  const routes = useRoutes(isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initState());
  }, []);

  const loading = useSelector((state: RootState) => state.users.loading);

  return (
    <BrowserRouter>
      {isAuth && <PageHeader />}
      {loading ? <Loader /> : routes}
    </BrowserRouter>
  );
}
