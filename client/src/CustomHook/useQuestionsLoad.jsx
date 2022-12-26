import { useEffect, useState } from "react";
import axios from "axios";

function useQuestionsLoad(
  tabName = "newest",
  pageNumber = "1",
  pageSizeNumber = "15"
) {
  const [questionsList, setQuestionsList] = useState([]);

  useEffect(() => {
    async function getQuestionList(tabName, pageNumber, pageSizeNumber) {
      try {
        const response = await axios.get(
          `api/v1/tab=${tabName}&page=${pageNumber}&pagesize=${pageSizeNumber}`
        );
        const { data } = response;
        setQuestionsList(data);
      } catch (err) {
        console.log("failed to fetch!");
      }
    }

    getQuestionList(tabName, pageNumber, pageSizeNumber);
  });
  return questionsList;
}

export default useQuestionsLoad;
