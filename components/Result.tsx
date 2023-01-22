import { CountResult } from '@/utils/Function/CountResult';
import React from 'react';

type ResultProps = {
  answer: any;
};

const Result = ({ answer }: ResultProps) => {
  const { correctAnswer, wrongAnswer, emptyAnswer } = CountResult(answer);
  return (
    <div>
      <div>Correct Answer : {correctAnswer} </div>
      <div>Wrong Answer : {wrongAnswer} </div>
      <div>Empty Answer : {emptyAnswer} </div>
      <div>Score : {correctAnswer * 10} / 100 </div>
    </div>
  );
};

export default Result;
