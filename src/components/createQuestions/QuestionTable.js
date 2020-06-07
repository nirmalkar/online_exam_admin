import React, { useContext } from "react";
import { Table } from "antd";

import { ModalContext } from "../../contexts/ModalContext";
import { QuestionContext } from "../../contexts/QuestionContext";
import OptionModal from "../modals/OptionModal";
import DeleteModal from "../modals/DeleteModal";

const QuestionTable = () => {
  const {
    questions,
    setQuestion,
    setOptOne,
    setOptTwo,
    setOptThree,
    setOptFour,
    setMarks,
    setCorrectOpt,
    setIsEdit,
  } = useContext(QuestionContext);
  const { setOptMdlVisible, setDelModalVisible, setId } = useContext(
    ModalContext
  );
  const showDelModal = (id) => {
    setDelModalVisible();
    setId(id);
  };
  const editQuestion = (id) => {
    setId(id);
    setIsEdit();
    questions.forEach((que) => {
      if (que.id === id) {
        setQuestion(que.question);
        setMarks(que.marks);
        setCorrectOpt(que.correctOpt);
        que.option.forEach((opt, i) => {
          if (opt.id === JSON.stringify(i + 1)) {
            setOptOne(opt.title);
            setOptTwo(opt.title);
            setOptThree(opt.title);
            setOptFour(opt.title);
          }
          return opt;
        });
        return que;
      }
    });
  };
  const columns = [
    {
      title: "Question",
      width: 400,
      dataIndex: "question",
    },
    {
      width: 100,
      title: "Marks",
      dataIndex: "marks",
    },
    {
      title: "Option",
      width: 100,
      align: "center",
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
      title: "Edit",
      width: 100,
      align: "center",
      dataIndex: "id",
      render: (id) => {
        return (
          <div style={{ textAlign: "center" }}>
            <i
              className="fas fa-lg fa-pencil-alt"
              onClick={() => editQuestion(id)}
            />
          </div>
        );
      },
    },
    {
      width: 100,
      align: "center",
      title: "Delete",
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
