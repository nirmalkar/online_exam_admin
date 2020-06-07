import React, { useContext } from "react";
import { Button } from "antd";

import { QuestionContext } from "../../contexts/QuestionContext";

const SubmitButton = () => {
  const { questions } = useContext(QuestionContext);
  const SubmitQue = () => {
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
