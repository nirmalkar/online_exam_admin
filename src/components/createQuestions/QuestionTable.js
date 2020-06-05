import React, { useContext } from "react";
import { Table } from "antd";

import { ModalContext } from "../../contexts/ModalContext";
import OptionModal from "../modals/OptionModal";

const QuestionTable = () => {
  console.log(useContext(ModalContext));
  const { setOptMdlVisible } = useContext(ModalContext);
  const columns = [
    {
      title: "Question",
      dataIndex: "question",
    },
    {
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
      title: "Address",
      dataIndex: "address",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
  ];
  return (
    <div className="has-padding-0">
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
