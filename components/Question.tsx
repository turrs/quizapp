import { useAppDispatch } from '@/states';
import { setChoice } from '@/states/Quiz';
import React from 'react';

type QuestionProps = {
  data: any;
  numberQuiz: number;
  setNumberQuestion: any;
  maxQuiz: number;
};

const Question = ({
  data,
  numberQuiz,
  setNumberQuestion,
  maxQuiz,
}: QuestionProps) => {
  const choice = ['A', 'B', 'C', 'D'];
  const dispatch = useAppDispatch();
  const handleChoice = (number: number, answer: string, maxQuiz: number) => {
    dispatch(setChoice(number, answer));
    if (number !== maxQuiz - 1) {
      setNumberQuestion(number + 1);
    }
  };
  return (
    <div className="flex flex-col">
      <div>{data.question}</div>
      <div className="py-6 px-2">
        {data.incorrect_answers.map((item: any, index: number) => (
          <div
            className={`flex py-4 hover:bg-slate-200 rounded-md my-2 ${
              item === data.answer && 'bg-blue'
            } hover:cursor-pointer`}
            key={index}
            onClick={() => handleChoice(numberQuiz, item, maxQuiz)}
          >
            <div className="pr-6 px-2 ">{choice[index]}.</div>
            <div>{item}</div>
          </div>
        ))}
        <div className="py-4 hover:bg-red-200 rounded-md px-2">
          Delete Answer
        </div>
      </div>
    </div>
  );
};

export default Question;
