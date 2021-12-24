import { Button } from "@mui/material";
import React from "react";
import { useRecoilValue } from "recoil";
import { questionState } from "../recoil/question";

const Question = () => {
  const questions = useRecoilValue(questionState);

  console.log(questions);
  return (
    <div>
      <h2>this is page</h2>
      {questions.map((question) => {
        return (
          <div key={question.id}>
            <h2>this is {question.id}</h2>
            <Button variant="contained">{question.button1.title}</Button>
            <Button variant="contained">{question.button2.title}</Button>
          </div>
        );
      })}
    </div>
  );
};

export default Question;
