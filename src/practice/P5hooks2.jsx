import React, { useState } from "react";
import P5hooks from "./P5hooks";

const P5hooks2 = () => {
  const [visible, setVisible] = useState(true);
  const onClickEvent = () => setVisible(!visible);

  return (
    <div>
      <button onClick={onClickEvent}>{visible ? "보이기" : "숨기기"}</button>
      <hr />
      {visible && <P5hooks />}
    </div>
  );
};

export default P5hooks2;
