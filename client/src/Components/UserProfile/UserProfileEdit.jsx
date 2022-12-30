import React, { useState } from "react";
import axios from "axios";
import Input from "../Input";
import ImageUpload from "./Image";
import { BlueButton, BlueWhiteButton } from "../Button";
import useImage from "../../CustomHook/useImage";

const UserProfileEdit = (props) => {
  const { profileImage, displayName, title } = props.profile;
  const { image, setImage } = useImage(profileImage);
  const [editDisplayName, setEditDisplayName] = useState(displayName);
  const [editTitle, setEditTitle] = useState(title);

  const onChange = async (e) => {
    const url = "http://13.125.80.84";
    e.preventDefault();
    const img = e.target.files[0];
    const base64Image = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
    });

    axios
      .post(`${url}/api/v1/user/setting/profileimage`, {
        image: base64Image,
        userId: 0,
      })
      .then((res) => {
        setImage(res.data.url);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
      profile: image,
    };

    // axios
    //   .put(`/api/v1/users/1/userprofile`, newProfile)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  }

  return (
    <div className="MypageEdit_UserInfoEdit_Container">
      <div className="MypageEdit_UserInfoEdit_Text_Container">
        <h2>Edit your profile</h2>
      </div>
      <div className="MypageEdit_UserInfoEdit_Form_Container">
        <div className="MypageEdit_UserInfoEdit_FormImage_Container">
          <div className="UserInfo_Edit_Subtitle">Profile image</div>
          {/* <img src={image} width={165} height={165} alt="test" /> */}
          <ImageUpload userProfileImage={image} />
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
          <BlueButton width="90px" height="35px" onClick={changeUserProfile}>
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
