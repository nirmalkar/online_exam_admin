import React, { createContext } from "react";
import PropTypes from "prop-types";
import useToggleState from "../hooks/useToggleState";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [optMdlVisible, setOptMdlVisible] = useToggleState(false);

  return (
    <ModalContext.Provider value={{ optMdlVisible, setOptMdlVisible }}>
      {props.children}
    </ModalContext.Provider>
  );
};
ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ModalProvider;
