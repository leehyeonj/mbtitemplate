import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { mbtiTypeState, resultState } from "../recoil/question";

const Result = () => {
  const navigate = useNavigate();
  const mbtiType = useRecoilValue(mbtiTypeState);
  const reset = useResetRecoilState(mbtiTypeState);
  const [result, setResult] = useRecoilState<string>(resultState);

  useEffect(() => {
    let typeResult = "";
    if (mbtiType[0].value > mbtiType[1].value) {
      typeResult = "I";
    } else {
      typeResult = "E";
    }
    if (mbtiType[2].value > mbtiType[3].value) {
      typeResult += "S";
    } else {
      typeResult += "N";
    }
    if (mbtiType[4].value > mbtiType[5].value) {
      typeResult += "T";
    } else {
      typeResult += "F";
    }
    if (mbtiType[6].value > mbtiType[7].value) {
      typeResult += "P";
    } else {
      typeResult += "J";
    }

    setResult(typeResult);
  }, [mbtiType, setResult]);
  const moveToHome = () => {
    reset();
    navigate("/");
  };
  return (
    <div>
      <h2>{result}</h2>
      <Button
        onClick={() => {
          moveToHome();
        }}
      >
        move to home
      </Button>
    </div>
  );
};

export default Result;
