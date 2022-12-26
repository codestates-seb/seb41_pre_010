import { useEffect, useState } from "react";
import axios from "axios";
import { dummyData } from "../DummyData";

function useQuestionsLoad(tabName, pageNumber, pageSizeNumber) {
  const [questionsList, setQuestionsList] = useState(dummyData);
  const [totalPages, setTotalPage] = useState(5);
  const [totalQuestions, setTotalQuestions] = useState(23338049);

  useEffect(() => {
    async function getQuestionList(tabName, pageNumber, pageSizeNumber) {
      try {
        const response = await axios.get(
          `api/v1/tab=${tabName}&page=${pageNumber}&pagesize=${pageSizeNumber}`
        );
        const { data } = response;
        setQuestionsList(() => data.questionsList);
        setTotalPage(() => data.totalPages);
        setTotalQuestions(() => data.totalQuestions);
      } catch (err) {
        console.log("failed to fetch!");
      }
    }

    getQuestionList(tabName, pageNumber, pageSizeNumber);
  }, [tabName, pageNumber, pageSizeNumber]);

  return { questionsList, totalPages, totalQuestions };
}

export default useQuestionsLoad;
