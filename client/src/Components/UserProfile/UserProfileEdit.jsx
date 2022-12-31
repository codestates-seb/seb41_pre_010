import React, { useState } from "react";
import axios from "axios";
import Input from "../Input";
import { BlueButton, BlueWhiteButton } from "../Button";
import useImage from "../../CustomHook/useImage";
import ImageModal from "./ImageModal";
import "../Styles/UserProfile.css";

const UserProfileEdit = (props) => {
  const { profileImage, displayName, title, userId } = props.profile;
  const { image, setImage } = useImage(profileImage);
  const [editDisplayName, setEditDisplayName] = useState(displayName);
  const [editTitle, setEditTitle] = useState(title);
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
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

    const refreshTokenHost = "http://13.125.80.84";
    axios
      .post(
        `${refreshTokenHost}/api/v1/user/token/refresh`,
        {
          userId,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        // window.location.reload();
      });
    axios
      .put(`/api/v1/users/${userId}/userprofile`, newProfile, {
        withCredentials: true,
      })
      .then((res) => {})
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
          <div className="UserInfo_Edit_Image">
            <img src={image} width={165} height={165} alt="test" />
            <button className="Modal_Open_Button" onClick={showModal}>
              이미지 바꾸기
            </button>
          </div>
          {modalOpen && (
            <ImageModal
              setModalOpen={setModalOpen}
              userId={userId}
              userProfileImage={image}
              setImage={setImage}
            />
          )}
        </div>
        <div className="MypageEdit_UserInfoEdit_FormName_Container">
          <div className="UserInfo_Edit_Subtitle">Display name</div>
          <Input
            type="text"
            className="UserInfo_Edit_Input"
            value={editDisplayName}
            onChange={changeDisplayName}
          />
        </div>
        <div className="MypageEdit_UserInfoEdit_FormTitle_Container">
          <div className="UserInfo_Edit_Subtitle">Title</div>
          <Input
            type="text"
            className="UserInfo_Edit_Input"
            value={editTitle ? editTitle : ""}
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
            href={`/users/mypage/${userId}`}
          >
            취소
          </BlueWhiteButton>
        </div>
      </div>
    </div>
  );
};

export default UserProfileEdit;
