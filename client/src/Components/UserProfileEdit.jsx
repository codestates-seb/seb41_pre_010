import React, { useState } from "react";
import axios from "axios";
import Input from "./Input";
import { BlueButton, BlueWhiteButton } from "./Button";

const UserProfileEdit = (props) => {
  const { profileImage, displayName, title } = props.profile;

  const [editDisplayName, setEditDisplayName] = useState(displayName);
  const [editTitle, setEditTitle] = useState(title);

  function changeDisplayName(e) {
    setEditDisplayName(e.target.value);
  }

  function changeTitle(e) {
    setEditTitle(e.target.value);
  }

  function changeUserProfile() {
    const newProfile = {
      displayName: editDisplayName,
      title: editTitle,
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
          <img src={profileImage} width={165} height={165} alt="test" />
        </div>
        <div className="MypageEdit_UserInfoEdit_FormName_Container">
          <div className="UserInfo_Edit_Subtitle">Display name</div>
          <Input
            className="UserInfo_Edit_Input"
            value={editDisplayName}
            onChange={changeDisplayName}
          />
        </div>
        <div className="MypageEdit_UserInfoEdit_FormTitle_Container">
          <div className="UserInfo_Edit_Subtitle">Title</div>
          <Input
            className="UserInfo_Edit_Input"
            value={editTitle}
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

export default UserProfileEdit;
