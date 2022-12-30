import { useEffect, useState } from "react";
import axios from "axios";
import { dummyData } from "../DummyData";

function useQuestionsLoad(
  tabName,
  pageNumber,
  pageSizeNumber,
  searchValue = null
) {
  const [questionsList, setQuestionsList] = useState(dummyData);
  const [totalPages, setTotalPage] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(23338049);

  useEffect(() => {
    async function getQuestionList(tabName, pageNumber, pageSizeNumber) {
      try {
        const response = await axios.get(
          searchValue
            ? `api/v1/questions/search?q=${searchValue}&tab=${tabName}&page=${pageNumber}&pagesize=${pageSizeNumber}`
            : `api/v1/questions/tab=${tabName}&page=${pageNumber}&pagesize=${pageSizeNumber}`
        );
        const { data } = response;
        setQuestionsList(() => data.questionsList);
        setTotalPage(() => data.totalPages);
        setTotalQuestions(() => data.totalQuestions);
      } catch (err) {
        console.log("failed to fetch!");
        setTotalPage(2000);
      }
    }

    getQuestionList(tabName, pageNumber, pageSizeNumber);
  }, [tabName, pageNumber, pageSizeNumber, searchValue]);

  return { questionsList, totalPages, totalQuestions, searchValue };
}

export default useQuestionsLoad;
