import * as React from 'react';
import { useCount } from './test';

const CounterButton = () => {
  const counter = useCount()
  return (
    <>
      <button style={{display: "block"}} onClick={() => counter.increaseNumber()}>Increase</button>
      <button style={{display: "block"}} onClick={() => counter.decreaseNumber()}>Decrease</button>
      {counter.state}
    </>
   );
}
 
export default CounterButton;