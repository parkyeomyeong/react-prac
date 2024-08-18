import React, { useEffect, useState } from "react";

const P5hooks = () => {
  const [name, setName] = useState("");
  const [nickname, setNickName] = useState("");

  useEffect(() => {
    console.log("렌더링완료!");
    console.log({
      name,
      nickname,
    });

    return () => {
      console.log("clean up");
      console.log(name);
    };
  }, [name]);

  const onNameChange = (e) => setName(e.target.value);
  const onNickNameChange = (e) => setNickName(e.target.value);

  return (
    <div>
      <input type="text" value={name} onChange={onNameChange} />
      <input type="text" value={nickname} onChange={onNickNameChange} />

      <h2>이름 : {name}</h2>
      <h2>닉네임 : {nickname}</h2>
    </div>
  );
};

export default P5hooks;
