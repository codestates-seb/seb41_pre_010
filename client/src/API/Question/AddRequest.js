import axios from "axios";
const url =
  "http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080";
export const addQuestion = (userId, title, body, tags) => {
  const request = { userId: userId, title: title, body: body, tags: tags };
  axios
    .post(`${url}/api/v1/question`, JSON.stringify(request))
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addAnswer = (questionId, userId, body) => {
  const request = { questionId: questionId, userId: userId, body: body };
  axios
    .post(`${url}/api/v1/answers`, JSON.stringify(request),
    {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addComment = (questionId, userId, answerId, body) => {
  const request = {
    questionId: questionId,
    userId: userId,
    answerId: answerId,
    body: body,
  };

  axios
    .post(`${url}/api/v1/comment`, JSON.stringify(request))
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
