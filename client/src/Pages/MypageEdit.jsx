import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSession } from "../CustomHook/SessionProvider";
import "./Styles/MypageEdit.css";
import UserProfile from "../Components/UserProfile/UserProfile";
import UserProfileEdit from "../Components/UserProfile/UserProfileEdit";
import CustomTitle from "../Components/CustomTitle";
import axios from "axios";
import Page404 from "./404Page";

const fetchUrl = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(url);
      resolve(data);
    } catch (e) {
      if (e) reject(e);
    }
  });
};

const UserProfileComponent = ({ userId }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const myPageEditGetUserProfileUrl = `/api/v1/users/${userId}/userprofile`;

  useEffect(() => {
    fetchUrl(myPageEditGetUserProfileUrl)
      .then((userProfileData) => {
        setUserProfile(userProfileData);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  }, [myPageEditGetUserProfileUrl]);

  if (loading) return;
  if (!userProfile) return <Page404 />;
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

  return <>{session ? <UserProfileComponent userId={userId} /> : null}</>;
};

export default MypageEdit;
