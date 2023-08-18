import { useState } from "react";

import Layout from "../components/layout/Layout";
import CountButton from "../components/count_buttons/CountButton";

import UpdateIncrementDecrement from "../components/updateincrementdecrement/UpdateIncrementDecrement";

function About() {
  const [count, setCount] = useState(0);
  const [incrementvalue, setincrementvalue] = useState(0);
  const [decrementvalue, setdecrementvalue] = useState(0);

  const[resetvalue,setreset]=useState(0);

  // const o=count||50; //  eta o ignore korbe but amader onek somoy 0 lage se khetre eta na use kore ??  dibo
  const o=count ?? 50; //eta null ar undefined bad a sob kaj korbe o soho
  console.log(o)

  count &&console.log("count has a value",count);

  function reset(){

setCount(count*resetvalue)
  }

  function increment() {
    setCount(count + incrementvalue);
  }

  function decrement() {
    setCount(count - decrementvalue);
  }

  function handleIncrementChange(event) {
    setincrementvalue(parseInt(event.target.value));
  }

  function handleDecrementChange(event) {
    setdecrementvalue(parseInt(event.target.value));
  }
  return (
    <Layout>
      <h1>Hello i am about page</h1>
      <h1>{count}</h1>

      <UpdateIncrementDecrement
        incrementvalue={incrementvalue}
        decrementvalue={decrementvalue}
        handleIncrementChange={handleIncrementChange}
        handleDecrementChange={handleDecrementChange}
      />
      <CountButton increment={increment} decrement={decrement} reset={reset}></CountButton>
    </Layout>
  );
}

export default About;
