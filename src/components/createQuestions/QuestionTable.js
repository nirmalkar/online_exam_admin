import React, { useContext } from "react";
import { Table } from "antd";

import { ModalContext } from "../../contexts/ModalContext";
import OptionModal from "../modals/OptionModal";
import { QuestionContext } from "../../contexts/QuestionContext";

const QuestionTable = () => {
  const { questions } = useContext(QuestionContext);
  const { setOptMdlVisible } = useContext(ModalContext);
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
    </div>
  );
};

export default QuestionTable;
