import React from "react";
import Input from "../Components/Input";
import { BlueButton, BlueWhiteButton } from "../Components/Button";
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
      <main className="Mypage_Container">
        <UserProfile />
        <UserInfoEdit />
      </main>
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

const UserInfoEdit = () => {
  return (
    <div className="MypageEdit_UserInfoEdit_Container">
      <div className="MypageEdit_UserInfoEdit_Text_Container">
        <div className="MypageEdit_UserInfoEdit_Title">Edit your profile</div>
      </div>
      <div className="MypageEdit_UserInfoEdit_SecondText_Container">
        <div className="MypageEdit_UserInfoEdit_Title">Public information</div>
      </div>
      <div className="MypageEdit_UserInfoEdit_Form_Container">
        <div className="MypageEdit_UserInfoEdit_FormImage_Container">
          <div>Profile image</div>
          <img
            src={dummyDataProfile.profileImage}
            width={165}
            height={165}
            alt="test"
          />
        </div>
        <div className="MypageEdit_UserInfoEdit_FormName_Container">
          <div>Display name</div>
          <Input />
        </div>
        <div className="MypageEdit_UserInfoEdit_FormTitle_Container">
          <div>Title</div>
          <Input />
        </div>
        <div className="MypageEdit_UserInfoEdit_FormButton_Container">
          <BlueButton width="90px">프로필 저장</BlueButton>
          <BlueWhiteButton width="90px">취소</BlueWhiteButton>
        </div>
      </div>
    </div>
  );
};

export default MypageEdit;
