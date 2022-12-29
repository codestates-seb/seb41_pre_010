import axios from "axios";

export const questionBookMark = (questionId, userId) => {
  axios
    .put(
      `api/v1/bookmark/${questionId}/questions`,
      JSON.stringify({ userId: userId })
    )
    .then((res) => console.log(res));
};

export const answerBookMark = (answerId, userId) => {
  axios.put(
    `api/v1/bookmark/${answerId}/answers`,
    JSON.stringify({ userId: userId })
  );
};
