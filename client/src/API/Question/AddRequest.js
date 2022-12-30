import axios from "axios";
//answer,comment add Request
export const addQuestion = (userId, title, body, tags) => {
  const request = { userId: userId, title: title, body: body, tags: tags };
  axios
    .post("api/v1/question", JSON.stringify(request))
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
    .post("api/v1/answers", JSON.stringify(request))
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
    .post("api/v1/comment", JSON.stringify(request))
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
