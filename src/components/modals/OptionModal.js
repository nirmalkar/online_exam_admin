import React, { useContext } from "react";
import { Modal, Button } from "antd";

import { ModalContext } from "../../contexts/ModalContext";

const OptionModal = () => {
  const { optMdlVisible, setOptMdlVisible } = useContext(ModalContext);
  return (
    <Modal
      title="Question Options"
      visible={optMdlVisible}
      footer={[
        <Button key="submit" type="primary" onClick={() => setOptMdlVisible()}>
          Ok
        </Button>,
      ]}
    >
      <h3>Option Modal</h3>
    </Modal>
  );
};

export default OptionModal;
