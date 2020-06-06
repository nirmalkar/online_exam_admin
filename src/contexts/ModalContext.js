import React, { createContext } from "react";
import PropTypes from "prop-types";

import { useInputState } from "../hooks/useInputState";
import useToggleState from "../hooks/useToggleState";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [optMdlVisible, setOptMdlVisible] = useToggleState(false);
  const [delModalVisible, setDelModalVisible] = useToggleState(false);
  const [id, setId] = useInputState("");
  return (
    <ModalContext.Provider
      value={{
        optMdlVisible,
        setOptMdlVisible,
        delModalVisible,
        setDelModalVisible,
        id,
        setId,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ModalProvider;
