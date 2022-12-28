import UserProfile from "../Components/UserProfile";
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
  return (
    <>
      <main className="Mypage_Container">
        <UserProfile profile={dummyDataProfile} />
        <UserInfo />
      </main>
    </>
  );
};

const UserInfo = () => {
  return (
    <>
      <FirstRowContainer />
      <SecondRowContainer />
    </>
  );
};

const FirstRowContainer = () => {
  return (
    <div className="Mypage_List_Container">
      <div className="Mypage_Questions_Container">
        <div className="Mypage_Title"> Questions</div>
        <div className="Mypage_ListContents">
          {dummyDataInfo[0].question.map((el) => {
            return (
              <ul key={el.questionId}>
                <li>
                  {el.title} {el.createdAt}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="Mypage_Answers_Container">
        <div className="Mypage_Title">Answers</div>
        <div className="Mypage_ListContents">
          {dummyDataInfo[1].answer.map((el) => {
            return (
              <ul key={el.answerId}>
                <li>
                  {el.title} {el.createdAt}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const SecondRowContainer = () => {
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

      <div className="Mypage_BookMark_List_Container">
        <div className="Mypage_Title">book mark</div>
        <div className="Mypage_BookMark_ListContents">
          {dummyDataInfo[2].bookmark[0].question.map((el) => {
            return (
              <ul key={el.questionId}>
                <li>{el.title}</li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="Mypage_BookMark_List_Container">
        <div className="Mypage_Title">book mark</div>
        <div className="Mypage_BookMark_ListContents">
          {dummyDataInfo[2].bookmark[1].answer.map((el) => {
            return <ul key={el.answerId}>{<li>{el.title} </li>}</ul>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Mypage;
