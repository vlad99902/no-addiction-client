import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from './components/Container';
import { Loader } from './components/Loader';

import { AuthPage } from './pages/AuthPage';
import MainPage from './pages/MainPage';
import RecordsPage from './pages/RecordsPage';

export const useRoutes = (isAuth: boolean) => {
  if (isAuth)
    return (
      <Switch>
        <Route path="/" exact>
          <MainPage />
          <RecordsPage />
        </Route>
        <Route path="/records">
          <RecordsPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  else
    return (
      <Switch>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
};
