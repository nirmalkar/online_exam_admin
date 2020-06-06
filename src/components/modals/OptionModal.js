import React, { useContext } from "react";
import { Modal, Button, Table } from "antd";

import { ModalContext } from "../../contexts/ModalContext";
import { QuestionContext } from "../../contexts/QuestionContext";

const OptionModal = () => {
  const { optMdlVisible, setOptMdlVisible } = useContext(ModalContext);
  const { optObj } = useContext(QuestionContext);
  const optData = optObj.option;
  const optCol = [
    {
      width: 350,
      title: "Options",
      dataIndex: "title",
    },
    {
      title: "Correct Option",
      align: "center",
      dataIndex: "correct",
      render: (data) => {
        return data ? <i className="fas fa-check success fa-lg" /> : "";
      },
    },
  ];
  return (
    <Modal
      title="Question Options"
      visible={optMdlVisible}
      onCancel={() => setOptMdlVisible()}
      footer={[
        <Button key="submit" type="primary" onClick={() => setOptMdlVisible()}>
          Ok
        </Button>,
      ]}
    >
      <Table
        bordered
        size="middle"
        scroll={{ y: "calc(48vh - 4em)", x: "100%" }}
        pagination={false}
        columns={optCol}
        dataSource={optData}
      />
    </Modal>
  );
};

export default OptionModal;
