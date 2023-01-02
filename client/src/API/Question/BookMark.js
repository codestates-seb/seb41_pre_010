import axios from "axios";
const url = "http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/"
export const questionBookMark = (questionId,userId) => {
  axios
    .put(
      `${url}api/v1/bookmark/${questionId}/questions`,
      JSON.stringify({ userId: userId })
    )
    .then((res) => console.log(res));
};

export const answerBookMark = (answerId, userId) => {
  axios.put(
    `${url}api/v1/bookmark/${answerId}/answers`,
    JSON.stringify({ userId: userId })
  );
};
