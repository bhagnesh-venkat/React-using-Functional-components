import React, {useState} from "react"
function Counter1(){
    const [count, setCount]=useState(0);
    const increment=()=>{
        //uses current state to calculate the next state
        //set functions do not trigger an update
        // React batches together states updates for performance reasons
        // Next state becomes the current state after an update
        //setCount(count+1)
        //setCount(count+1)
        //similar to press refresh button on web browser
        //--------------------------------------------------
        //takes the PENDING state to calculate the NEXT state
        //React puts your uppdater function in a queue(waiting in line)
        //During the next render, React will call them in same order
        setCount((c)=>c+1)
        setCount((c)=>c+1)
    }
    const decrement=()=>{
        setCount((c)=>c-1)
    }
    const reset=()=>{
        setCount(0)
    }
    return( <div>
                <p>Count:{count}</p>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>Increment</button>
            </div>)
}
export default Counter1