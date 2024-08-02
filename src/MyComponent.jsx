import React, {useState} from "react"

function MyComponent(){
    const [name,setName]=useState("KVB")
    const [age,setAge]=useState(0)
    const [isEmployed,setIsEmployed]=useState(false)
    const updateName=()=>{
        setName("venkat")
    }
    const updateAge=()=>{
        setAge(23)
    }
    const toggleEmployedStatus=()=>{
        setIsEmployed(!isEmployed)
    }
    return(<div>
                <p>Name:{name}</p>
                <button onClick={updateName}>Set Name</button>
                <p>Age:{age}</p>
                <button onClick={updateAge}>Set Age</button>
                <p>Employed:{isEmployed ? "Yes":"No"}</p>
                <button onClick={toggleEmployedStatus}>Toggle Status</button>
           </div>)
}
export default MyComponent