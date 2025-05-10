import { useState } from "react";

function ColorChanger() {

    const[color,setColor]= useState('blue')
  return (
    <div>
      <h2>Color Changer</h2>
      <h4>Practice :useState, inline style</h4>
      
      <div style={{
          width: "200px",
          height: "100px",
          backgroundColor: color,
          margin: "20px auto",
          border: "2px solid black"
        }}>
              <h2 style={{color: "purple", textDecoration: "underline", textAlign: "center"}}>Hello</h2>
      </div>

      
      <button
        style={{ border: "2px solid black" }}
        onClick={() => setColor("blue")} >Blue</button> <nb/>
      

      
      <button style={{ border: "2px solid black" }}onClick={() => setColor("green")} >Green</button> <nb />
      <button style={{ border: "2px solid black" }} onClick={() => setColor("red")}>Red</button>

      <hr/>
      <h2>Hello</h2>
    </div>
  );
}
export default ColorChanger;
