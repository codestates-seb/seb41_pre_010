import axios from "axios";
const url = "http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/"
export const deleteQuestion = (questionId) => {
  axios
    .delete(`${url}api/v1/questions/${questionId}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteAnswer = (answerId) => {
  axios
    .delete(`${url}api/v1/answers/${answerId}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteComment = (commentId) => {
  axios
    .delete(`${url}api/v1/comments/${commentId}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
