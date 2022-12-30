import React from "react";
import "../Styles/UserProfile.css";
import { WhiteButton } from "../Button";
import useImage from "../../CustomHook/useImage";

const UserProfile = (props) => {
  const { profileImage, displayName, title } = props.profile;
  const { image } = useImage(profileImage);
  return (
    <div className="Mypage_UserProfile_Container">
      <div className="Mypage_UserProfile_Content">
        <img
          src={image}
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
      <WhiteButton
        // 현재 로그인된 사용자와 유저페이지의 id가 같지 않으면 edit 버튼이 안보이도록 하는 로직 추가
        width="80px"
        height="40px"
        className="Mypage_UserProfile_EditButton"
        href={"/users/mypage/edit/:userId"}
      >
        Edit profile
      </WhiteButton>
    </div>
  );
};

export default UserProfile;
