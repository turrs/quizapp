import axios from 'axios';

const quizDatabaseApi = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10',
});

export { quizDatabaseApi };
