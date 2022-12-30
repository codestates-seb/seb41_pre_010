import React, { useEffect, useState } from "react";
import "./Styles/MypageEdit.css";
import UserProfile from "../Components/UserProfile/UserProfile";
import UserProfileEdit from "../Components/UserProfile/UserProfileEdit";
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
      .get(
        `https://3bdd-175-205-115-85.jp.ngrok.io/api/v1/users/1/userprofile`,
        {
          headers: {
            "ngrok-skip-browser-warning": "69420",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setUserProfile(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main className="Mypage_Container">
        <UserProfile profile={userProfile} />
        <UserProfileEdit profile={userProfile} />
      </main>
    </>
  );
};

export default MypageEdit;
