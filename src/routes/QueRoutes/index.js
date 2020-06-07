import React from "react";
import { Route } from "react-router-dom";

import ModalProvider from "../../contexts/ModalContext";
import QueForm from "../../components/createQuestions/QueForm";

const QueRoutes = () => {
  return (
    <>
      <ModalProvider>
        <Route exact path="/dashboard/create-question" component={QueForm} />
      </ModalProvider>
    </>
  );
};

export default QueRoutes;
