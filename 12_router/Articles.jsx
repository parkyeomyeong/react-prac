import React from "react";
import { Link, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <div>
      {/* 중첩된 자식 라우터를 보여주는거??*/}
      <Outlet />
      <ul>
        <li>
          <Link to="/articles/1">게시글1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
