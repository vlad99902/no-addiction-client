import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.sass';

import { useRoutes } from './routes';
import { PageHeader } from './containers/PageHeader';

export default function App() {
  const isAuth: boolean = true;
  const routes = useRoutes(isAuth);

  return (
    <BrowserRouter>
      {isAuth && <PageHeader />}
      {routes}
    </BrowserRouter>
  );
}
