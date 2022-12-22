import "./Styles/Mypage.css";

const dummyDataProfile = {
  userId: 0, //Number
  profileImage:
    "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
  displayName: " 안녕하세요 테스트입니다", //String
  title: "test로 시작한 타이틀입니다", //String
};

const dummyDataInfo = [
  {
    question: [
      {
        questionId: 0, //Number
        title: "Find out whether Chrome console is open", //String
        createdAt: "2022/10/20/13:10", //String
        modifiedAt: "Year/Month/Day/Hour/Minute", //String
        vote: 0, //Number
      },
      {
        questionId: 1, //Number
        title: "Find out whether Chrome console is open", //String
        createdAt: "2022/10/20/13:10", //String
        modifiedAt: "Year/Month/Day/Hour/Minute", //String
        vote: 0, //Number
      },
    ],
  },
  {
    answer: [
      {
        answerId: 0, //Number
        title: "Find out whether Chrome console is open", //String
        createdAt: "2022/10/20/13:10", //String
        modifiedAt: "Year/Month/Day/Hour/Minute", //String
        vote: 0, //Number
      },
      {
        answerId: 1, //Number
        title: "Find out whether Chrome console is open", //String
        createdAt: "2022/10/20/13:10", //String
        modifiedAt: "Year/Month/Day/Hour/Minute", //String
        vote: 0, //Number
      },
      {
        answerId: 2, //Number
        title: "test3", //String
        createdAt: "Year/Month/Day/Hour/Minute", //String
        modifiedAt: "Year/Month/Day/Hour/Minute", //String
        vote: 0, //Number
      },
    ],
  },
  {
    /////	[{question:[{q:1},{q:2},{q:3}]},{answer:[{a:1},{a:2}]}] ///
    bookmark: [
      {
        question: [
          {
            questionId: 0, //Number
            title: "Find out whether Chrome console is open", //String
            createdAt: "2022/10/20/13:10", //String
            modifiedAt: "Year/Month/Day/Hour/Minute", //String
            vote: 0, //Number
          },
          {
            questionId: 1, //Number
            title: "Find out whether Chrome console is open", //String
            createdAt: "2022/10/20/13:10", //String
            modifiedAt: "Year/Month/Day/Hour/Minute", //String
            vote: 0, //Number
          },
        ],
      },
      {
        answer: [
          {
            answerId: 0, //Number
            title: "Find out whether Chrome console is open", //String
            createdAt: "2022/10/20/13:10", //String
            modifiedAt: "Year/Month/Day/Hour/Minute", //String
            vote: 0, //Number
          },
        ],
      },
    ],
  },
  {
    tag: [
      {
        tagId: 0, //Number
        tagName: "test", //String
      },
      {
        tagId: 1, //Number
        tagName: "test2", //String
      },
    ],
  },
];

const Mypage = () => {
  return (
    <>
      <header className="Header"></header>
      <main className="Mypage_Container">
        <UserProfile />
        <UserInfo />
      </main>
      <footer className="Footer"></footer>
    </>
  );
};

const UserProfile = () => {
  return (
    <div className="Mypage_UserProfile_Container">
      <div className="Mypage_UserProfile_Content">
        <img
          src={dummyDataProfile.profileImage}
          className="Mypage_UserProfile_Image"
          width={50}
          height={50}
          alt="TestImage"
        />
        <div className="Mypage_UserProfile_Info_Container">
          <div className="Mypage_UserProfile_UserName">
            {dummyDataProfile.displayName}
          </div>
          <div className="Mypage_UserProfile_Title">
            {" "}
            {dummyDataProfile.title}
          </div>
        </div>
      </div>
      <button className="Mypage_UserProfile_EditButton">Edit profile</button>
    </div>
  );
};

const UserInfo = () => {
  return (
    <>
      <ListContainerOne />
      <ListContainerTwo />
    </>
  );
};

const ListContainerOne = () => {
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

const ListContainerTwo = () => {
  return (
    <div className="Mypage_List_Container">
      <div className="Mypage_Tag_Container">
        <div className="Mypage_Title">Top Tags</div>
        <div className="Mypage_Tag_ListContents">
          {dummyDataInfo[3].tag.map((el) => {
            return <ul key={el.tagId}>{<li>{el.tagName}</li>}</ul>;
          })}
        </div>
      </div>
      <div className="Mypage_BookMark_Container">
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
    </div>
  );
};

export default Mypage;
