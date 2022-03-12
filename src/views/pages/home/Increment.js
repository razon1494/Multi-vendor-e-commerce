import { useState } from "react";

const Increment = () => {
  const [count, setCount] = useState(0);
  const increamentCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={increamentCount}>Count: {count}</button>
    </div>
  );
};

export default Increment;
