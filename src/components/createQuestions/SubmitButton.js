import React, { useContext } from "react";
import { Button, message } from "antd";

import { QuestionContext } from "../../contexts/QuestionContext";

const SubmitButton = () => {
  const { questions } = useContext(QuestionContext);
  const SubmitQue = () => {
    if (questions.length) {
      message.success("Questions submitted successfully");
    }
    console.log(questions);
  };
  return (
    <div className="is-center">
      <Button
        type="primary"
        className="b-r has-margin-top-2 "
        onClick={SubmitQue}
      >
        Submit Question
      </Button>
    </div>
  );
};

export default SubmitButton;
