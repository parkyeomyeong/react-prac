import React, { useCallback, useMemo, useRef, useState } from "react";

const getAvg = (numbers) => {
  console.log("평균값 계산 중");
  if (numbers.length == 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const P7memo = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef();

  //   const onClickEvent = () => {
  //     const nextList = list.concat(parseInt(number));
  //     setList(nextList);
  //     setNumber("");
  //   };
  const onChange = (e) => {
    setNumber(e.target.value);
    console.log("onChange 생성됨");
  };

  const onClickEvent = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    // console.log("onClick 생성");
    inputEl.current.focus();
  }, [list, number]); //의존하는 값이 있다면 그 값을 무조건 넣어줘야함

  //   const onChange = useCallback((e) => setNumber(e.target.value), []);

  const calAvg = useMemo(() => getAvg(list), [list]);
  return (
    <>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onClickEvent}>확인</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b>
        {calAvg}
      </div>
    </>
  );
};

export default P7memo;
