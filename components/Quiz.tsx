import { useAppSelector } from '@/states';
import React, { useEffect, useState } from 'react';
import Question from './Question';
import Result from './Result';
import SelectQuiz from './SelectQuiz';

type QuizProps = {
  setOpenQuiz: any;
  result: any;
  setResult: any;
  setStateQuiz: any;
};

const Quiz = ({ setOpenQuiz, result, setResult, setStateQuiz }: QuizProps) => {
  const [numberQuestion, setNumberQuestion] = useState<number>(0);
  const [showModal, setShowModal] = useState<any | null>(false);
  const quiz = useAppSelector((state) => state.quiz);
  useEffect(() => {}, []);
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
      <div className="w-full flex">
        <div className="w-3/12">
          <SelectQuiz
            numberQuestion={numberQuestion}
            setNumberQuestion={setNumberQuestion}
          />
        </div>
        <div className="w-9/12">
          <div>
            <Question
              setOpenQuiz={setOpenQuiz}
              maxQuiz={quiz?.length}
              setResult={setResult}
              setNumberQuestion={setNumberQuestion}
              numberQuiz={numberQuestion}
              data={quiz[numberQuestion]}
              setStateQuiz={setStateQuiz}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
