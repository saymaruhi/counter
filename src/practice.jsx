import { useState } from "react";

function ColorChanger() {

  const[color, setColor]= useState("")
  return (

    <div>
      <h2>2. Color Changer</h2>
      <h4>Practice UseState</h4>
    <div
      style={{
        height: "100px",
        width: "200px",
        border: "2px solid black",
        backgroundColor: color,
       
      }}
    >
      <h2 style={{ textAlign: "center" }}>Sayma</h2>
    </div> 
    <h2></h2>

    <button style={{border: '2px solid black'}} onClick= {()=>setColor("blue")}>Blue</button><nb /><nb />
    <button style={{border: '2px solid black'}} onClick= {()=>setColor("red")}>Red</button><nb />
    <button style={{border: '2px solid black'}} onClick= {()=>setColor("green")}>Green</button>
    <hr />

    </div>
  );
}

function Text(){

  const[display,setDisplay]= useState()
  return(
    <div>
      <h2>3. Show/Hide Text</h2>
      {display && (<p>This is my Show and Hide  Toggel</p>)}
      
     
     <button style={{border: '2px solid blue', color: "blue"}} onClick={()=> setDisplay(!display)}> {display ? "Hide" : "Show"}
     </button>
      </div>
  )
}

export{Text}
 
export default ColorChanger;
