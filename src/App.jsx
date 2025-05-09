
import { useState } from "react"
import ColorChanger from "./practice"

function App() {
  const[count, setCount]= useState(1)
 
  return (
    
      <div>
       <h2>My Counter Project</h2>
       <h2>Counter: {count}</h2>
       
       
       <button style={{color:"blue",  border: '2px solid black'}} onClick={() => setCount(count + 1)}>Increase</button><nb/> <nb/>

       <button style={{ color: "red",border: '2px solid black'}} onClick={() => setCount(count > 0 ? count-1 :0)}>Decrease</button><nb/> <nb/>

       <button style={{color: "green", border: '2px solid black'}} onClick={() => setCount(0)}>Reset</button>

       <ColorChanger />
       
       
     
       
      </div>
      
    
  )
}

export default App
