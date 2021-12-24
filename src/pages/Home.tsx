import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigte = useNavigate();

  const moveToQuestion = () => {
    navigte("/question");
  };
  return (
    <div>
      <h2>this is mbti test</h2>
      <Button
        variant="contained"
        onClick={() => {
          moveToQuestion();
        }}
      >
        Contained
      </Button>
    </div>
  );
};

export default Home;
