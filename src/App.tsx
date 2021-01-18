import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Container } from "./components/Container";
import { useRoutes } from "./routes";
import { PageHeader } from "./containers/PageHeader";

const routes = useRoutes;

export default function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <div>{routes}</div>
    </BrowserRouter>
  );
}
