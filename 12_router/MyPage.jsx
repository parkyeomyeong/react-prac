import React from "react";
import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />; //replace true는 이전 페이지를 돌아가기 않기 위해서
  }
  return <div>마이페이지</div>;
};

export default MyPage;
