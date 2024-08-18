import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const P6reducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => dispatch(e.target)}
      />
      <input
        type="text"
        name="nickname"
        value={nickname}
        onChange={(e) => dispatch(e.target)}
      />

      <h2>이름 : {name}</h2>
      <h2>닉네임 : {nickname}</h2>
    </div>
  );
};

export default P6reducer;
