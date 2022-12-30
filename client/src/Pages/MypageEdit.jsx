import React, { useEffect, useState } from "react";
import "./Styles/MypageEdit.css";
import UserProfile from "../Components/UserProfile";
import UserProfileEdit from "../Components/UserProfileEdit";
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
  const [userProfile, setUserProfile] = useState(dummyDataProfile);

  useEffect(() => {
    axios
      .get(`/api/v1/users/1/userprofile`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setUserProfile(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
