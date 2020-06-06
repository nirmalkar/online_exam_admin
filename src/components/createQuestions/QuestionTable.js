import React, { useContext } from "react";
import { Table } from "antd";

import { ModalContext } from "../../contexts/ModalContext";
import { QuestionContext } from "../../contexts/QuestionContext";
import OptionModal from "../modals/OptionModal";
import DeleteModal from "../modals/DeleteModal";
const QuestionTable = () => {
  const { questions } = useContext(QuestionContext);
  const { setOptMdlVisible, setDelModalVisible, setId } = useContext(
    ModalContext
  );
  const showDelModal = (id) => {
    setDelModalVisible();
    setId(id);
  };
  const columns = [
    {
      width: 400,
      title: "Question",
      dataIndex: "question",
    },
    {
      width: 100,
      title: "Marks",
      dataIndex: "marks",
    },
    {
      width: 100,
      align: "center",
      title: "Option",
      dataIndex: "option",
      render: (option) => {
        return (
          <div style={{ textAlign: "center" }}>
            <i
              className="fas fa-lg fa-eye"
              onClick={() => setOptMdlVisible()}
            />
          </div>
        );
      },
    },
    {
      width: 100,
      align: "center",
      title: "Delete Modal",
      dataIndex: "id",
      render: (id) => {
        return (
          <div style={{ textAlign: "center" }}>
            <i
              className="fas fa-lg fa-trash"
              onClick={() => showDelModal(id)}
            />
          </div>
        );
      },
    },
  ];
  const data = questions;
  return (
    <div className="">
      <Table
        bordered
        size="middle"
        scroll={{ y: "calc(48vh - 4em)", x: "100%" }}
        pagination={false}
        columns={columns}
        dataSource={data}
      />
      <OptionModal />
      <DeleteModal />
    </div>
  );
};

export default QuestionTable;
