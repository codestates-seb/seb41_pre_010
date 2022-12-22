import "./Styles/Mypage.css";

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
          src={
            "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg"
          }
          className="Mypage_UserProfile_Image"
          width={50}
          height={50}
          alt="TestImage"
        />
        <div className="Mypage_UserProfile_Info_Container">
          <div className="Mypage_UserProfile_UserName">username</div>
          <div className="Mypage_UserProfile_Title"> title</div>
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
        <div className="Mypage_ListContents"> </div>
      </div>
      <div className="Mypage_Answers_Container">
        <div className="Mypage_Title">Answers</div>
        <div className="Mypage_ListContents"></div>
      </div>
    </div>
  );
};

const ListContainerTwo = () => {
  return (
    <div className="Mypage_List_Container">
      <div className="Mypage_Tag_Container">
        <div className="Mypage_Title">Top Tags</div>
        <div className="Mypage_Tag_ListContents"></div>
      </div>
      <div className="Mypage_BookMark_Container">
        <div className="Mypage_BookMark_List_Container">
          <div className="Mypage_Title">book mark</div>
        </div>
        <div className="Mypage_BookMark_List_Container">
          <div className="Mypage_Title">book mark</div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
