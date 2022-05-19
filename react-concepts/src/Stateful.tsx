import { useState } from "react"

function Stateful() {
    const [count,setCount] = useState(0);
    const [prevCount, setPrevCount] = useState(0)

    const handleClick = () => {
        setCount((prev) => {
          setPrevCount(prev);
          setCount(count + 1);
        });
      };
    return(
        <>
        <h2>Current count : {count}</h2>
        <h3>Previous count : {prevCount}</h3>
        <button onClick={handleClick}>Increment</button>
        </>
    )
}

export default Stateful