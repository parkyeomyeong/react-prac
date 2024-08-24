import React, { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []); // 처음 생성될때만 onChange 생성

  // click으로 해도되는데 submit는 Enter눌러도 submit되기 때문에 이렇게 했음
  const onSubmit = useCallback(
    (e) => {
      //form은 submit 되면 브라우저 새로고침 함
      e.preventDefault();

      onInsert(value);
      setValue("");
    },
    [onInsert, value]
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
