import React from "react";
import { useState } from "react";

const P4Iterate = () => {
  const [names, setNames] = useState([
    { id: 1, text: "봄" },
    { id: 2, text: "여름" },
    { id: 3, text: "가을" },
    { id: 4, text: "겨울" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChangeHandle = (e) => {
    setInputText(e.target.value);
  };
  const onClickEvent = () => {
    if (inputText == "") {
      alert("입력해주세요");
      return false;
    }
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });

    setNames(nextNames);

    setInputText("");
    setNextId(nextId + 1);
  };

  const nameList = names.map((item) => <li key={item.id}>{item.text}</li>);
  return (
    <>
      <div>
        <input type="text" onChange={onChangeHandle} value={inputText} />
        <button onClick={onClickEvent}>확인</button>
      </div>
      <ul>{nameList}</ul>
    </>
  );
};

export default P4Iterate;
