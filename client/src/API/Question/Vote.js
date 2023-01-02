import axios from "axios";
const url = "http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080";
//Vote Request
export const questionUpVoteRequest = (userId, questionId) => {
  const request = { userId: userId, questionId: questionId, vote: 1 };
  axios.put(
    `${url}/api/v1/votes/${questionId}/questions`,
    JSON.stringify(request),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const questionDownVoteRequest = (userId, questionId) => {
  const request = { userId: userId, questionId: questionId, vote: -1 };
  axios.put(
    `${url}/api/v1/votes/${questionId}/questions`,
    JSON.stringify(request),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const answerUpVoteRequest = (userId, answerId) => {
  const request = { userId: userId, questionId: answerId, vote: 1 };
  axios.put(
    `${url}/api/v1/votes/${answerId}/questions`,
    JSON.stringify(request),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const answerDownVoteRequest = (userId, answerId) => {
  const request = { userId: userId, questionId: answerId, vote: -1 };
  axios.put(
    `${url}/api/v1/votes/${answerId}/questions`,
    JSON.stringify(request),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
