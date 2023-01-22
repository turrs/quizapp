function CountResult(arr: any) {
  let correctAnswer = 0;
  let wrongAnswer = 0;
  let emptyAnswer = 0;
  arr.map((item: any, index: number) => {
    if (item.answer === item.correct_answer) {
      correctAnswer = correctAnswer + 1;
    } else if (item.answer === null || item.answer === undefined) {
      emptyAnswer = emptyAnswer + 1;
    } else {
      wrongAnswer = wrongAnswer + 1;
    }
  });
  return { correctAnswer, wrongAnswer, emptyAnswer };
}

export { CountResult };
