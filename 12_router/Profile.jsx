import React from "react";
import { useParams } from "react-router-dom";
const data = {
  velopert: {
    nams: "박여명",
    decription: "리액트 잘하고싶은 개발자",
  },
};

const Profile = () => {
  const params = useParams();

  const profile = data[params.username];
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.decription}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
