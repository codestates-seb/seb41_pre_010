import axios from "axios";
//Vote Request
export const questionUpVoteRequest = (userId, questionId) => {
  const request = { userId: userId, questionId: questionId, vote: 1 };
  axios.put(`api/v1/votes/${questionId}/questions`, JSON.stringify(request));
};

export const questionDownVoteRequest = (userId, questionId) => {
  const request = { userId: userId, questionId: questionId, vote: -1 };
  axios.put(`api/v1/votes/${questionId}/questions`, JSON.stringify(request));
};

export const answerUpVoteRequest = (userId, answerId) => {
  const request = { userId: userId, questionId: answerId, vote: 1 };
  axios.put(`api/v1/votes/${answerId}/questions`, JSON.stringify(request));
};

export const answerDownVoteRequest = (userId, answerId) => {
  const request = { userId: userId, questionId: answerId, vote: -1 };
  axios.put(`api/v1/votes/${answerId}/questions`, JSON.stringify(request));
};