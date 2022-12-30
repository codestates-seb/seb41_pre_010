//Vote Request
const questionUpVoteRequest = (userId, questionId) => {
  const request = { userId: userId, questionId: questionId, vote: 1 };
  axios.put(`api/v1/votes/${questionId}/questions`, JSON.stringify(request));
};

const questionDownVoteRequest = (userId, questionId) => {
  const request = { userId: userId, questionId: questionId, vote: -1 };
  axios.put(`api/v1/votes/${questionId}/questions`, JSON.stringify(request));
};

const answerUpVoteRequest = (userId, answerId) => {
  const request = { userId: userId, questionId: answerId, vote: 1 };
  axios.put(`api/v1/votes/${answerId}/questions`, JSON.stringify(request));
};

const answerDownVoteRequest = (userId, answerId) => {
  const request = { userId: userId, questionId: answerId, vote: -1 };
  axios.put(`api/v1/votes/${answerId}/questions`, JSON.stringify(request));
};