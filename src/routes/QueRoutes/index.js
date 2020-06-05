import React from "react";
import { Route } from "react-router-dom";

import AddQueForm from "../../components/createQuestions/AddQueForm";

const QueRoutes = () => {
  return (
    <>
      <Route exact path="/add-questions" component={AddQueForm} />
    </>
  );
};

export default QueRoutes;
