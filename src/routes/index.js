import React from "react";
import { Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
  return (
    <>
      <Route exact path="/" render={() => <LandingPage />} />
      <Route path="/dashboard" render={() => <Dashboard />} />
    </>
  );
};

export default Routes;
