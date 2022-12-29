import axios from "axios";

export const deleteQuestion = (questionId) => {
  axios
    .delete(`api/v1/questions/${questionId}`)
    .then((res) => {
      console.log(res);
    })
    .catch(() => {
      console.log(err);
    });
};

export const deleteAnswer = (answerId) => {
  axios
    .delete(`api/v1/answers/${answerId}`)
    .then((res) => {
      console.log(res);
    })
    .catch(() => {
      console.log(err);
    });
};

export const deleteComment = (commentId) => {
  axios
    .delete(`api/v1/comments/${commentId}`)
    .then((res) => {
      console.log(res);
    })
    .catch(() => {
      console.log(err);
    });
};
