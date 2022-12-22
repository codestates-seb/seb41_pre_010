import "./Styles/MypageEdit.css";

const dummyDataProfile = {
  userId: 0,
  profileImage:
    "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg",
  displayName: " 안녕하세요 테스트입니다",
  title: "test로 시작한 타이틀입니다",
};

const MypageEdit = () => {
  return (
    <>
      <header className="Header"></header>
      <main className="Mypage_Container">
        <UserProfile />
      </main>
      <footer className="Footer"></footer>
    </>
  );
};

//UserProfile 재활용 컴포넌트화 필요
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
            {dummyDataProfile.title}
          </div>
        </div>
      </div>
      <button className="Mypage_UserProfile_EditButton">Edit profile</button>
    </div>
  );
};

export default MypageEdit;
