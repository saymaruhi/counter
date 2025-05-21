import { useState } from "react";
import ColorChanger, { Text } from "./practice";
import Clock from "./clock";
import NestedLoop from "./NestedLoop";



function App() {
  const [count, setCount] = useState(1);
  const [color, setColor] = useState("green");


  return (
    <div>
      <h2>1. My Counter Project</h2>
      <h2>Counter: {count}</h2>
      <button
        style={{ color: "blue", border: "2px solid black" }}
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
      <nb /> <nb />
      <button
        style={{ color: "red", border: "2px solid black" }}
        onClick={() => setCount(count > 0 ? count - 1 : 0)}
      >
        Decrease
      </button>
      <nb /> <nb />
      <button
        style={{ color: "green", border: "2px solid black" }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
      <hr />
      <ColorChanger />
      <Text />
      <Clock color={color} />
     
      <select
        style={{ width: "100px", height: "30px" }}
        onChange={(event) => setColor(event.target.value)}
      >
        <option value={"green"}>Green</option>
        <option value={"blue"}>Blue</option>
        <option value={"red"}>Red</option>
        <option value={"orange"}>Orange</option>
      </select>
      <hr />
      <NestedLoop />
      
    </div>
  );
}


export default App;
