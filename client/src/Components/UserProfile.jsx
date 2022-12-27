import React from "react";
import "./Styles/UserProfile.css";

const UserProfile = (props) => {
  const { profileImage, displayName, title } = props.profile;

  return (
    <div className="Mypage_UserProfile_Container">
      <div className="Mypage_UserProfile_Content">
        <img
          src={profileImage}
          className="Mypage_UserProfile_Image"
          width={50}
          height={50}
          alt="TestImage"
        />
        <div className="Mypage_UserProfile_Info_Container">
          <div className="Mypage_UserProfile_UserName">{displayName}</div>
          <div className="Mypage_UserProfile_Title">{title}</div>
        </div>
      </div>
      <button className="Mypage_UserProfile_EditButton">Edit profile</button>
    </div>
  );
};

export default UserProfile;