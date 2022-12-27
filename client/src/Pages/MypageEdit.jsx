import React from "react";
import "./Styles/MypageEdit.css";
import UserProfile from "../Components/UserProfile";
import UserInfoEdit from "../Components/UserInfoEdit";

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
      <main className="Mypage_Container">
        <UserProfile profile={dummyDataProfile} />
        <UserInfoEdit profile={dummyDataProfile} />
      </main>
    </>
  );
};

export default MypageEdit;
