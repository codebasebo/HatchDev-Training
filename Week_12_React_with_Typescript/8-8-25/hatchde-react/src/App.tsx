import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)
  const [myState, setMyState] = useState<{ [key: string]: any }>({"toby": 10})
  const [toggleSwitch, setToggleSwitch] = useState<boolean>(true)  
   const [color, setColor] = useState<string>("blue");
  // useState
  // useEffect
  // useRef

  useEffect(() => {
    if (toggleSwitch === true) {
    setColor("red");
  }
  }, [])

  return (
    <main 
    style={{backgroundColor: `${toggleSwitch ? color : "white"}`}}>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={() => setMyState({ "toby": myState["toby"] + 1 })}>
          Toby is {myState["toby"]}
        </button>

        <button onClick={() => setToggleSwitch(!toggleSwitch)}>
          Toggle Switch is {toggleSwitch ? "ON" : "OFF"}
         </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </main>
  )
}

export default App