import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSession } from "../CustomHook/SessionProvider";
import "./Styles/MypageEdit.css";
import UserProfile from "../Components/UserProfile/UserProfile";
import UserProfileEdit from "../Components/UserProfile/UserProfileEdit";
import CustomTitle from "../Components/CustomTitle";
import axios from "axios";

const UserProfileComponent = ({ session }) => {
  const [userProfile, setUserProfile] = useState(session);
  const myPageEditGetUserProfileUrl = `/api/v1/users/${session.userId}/userprofile`;

  useEffect(() => {
    axios
      .get(myPageEditGetUserProfileUrl, {
        withCredentials: true,
      })
      .then(({ data }) => {
        setUserProfile(data);
      })
      .catch((err) => console.log(err));
  }, [myPageEditGetUserProfileUrl]);

  return (
    <>
      {userProfile && (
        <CustomTitle
          title={`User - ${userProfile.displayName}`}
          description={`User - ${userProfile.title ? userProfile.title : ""}`}
        />
      )}
      <main className="Mypage_Container">
        <UserProfile profile={userProfile} />
        <UserProfileEdit profile={userProfile} />
      </main>
    </>
  );
};

const MypageEdit = () => {
  const { loading, session } = useSession();
  const navigate = useNavigate();
  const { userId } = useParams();

  if (loading) return;
  if (!session || session.userId !== Number(userId)) {
    window.location.reload();
    navigate(`/users/mypage/${userId}`);
  }

  return <>{session ? <UserProfileComponent session={session} /> : null}</>;
};

export default MypageEdit;
