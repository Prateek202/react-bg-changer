import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

function handleClick(){
  document.body.style.backgroundColor = generateRandomColor();
}

function generateRandomColor(){

    let r = (Math.random()*100);
    let g = (Math.random()*100);
    let b = (Math.random()*100);
console.log(r,g,b);
    return `rgb(${r},${g},${b})`
}
  return (
    <>
      <h1>bg changer</h1>
      <button onClick={handleClick} >
        Change Color
      </button>
    </>
  )
}

export default App
