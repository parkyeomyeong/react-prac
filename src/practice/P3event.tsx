import { useState } from "react";

const P3event = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;

  const onChangeHandle = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const btnClickEvent = () => {
    alert(form.username + " " + form.message);
    setForm({
      username: "",
      message: "",
    });
  };
  return (
    <>
      <h1>이벤트 연습</h1>
      <div>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={username}
          onChange={onChangeHandle}
        />
        <input
          type="text"
          name="message"
          placeholder="입력하세요"
          value={message}
          onChange={onChangeHandle}
        />
        <button onClick={btnClickEvent}>확인</button>
      </div>
    </>
  );
};

export default P3event;
