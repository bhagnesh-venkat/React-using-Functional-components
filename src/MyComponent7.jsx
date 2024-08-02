import React, {useState, useEffect, useRef} from "react";
function MyComponent7(){
    //let [number, setNumber]=useState(0);
    //const ref=useRef(0);
    const inputRef1=useRef(null);
    const inputRef2=useRef(null);
    const inputRef3=useRef(null);
    useEffect(()=>{
        console.log("component rendered");
    })
    function handleclick1(){
        //setNumber(n=>n+1);
        //ref.current=ref.current+1;
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor="yellow";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
    }
    function handleclick2(){
        //setNumber(n=>n+1);
        //ref.current=ref.current+1;
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="yellow";
        inputRef3.current.style.backgroundColor="";
    }
    function handleclick3(){
        //setNumber(n=>n+1);
        //ref.current=ref.current+1;
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="yellow";
    }
    return( <div>
                <button onClick={handleclick1}>Click me1</button>
                <input ref={inputRef1}></input>
                <button onClick={handleclick2}>Click me2</button>
                <input ref={inputRef2}></input>
                <button onClick={handleclick3}>Click me3</button>
                <input ref={inputRef3}></input>
            </div>);
}
export default MyComponent7;