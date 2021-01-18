import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from "./pages/MainPage";

export const useRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/home" exact>
        <MainPage />
      </Route>
      <Redirect to="/home" />
    </Switch>
  );
};
