import React, { useEffect, useState } from "react";
import axios from "axios";
import UserProfile from "../Components/UserProfile/UserProfile";
import MyPageListRow from "../Components/UserProfile/MyPageListRow";
import CustomTitle from "../Components/CustomTitle";
import Page404 from "./404Page";

import "./Styles/Mypage.css";
import { useParams } from "react-router-dom";
import MyPageListSecondRow from "../Components/UserProfile/MyPageListSecondRow";

const fetchUrl = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(url);
      resolve(data);
    } catch (e) {
      if (e) reject(e);
    }
  });
};

const Mypage = () => {
  const myInfoDefaultState = {
    questions: [],
    answers: [],
    bookmarkQuestions: [],
    bookmarkAnswers: [],
  };

  const { userId } = useParams();
  const [myInfo, setMyInfo] = useState(myInfoDefaultState);
  const [userProfile, setUserProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const myPageGetUserInfoUrl = `/api/v1/users/${userId}/userinfo`;
  const myPageEditGetUserProfileUrl = `/api/v1/users/${userId}/userprofile`;

  useEffect(() => {
    Promise.all([
      fetchUrl(myPageEditGetUserProfileUrl),
      fetchUrl(myPageGetUserInfoUrl),
    ])
      .then(([userProfileData, userInfoData]) => {
        setUserProfile(userProfileData);
        setMyInfo(userInfoData);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  }, [myPageGetUserInfoUrl, myPageEditGetUserProfileUrl]);

  if (loading) return;
  if (!myInfo || !userProfile) return <Page404 />;
  return (
    <>
      <CustomTitle title={`User ${userProfile.displayName}`} />
      <main className="Mypage_Container">
        <UserProfile profile={userProfile} />
        <UserInfo myInfo={myInfo} />
      </main>
    </>
  );
};

const UserInfo = ({ myInfo }) => {
  console.log("myinfo", myInfo);
  const { questions, answers, bookmarkQuestions, bookmarkAnswers } = myInfo;

  return (
    <div className="Mypage_UserInfo_Container">
      <FirstRowContainer questions={questions} answers={answers} />
      <SecondRowContainer
        bookmarkQuestions={bookmarkQuestions}
        bookmarkAnswers={bookmarkAnswers}
      />
    </div>
  );
};

const FirstRowContainer = ({ questions, answers }) => {
  return (
    <div className="Mypage_List_Container">
      <div className="Mypage_List_Row">
        <div className="Mypage_Title">Questions</div>
        {questions && <MyPageListSecondRow questions={questions} />}
      </div>
      <div className="Mypage_List_Row">
        <div className="Mypage_Title">Answers</div>
        {answers && <MyPageListSecondRow answers={answers} />}
      </div>
    </div>
  );
};

const SecondRowContainer = ({ bookmarkQuestions, bookmarkAnswers }) => {
  return (
    <div className="Mypage_List_Container">
      <div className="Mypage_List_Row">
        <div className="Mypage_Title">Bookmark (Questions)</div>
        {bookmarkQuestions && <MyPageListRow questions={bookmarkQuestions} />}
      </div>
      <div className="Mypage_List_Row">
        <div className="Mypage_Title">Bookmark (Answers)</div>
        {bookmarkAnswers && <MyPageListRow answers={bookmarkAnswers} />}
      </div>
    </div>
  );
};

export default Mypage;
