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

  const getSearchValueUrl = `/api/v1/questions/search?q=${searchValue}&tab=${tabName}&page=${pageNumber}&pageSize=${pageSizeNumber}`;
  const getAllPagesUrl = `/api/v1/questions/search?tab=${tabName}&page=${pageNumber}&pageSize=${pageSizeNumber}`;

  useEffect(() => {
    async function getQuestionList(tabName, pageNumber, pageSizeNumber) {
      try {
        const response = await axios.get(
          searchValue ? getSearchValueUrl : getAllPagesUrl
        );
        const { data } = response;
        console.log(data);
        setQuestionsList(() => data.questionInfos);
        setTotalPage(() => data.totalPages);
        setTotalQuestions(() => data.totalQuestions);
      } catch (err) {
        console.log("failed to fetch!");
        setTotalPage(2000);
      }
    }

    getQuestionList(tabName, pageNumber, pageSizeNumber);
  }, [
    tabName,
    pageNumber,
    pageSizeNumber,
    searchValue,
    getAllPagesUrl,
    getSearchValueUrl,
  ]);

  return { questionsList, totalPages, totalQuestions, searchValue };
}

export default useQuestionsLoad;
