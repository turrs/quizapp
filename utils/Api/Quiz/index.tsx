import { quizDatabaseApi } from '../../Axios';

const ApiQuiz = (() => {
  async function getQuiz() {
    const response = await quizDatabaseApi.get('');
    response.data.results.forEach((node: any) => (node.status = true));
    response.data.results.forEach((node: any) => (node.answer = null));
    response.data.results.forEach((node: any) =>
      node.incorrect_answers.push(node.correct_answer),
    );
    return response.data.results;
  }
  return {
    getQuiz,
  };
})();

export { ApiQuiz };
