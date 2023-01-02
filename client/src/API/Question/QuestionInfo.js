import axios from "axios";
const url = "http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080"
export const getQuestionData = async (questionId, userId) => {
  try {
    const response = await axios.get(
      `${url}/api/v1/questions/${questionId}/${userId}`,
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
