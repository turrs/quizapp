const TypeAction = {
  SET_NEW_HISTORY_QUIZ: 'SET_NEW_HISTORY_QUIZ',
};

function setNewHistoryQuiz(data: any) {
  return {
    type: TypeAction.SET_NEW_HISTORY_QUIZ,
    payload: {
      data,
    },
  };
}

export { TypeAction, setNewHistoryQuiz };
