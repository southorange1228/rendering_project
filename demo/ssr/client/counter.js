import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("func called");
  };
  return <div onClick={handleClick}>çšćĺ</div>;
};

export default Counter;
