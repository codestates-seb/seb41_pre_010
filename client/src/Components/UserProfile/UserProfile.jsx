import React from "react";
import { useParams } from "react-router-dom";
import "../Styles/UserProfile.css";
import { WhiteButton } from "../Button";
import useImage from "../../CustomHook/useImage";
import { useSession } from "../../CustomHook/SessionProvider";

const UserProfile = (props) => {
  const { profileImage, displayName, title } = props.profile;
  const { image } = useImage(profileImage);
  const { userId } = useParams();
  const { loading, session } = useSession();

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
      {loading ? (
        <></>
      ) : session && session.userId === userId ? (
        <WhiteButton
          width="80px"
          height="40px"
          className="Mypage_UserProfile_EditButton"
          href={`/users/mypage/edit/${userId}`}
        >
          Edit profile
        </WhiteButton>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserProfile;
