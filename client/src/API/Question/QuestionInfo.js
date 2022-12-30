import axios from "axios";

export const getQuestionData = async (questionId) => {
  try {
    const response = await axios.get(`api/v1/questions/${questionId}`);
    return response;
  } catch (error) {
    console.log(error(error));
  }
};
