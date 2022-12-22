import React from "react";
import "./Styles/MainPage.css";

const dummyData = [
  {
    questionId: 0, //Number
    user: {
      userId: 0, //Number
      displayName: "Kimcoding", //String
      profileImage: "testURL", //String
    },
    title: "VSCode Omnisharp server A .NET 6 SDK for x86_64 was not found", //String
    body: "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용", //String
    createdAt: "Year/Month/Day/Hour/Minute", //String
    modifiedAt: "Year/Month/Day/Hour/Minute", //String
    vote: 0, //Number
    answers: 0, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "test", //String
      },
    ],
  },
  {
    questionId: 1, //Number
    user: {
      userId: 0, //Number
      displayName: "LeeHacker", //String
      profileImage: "testURL", //String
    },
    title: "VSCode Omnisharp server A .NET 6 SDK for x86_64 was not found", //String
    body: "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용", //String
    createdAt: "Year/Month/Day/Hour/Minute", //String
    modifiedAt: "Year/Month/Day/Hour/Minute", //String
    vote: 0, //Number
    answers: 0, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "test", //String
      },
    ],
  },
  {
    questionId: 2, //Number
    user: {
      userId: 0, //Number
      displayName: "ABCDE", //String
      profileImage: "testURL", //String
    },
    title: "VSCode Omnisharp server A .NET 6 SDK for x86_64 was not found", //String
    body: "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용", //String    createdAt: "Year/Month/Day/Hour/Minute", //String
    modifiedAt: "Year/Month/Day/Hour/Minute", //String
    vote: 0, //Number
    answers: 0, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "test", //String
      },
    ],
  },
  {
    questionId: 3, //Number
    user: {
      userId: 0, //Number
      displayName: "HIHI", //String
      profileImage: "testURL", //String
    },
    title: "VSCode Omnisharp server A .NET 6 SDK for x86_64 was not found", //String
    body: "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용", //String    createdAt: "Year/Month/Day/Hour/Minute", //String
    modifiedAt: "Year/Month/Day/Hour/Minute", //String
    vote: 0, //Number
    answers: 0, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "test", //String
      },
    ],
  },
  {
    questionId: 4, //Number
    user: {
      userId: 0, //Number
      displayName: "Bye", //String
      profileImage: "testURL", //String
    },
    title: "VSCode Omnisharp server A .NET 6 SDK for x86_64 was not found", //String
    body: "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용", //String    createdAt: "Year/Month/Day/Hour/Minute", //String
    modifiedAt: "Year/Month/Day/Hour/Minute", //String
    vote: 0, //Number
    answers: 0, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "test", //String
      },
    ],
  },
];

function MainPage() {
  return (
    <div className="MainPage_Container">
      <header className="Header"></header>
      <main className="Questions_Container">
        <div className="Questions_Title_Container">
          <h1>모든 질문</h1>
          <button>질문하기</button>
        </div>
        <div className="Questions_SubTitle_Container">
          <h3>23,338,049 Questions</h3>
          <div className="Questions_Filter_Container">
            <button>최신순</button>
            <button>추천순</button>
          </div>
        </div>
        <div className="Questions_List_Container">
          {dummyData.map((el) => {
            return (
              <div className="Question_Container">
                <div className="Question_Info">
                  <span className="Question_Votes">Votes: {el.vote}</span>
                  <span className="Question_Answers">
                    Answers: {el.answers}
                  </span>
                </div>
                <div className="Question_Content">
                  <div className="Question_Title">{el.title}</div>
                  <div className="Question_Bddy">{el.body}</div>
                  <div className="Question_Tag">{el.tags[0].tagName}</div>
                  <div className="Question_UserInfo">{el.user.displayName}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="Questions_Pagination_Container"></div>
      </main>
      <footer className="Footer"></footer>
    </div>
  );
}

export default MainPage;
