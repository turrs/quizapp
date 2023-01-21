import { useAppSelector } from '@/states';
import React, { useEffect, useState } from 'react';
import Question from './Question';
import SelectQuiz from './SelectQuiz';

type QuizProps = {
  setOpenQuiz: any;
};

const Quiz = ({ setOpenQuiz }: QuizProps) => {
  const [numberQuestion, setNumberQuestion] = useState<number>(0);
  const quiz = useAppSelector((state) => state.quiz);
  console.log(999, quiz);
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
              setNumberQuestion={setNumberQuestion}
              numberQuiz={numberQuestion}
              data={quiz[numberQuestion]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
