"use client";

import { useState } from "react";

type CounterType = {
  count: number;
}

export default function Counter({count} : CounterType) {

  const [initCountVal, setInitCountVal] = useState(count);
  const [inputVal, setInputVal] = useState(0);

  const changeVal = (e : any) => {
    setInputVal(Number(e.target.value))
  }

  const addVal = () => {
    setInitCountVal(initCountVal + inputVal);
  }

  const minusVal = () => {
    if (initCountVal === 0 || inputVal === 0) return;
    setInitCountVal(initCountVal - inputVal);
  }

  const resetVal = () => {
    setInputVal(count);
    setInitCountVal(count);
  }

  return (
    <>
      <h1>Counter App</h1>
      <input type="text" value={inputVal} onChange={changeVal}/>
      <button onClick={addVal}>+</button>
      <button onClick={minusVal}>-</button>
      <button onClick={resetVal}>Reset</button>
      <h2>{initCountVal}</h2>
    </>
  )
}
