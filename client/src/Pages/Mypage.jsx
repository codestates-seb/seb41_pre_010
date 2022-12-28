import React, { useEffect, useState } from "react";
import axios from "axios";
import UserProfile from "../Components/UserProfile";
import MyPageListRow from "../Components/MyPageListRow";
import "./Styles/Mypage.css";

const dummyDataProfile = {
  userId: 0,
  profileImage:
    "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg",
  displayName: " 안녕하세요 테스트입니다",
  title: "test로 시작한 타이틀입니다",
};

const dummyDataInfo = [
  {
    question: [
      {
        questionId: 0,
        title:
          "Find out whether Chrome console is opeFind out whether Chrome console is open",
        createdAt: "2022/10/20/13:10",
        modifiedAt: "Year/Month/Day/Hour/Minute",
        vote: 0,
      },
      {
        questionId: 1,
        title: "Find out whether Chrome console is open",
        createdAt: "2022/10/20/13:10",
        modifiedAt: "Year/Month/Day/Hour/Minute",
        vote: 0,
      },
    ],
  },
  {
    answer: [
      {
        answerId: 0,
        title: "Find out whether Chrome console is open",
        createdAt: "2022/10/20/13:10",
        modifiedAt: "Year/Month/Day/Hour/Minute",
        vote: 0,
      },
      {
        answerId: 1,
        title: "Find out whether Chrome console is open",
        createdAt: "2022/10/20/13:10",
        modifiedAt: "Year/Month/Day/Hour/Minute",
        vote: 0,
      },
      {
        answerId: 2,
        title: "test3",
        createdAt: "Year/Month/Day/Hour/Minute",
        modifiedAt: "Year/Month/Day/Hour/Minute",
        vote: 0,
      },
    ],
  },
  {
    bookmark: [
      {
        question: [
          {
            questionId: 0,
            title: "Find out whether Chrome console is open",
            createdAt: "2022/10/20/13:10",
            modifiedAt: "Year/Month/Day/Hour/Minute",
            vote: 0,
          },
          {
            questionId: 1,
            title: "Find out whether Chrome console is open",
            createdAt: "2022/10/20/13:10",
            modifiedAt: "Year/Month/Day/Hour/Minute",
            vote: 0,
          },
        ],
      },
      {
        answer: [
          {
            answerId: 0,
            title: "Find out whether Chrome console is open",
            createdAt: "2022/10/20/13:10",
            modifiedAt: "Year/Month/Day/Hour/Minute",
            vote: 0,
          },
        ],
      },
    ],
  },
  {
    tag: [
      {
        tagId: 0,
        tagName: "test",
      },
      {
        tagId: 1,
        tagName: "test2",
      },
    ],
  },
];

const Mypage = () => {
  const [myInfo, setMyInfo] = useState(dummyDataInfo);

  useEffect(() => {
    axios
      .get(`api/v1/users/userId/userinfo`)
      .then((res) => setMyInfo(res))
      .catch((err) => {
        console.log(err);
        setMyInfo(dummyDataInfo);
      });
  }, []);

  return (
    <>
      <main className="Mypage_Container">
        <UserProfile profile={dummyDataProfile} />
        <UserInfo myInfo={myInfo} />
      </main>
    </>
  );
};

const UserInfo = ({ myInfo }) => {
  const [question, answer, bookmark] = myInfo;

  return (
    <div className="Mypage_UserInfo_Container">
      <FirstRowContainer question={question} answer={answer} />
      <SecondRowContainer bookmark={bookmark} />
    </div>
  );
};

const FirstRowContainer = ({ question, answer }) => {
  return (
    <div className="Mypage_List_Container">
      <div className="Mypage_List_Row">
        <div className="Mypage_Title">Questions</div>
        <MyPageListRow question={question} />
      </div>
      <div className="Mypage_List_Row">
        <div className="Mypage_Title">Answers</div>
        <MyPageListRow answer={answer} />
      </div>
    </div>
  );
};

const SecondRowContainer = ({ bookmark }) => {
  const [bookmarkQuestions, bookmarkAnswers] = bookmark.bookmark;

  return (
    <div className="Mypage_List_Container">
      {/* <div className="Mypage_Tag_Container">
        <div className="Mypage_Title">Top Tags</div>
        <div className="Mypage_Tag_ListContents">
          {dummyDataInfo[3].tag.map((el) => {
            return <ul key={el.tagId}>{<li>{el.tagName}</li>}</ul>;
          })}
        </div>
      </div> */}
      <div className="Mypage_List_Row">
        <div className="Mypage_Title">Bookmark (Questions)</div>
        <MyPageListRow question={bookmarkQuestions} />
      </div>
      <div className="Mypage_List_Row">
        <div className="Mypage_Title">Bookmark (Answers)</div>
        <MyPageListRow answer={bookmarkAnswers} />
      </div>
    </div>
  );
};

export default Mypage;
