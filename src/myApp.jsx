import { useEffect, useState } from "react"

const count2Style = {
  color : "red",
  background : "white"
}
export default function MyApp(){

  const [count, setCount] = useState({
    count1 : 0,
    count2 : 0
  });

  useEffect(
    ()=>{ console.log("mount될때만 실행");}
    ,[]
  );

  function click(){
    const tempCount1 = count.count1;
    const tempCount2 = count.count2;
    setCount({
      count1 : tempCount1 + 1,
      count2 : tempCount2 + 1
    })
  }
  
    return (
        <div>
          <h1 style={{
            color : "yellow",
            background : "black"
          }}>counter1 : {count.count1}</h1>
          <h1 style={count2Style}>counter2 : {count.count2}</h1>
          <button 
          onClick={click}
          className="myBtn">+1</button>
        </div>
    )
}