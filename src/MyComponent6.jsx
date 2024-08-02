import React, {useState, useEffect} from "react";
function MyComponent6(){
    const [width,setWidth]=useState(window.innerWidth);
    const [height, setHeight]=useState(window.innerHeight);
    useEffect(()=>{
        window.addEventListener("resize",hanldeResize);
        console.log("Event listener added");

        return()=>{
            window.removeEventListener("resize",hanldeResize);
            console.log("event listener removed");
        }
    },[]);
    useEffect(()=>{
        document.title=`Size: ${width} x ${height}`;
    },[width,height]);
    function hanldeResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return( <>
                <p>Window width:{width}</p>
                <p>Window height:{height}</p>
            </>);
}
export default MyComponent6