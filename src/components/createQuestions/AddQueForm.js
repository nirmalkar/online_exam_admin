import React, { useContext } from "react";
import { Form, Input, Button, Select, InputNumber, Card, message } from "antd";
import { v4 as uuid } from "uuid";

import QuestionTable from "./QuestionTable";
import { QuestionContext } from "../../contexts/QuestionContext";

const { Option } = Select;
const { TextArea } = Input;
const AddQueForm = () => {
  const {
    question,
    setQuestion,
    resetQuestion,
    optOne,
    setOptOne,
    resetOptOne,
    optTwo,
    setOptTwo,
    resetOptTwo,
    optThree,
    setOptThree,
    resetOptThree,
    optFour,
    setOptFour,
    resetOptFour,
    marks,
    setMarks,
    resetMarks,
    correctOpt,
    setCorrectOpt,
    resetCorrectOpt,
    optObj,
    setOptObj,
    questions,
    setQuestions,
  } = useContext(QuestionContext);
  const formItemLayout = {
    labelCol: { sm: { span: 6 }, md: { span: 4 } },
    wrapperCol: {
      sm: { span: 18 },
      md: { span: 20 },
      lg: { span: 19 },
      xl: { span: 18 },
    },
  };
  const onFinish = () => {
    if (
      !question ||
      !optOne ||
      !optTwo ||
      !optThree ||
      !optFour ||
      !marks ||
      !correctOpt
    ) {
      message.info("Please fill all the fields");
      return;
    }

    const option = optObj.option.map((opt) => {
      if (opt.id === correctOpt) {
        opt.correct = true;
      }
      return opt;
    });
    setQuestions([...questions, { question, id: uuid(), option, marks }]);
    resetQuestion();
    resetOptOne();
    resetOptTwo();
    resetOptThree();
    resetOptFour();
    resetMarks();
    resetMarks();
    resetCorrectOpt();
  };
  const onCorrOptChange = (val) => {
    setCorrectOpt(val);
    setOptObj({
      option: [
        { title: optOne, id: "1", correct: false },
        { title: optTwo, id: "2", correct: false },
        { title: optThree, id: "3", correct: false },
        { title: optFour, id: "4", correct: false },
      ],
    });
  };
  return (
    <>
      <Card className="has-margin-top-1 has-margin-right-1 has-margin-left-1">
        <Form
          {...formItemLayout}
          layout="horizontal"
          className="has-margin-top-2"
          onFinish={onFinish}
        >
          <Form.Item label="Question">
            <TextArea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="b-r"
              rows={3}
            />
          </Form.Item>
          <Form.Item label="Option One">
            <Input
              value={optOne}
              onChange={(e) => setOptOne(e.target.value)}
              className="b-r"
            />
          </Form.Item>
          <Form.Item label="Option Two">
            <Input
              value={optTwo}
              onChange={(e) => setOptTwo(e.target.value)}
              className="b-r"
            />
          </Form.Item>
          <Form.Item label="Option Three">
            <Input
              value={optThree}
              onChange={(e) => setOptThree(e.target.value)}
              className="b-r"
            />
          </Form.Item>
          <Form.Item label="Option Four">
            <Input
              value={optFour}
              onChange={(e) => setOptFour(e.target.value)}
              className="b-r"
            />
          </Form.Item>
          <Form.Item label="Marks">
            <InputNumber
              value={marks}
              onChange={(val) => setMarks(val)}
              className="b-r"
            />
          </Form.Item>
          <Form.Item label="Correct Option">
            <Select
              value={correctOpt}
              onChange={(val) => onCorrOptChange(val)}
              className="has-width-10"
            >
              <Option value="1">Option One</Option>
              <Option value="2">Option Two</Option>
              <Option value="3">Option Three</Option>
              <Option value="4">Option Four</Option>
            </Select>
          </Form.Item>
          <div className="is-center has-margin-top-2 has-margin-bottom-2">
            <Button type="primary" htmlType="submit" className="b-r">
              Add Question
            </Button>
          </div>
        </Form>
        <QuestionTable />
      </Card>
    </>
  );
};

export default AddQueForm;
