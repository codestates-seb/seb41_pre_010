import axios from "axios";

export const getQuestionData = async () => {
  try {
    const response = await axios.get(
      "/api/v1/questions/1",
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
