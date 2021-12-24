import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { questionState } from "../recoil/question";

const Question = () => {
  const questions = useRecoilValue(questionState);
  const [slideShow, setSlideShow] = useState<number>(0);
  const navigate = useNavigate();

  const handleClick = () => {
    if (slideShow === questions.length - 1) {
      navigate("/result");
    } else {
      setSlideShow(slideShow + 1);
    }
  };
  return (
    <div>
      <h2>this is page</h2>
      <div>
        <h2>this is {questions[slideShow].id}</h2>
        <Button
          variant="contained"
          onClick={() => {
            handleClick();
          }}
        >
          {questions[slideShow].button1.title}
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            handleClick();
          }}
        >
          {questions[slideShow].button2.title}
        </Button>
      </div>
    </div>
  );
};

export default Question;
