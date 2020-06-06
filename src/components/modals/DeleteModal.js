import React, { useContext } from "react";
import { Modal, Button } from "antd";

import { ModalContext } from "../../contexts/ModalContext";
import { QuestionContext } from "../../contexts/QuestionContext";

const OptionModal = () => {
  const { delModalVisible, setDelModalVisible, id } = useContext(ModalContext);
  const { questions, setQuestions } = useContext(QuestionContext);
  const handleQueDel = () => {
    const que = questions.filter((que) => que.id !== id);
    setQuestions(que);
    setDelModalVisible();
  };
  return (
    <Modal
      title="Question Options"
      visible={delModalVisible}
      onCancel={() => setDelModalVisible()}
      footer={[
        <Button key="submit" type="primary" onClick={handleQueDel}>
          Ok
        </Button>,
      ]}
    >
      Are you sure you want to delete?
    </Modal>
  );
};

export default OptionModal;
