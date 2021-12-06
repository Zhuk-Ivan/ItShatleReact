import { useState } from "react";

const TestComponentFunction = ({ name }) => {
  const [counter, setCounter] = useState(0);
  const [secCounter, setSecondCounter] = useState(0);
  const [thirdCounter, setThirdCounter] = useState(0);

  const increaseCount = (counter, counterFunc, increment) => {
    counterFunc(counter + increment);
  }

    return <>
      <h1>{name}</h1>
      <button onClick={() => increaseCount(counter, setCounter, 1)}>Update count by one</button>
      <button onClick={() => increaseCount(secCounter, setSecondCounter, 2)}>Update count by two</button>
      <button onClick={() => increaseCount(thirdCounter, setThirdCounter, 3)}>Update count by three</button>
      <p>This is first button counter: {counter}, second one button {secCounter}, third button counter {thirdCounter}
      </p>
      <p>Total buttons count: {counter + secCounter + thirdCounter}</p>
    </>
}
TestComponentFunction.defaultProps = {
  name : 'Default Ivan'
}
export default TestComponentFunction;