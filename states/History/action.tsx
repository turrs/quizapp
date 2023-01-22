const TypeAction = {
  SET_NEW_HISTORY_QUIZ: 'SET_NEW_HISTORY_QUIZ',
  SET_DELETE_ALL_HISTORY: ' SET_DELETE_ALL_HISTORY',
};

function setNewHistoryQuiz(data: any) {
  return {
    type: TypeAction.SET_NEW_HISTORY_QUIZ,
    payload: {
      data,
    },
  };
}
function setDeleteAllHistory() {
  return {
    type: TypeAction.SET_DELETE_ALL_HISTORY,
  };
}

export { TypeAction, setNewHistoryQuiz, setDeleteAllHistory };
