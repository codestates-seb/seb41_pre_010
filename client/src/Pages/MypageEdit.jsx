import React, { useState } from "react";
import axios from "axios";
import Input from "../Components/Input";
import { BlueButton, BlueWhiteButton } from "../Components/Button";
import "./Styles/MypageEdit.css";
import UserProfile from "../Components/UserProfile";

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
        <UserInfoEdit />
      </main>
    </>
  );
};

const UserInfoEdit = () => {
  const [newName, setNewName] = useState(dummyDataProfile.displayName);
  const [newTitle, setNewTitle] = useState(dummyDataProfile.title);

  function changeDisplayName(e) {
    setNewName(e.target.value);
  }

  function changeTitle(e) {
    setNewTitle(e.target.value);
  }

  function changeUserProfile() {
    const newProfile = {
      displayName: newName,
      title: newTitle,
      // [Optional] "profileImage:"URL" //String
    };

    console.log(newProfile);

    axios
      .put(`/api/v1/users/:userId/userprofile`, newProfile)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className="MypageEdit_UserInfoEdit_Container">
      <div className="MypageEdit_UserInfoEdit_Text_Container">
        <h2>Edit your profile</h2>
      </div>
      <div className="MypageEdit_UserInfoEdit_Form_Container">
        <div className="MypageEdit_UserInfoEdit_FormImage_Container">
          <div className="UserInfo_Edit_Subtitle">Profile image</div>
          <img
            src={dummyDataProfile.profileImage}
            width={165}
            height={165}
            alt="test"
          />
        </div>
        <div className="MypageEdit_UserInfoEdit_FormName_Container">
          <div className="UserInfo_Edit_Subtitle">Display name</div>
          <Input
            className="UserInfo_Edit_Input"
            value={newName}
            onChange={changeDisplayName}
          />
        </div>
        <div className="MypageEdit_UserInfoEdit_FormTitle_Container">
          <div className="UserInfo_Edit_Subtitle">Title</div>
          <Input
            className="UserInfo_Edit_Input"
            value={newTitle}
            onChange={changeTitle}
          />
        </div>
        <div className="MypageEdit_UserInfoEdit_FormButton_Container">
          <BlueButton
            width="90px"
            height="35px"
            onClick={changeUserProfile}
            href={"/users/mypage/:userId"}
          >
            프로필 저장
          </BlueButton>
          <BlueWhiteButton
            width="90px"
            height="35px"
            href={"/users/mypage/:userId"}
          >
            취소
          </BlueWhiteButton>
        </div>
      </div>
    </div>
  );
};

export default MypageEdit;
