import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';

import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { MainPage } from './pages/MainPage';
import { Loader } from './components/Loader';
import { useSelector } from 'react-redux';
import { RootState } from './store/rootReducer';
import { Modal } from './containers/Modal';
import { SettingsPage } from './pages/SettingsPage';

export const useRoutes = (isAuth: boolean) => {
  const loading = useSelector((state: RootState) => state.users.loading.main);

  const history = useHistory();

  if (isAuth)
    return (
      <Switch>
        <Route path="/noAlco">
          <Loader isLoading={loading} />
          <MainPage />
        </Route>
        <Redirect to="/noAlco" />
      </Switch>
    );
  else
    return (
      <Switch>
        <Route path="/login">
          <Loader isLoading={loading} />
          <LoginPage />
        </Route>
        <Route path="/register">
          <Loader isLoading={loading} />
          <RegisterPage />
        </Route>
        <Redirect to="/login" />
      </Switch>
    );
};
