import React, { useContext } from "react";
import { Modal, Button, Table } from "antd";

import { ModalContext } from "../../contexts/ModalContext";

const OptionModal = () => {
  const { optMdlVisible, setOptMdlVisible } = useContext(ModalContext);
  const optData = [];
  const optCol = [
    {
      width: 350,
      title: "Options",
      dataIndex: "option",
    },
    {
      title: "Correct Option",
      dataIndex: "correct",
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
