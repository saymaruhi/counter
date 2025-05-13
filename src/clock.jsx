import { useEffect, useState } from "react"

    const Clock =  ({color}) =>  {

    const[time,setTime]= useState(0)

    useEffect (()=> {
       setInterval(() => {
        setTime(new Date().toLocaleTimeString());

       },1000);

    },[])

    return(
        <div>
           <h2>4. Clock Component</h2>
           <h1 style={{color: color , backgroundColor: "black", width: "300px", textAlign: "center", padding: "12px",margin: "5px", borderRadius: "15px" }}>{time}</h1>

             
            
        </div>
    )
}
export default Clock