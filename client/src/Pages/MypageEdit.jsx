import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSession } from "../CustomHook/SessionProvider";
import "./Styles/MypageEdit.css";
import UserProfile from "../Components/UserProfile/UserProfile";
import UserProfileEdit from "../Components/UserProfile/UserProfileEdit";
import CustomTitle from "../Components/CustomTitle";
import axios from "axios";

const dummyDataProfile = {
  userId: 0,
  profileImage:
    "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg",
  displayName: " 안녕하세요 테스트입니다",
  title: "test로 시작한 타이틀입니다",
};

const MypageEdit = () => {
  const { loading, session } = useSession();
  const navigate = useNavigate();
  const { userId } = useParams();
  const [userProfile, setUserProfile] = useState(dummyDataProfile);

  useEffect(() => {
    if (!session) {
      navigate("/questions");
    }
  });

  const myPageEditGetUserProfileUrl = `/api/v1/users/${userId}/userprofile`;

  useEffect(() => {
    axios
      .get(myPageEditGetUserProfileUrl, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setUserProfile(res.data);
      })
      .catch((err) => console.log(err));
  }, [myPageEditGetUserProfileUrl]);

  if (loading) return;
  if (!session || session.userId !== userId) {
    window.location.reload();
    navigate(`/users/mypage/${userId}`);
  }
  return (
    <>
      <CustomTitle
        title={`User - ${userProfile.displayName}`}
        description={`User - ${userProfile.title ? userProfile.title : ""}`}
      />
      <main className="Mypage_Container">
        <UserProfile profile={userProfile} />
        <UserProfileEdit profile={userProfile} />
      </main>
    </>
  );
};

export default MypageEdit;
