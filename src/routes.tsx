import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { MainPage } from './pages/MainPage';

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
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Redirect to="/login" />
      </Switch>
    );
};
