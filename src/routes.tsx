import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthPage } from './pages/AuthPage';
import MainPage from './pages/MainPage';

export const useRoutes = (isAuth: boolean) => {
  if (isAuth)
    return (
      <Switch>
        <Route path="/" exact>
          <MainPage />
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
