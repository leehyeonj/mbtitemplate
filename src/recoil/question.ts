import { atom } from "recoil";
export interface ButtonTypes {
  title: string;
  type: string;
}
export interface IquestionTypes {
  id: number;
  question: string;
  button1: ButtonTypes;
  button2: ButtonTypes;
}
export interface ItypeTypes {
  type: string;
  value: number;
}
export const resultState = atom<string>({
  key: "resultState",
  default: "",
});
export const mbtiTypeState = atom<ItypeTypes[]>({
  key: "mbtiTypeState",
  default: [
    {
      type: "I",
      value: 0,
    },
    {
      type: "E",
      value: 0,
    },
    {
      type: "S",
      value: 0,
    },
    {
      type: "N",
      value: 0,
    },
    {
      type: "T",
      value: 0,
    },
    {
      type: "F",
      value: 0,
    },
    {
      type: "P",
      value: 0,
    },
    {
      type: "J",
      value: 0,
    },
  ],
});
export const questionState = atom<IquestionTypes[]>({
  key: "questionState",
  default: [
    {
      id: 1,
      question: "this is question 1",
      button1: {
        title: "this is button i ",
        type: "I",
      },
      button2: {
        title: "this is button e",
        type: "E",
      },
    },
    {
      id: 2,
      question: "this is question 2",
      button1: {
        title: "this is button i ",
        type: "I",
      },
      button2: {
        title: "this is button e",
        type: "E",
      },
    },
    {
      id: 3,
      question: "this is question 3",
      button1: {
        title: "this is button i ",
        type: "I",
      },
      button2: {
        title: "this is button e",
        type: "E",
      },
    },
    {
      id: 4,
      question: "this is question 4",
      button1: {
        title: "this is button s ",
        type: "S",
      },
      button2: {
        title: "this is button n",
        type: "N",
      },
    },
    {
      id: 5,
      question: "this is question 5",
      button1: {
        title: "this is button s ",
        type: "S",
      },
      button2: {
        title: "this is button n",
        type: "N",
      },
    },
    {
      id: 6,
      question: "this is question 6",
      button1: {
        title: "this is button s ",
        type: "S",
      },
      button2: {
        title: "this is button n",
        type: "N",
      },
    },
    {
      id: 7,
      question: "this is question 7",
      button1: {
        title: "this is button T ",
        type: "T",
      },
      button2: {
        title: "this is button F",
        type: "F",
      },
    },
    {
      id: 8,
      question: "this is question 8",
      button1: {
        title: "this is button T ",
        type: "T",
      },
      button2: {
        title: "this is button F",
        type: "F",
      },
    },
    {
      id: 9,
      question: "this is question 9",
      button1: {
        title: "this is button T ",
        type: "T",
      },
      button2: {
        title: "this is button F",
        type: "F",
      },
    },
    {
      id: 10,
      question: "this is question 10",
      button1: {
        title: "this is button P ",
        type: "P",
      },
      button2: {
        title: "this is button J",
        type: "J",
      },
    },
    {
      id: 11,
      question: "this is question 11",
      button1: {
        title: "this is button P ",
        type: "P",
      },
      button2: {
        title: "this is button J",
        type: "J",
      },
    },
    {
      id: 12,
      question: "this is question 12",
      button1: {
        title: "this is button P ",
        type: "P",
      },
      button2: {
        title: "this is button J",
        type: "J",
      },
    },
  ],
});
