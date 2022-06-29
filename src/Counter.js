import React, { useState } from "react";
function Counter(props) {
    const [counter, setCounter] = useState(0)
    const check = props.count;
    const increaseALL = () => {
        setCounter((prev) => prev + 1)
    }
    const decreaseAll = ()=>{
        setCounter((prev) => prev - 1)

    }
    if (check === 0) {
        return (
            <>
                <div className="all">
                    <h3>Counter  ALL </h3>
                    <div>{counter}</div>
                    <button onClick={decreaseAll}>Decrease</button>
                    <button onClick={increaseALL}>Increase</button>
                    
                    
                </div>
            </>)
    } else
        return (
            <>
                <div className="main">
                    <h3>Counter  {props.count} </h3>
                    <div>{counter}</div>
                    <button onClick={() => setCounter((prev) => prev - 1)}>Decrease</button>
                    <button onClick={() => setCounter((prev) => prev + 1)}>Increase</button>
                    
                </div>
            </>
        )
}
export default Counter