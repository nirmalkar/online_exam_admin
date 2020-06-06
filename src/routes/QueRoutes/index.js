import React from "react";
import { Route } from "react-router-dom";

import ModalProvider from "../../contexts/ModalContext";
import AddQueForm from "../../components/createQuestions/AddQueForm";

const QueRoutes = () => {
  return (
    <>
      <ModalProvider>
        <Route exact path="/dashboard/create-question" component={AddQueForm} />
      </ModalProvider>
    </>
  );
};

export default QueRoutes;
