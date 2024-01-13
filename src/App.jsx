import { useState } from "react";
import FallingWords from "./components/fallingWords/FallingWords"
import './style.css'
import Home from "./components//home/Home";
import Navbar from "./components/navbar/Navbar";
import SpeedTest from "./components/SpeetTest/SpeedTest";
import Word from "./components/fallingWords/Word";


function App() {
  window.onkeydown = function(e) { 
    // return !(e.keyCode == 32 && e.target == document.body);
    if (e.keyCode == 32)  e.preventDefault();
  }; 
  const [cond, setCond] = useState(false)
  const handelClick =()=>{
    setCond(!cond)
  }
  console.log(<Word/>)
  return (
    <div className="app">
      <Navbar/>
      <Home/>
      <FallingWords/>
      <SpeedTest/>
    </div>
  )
}

export default App
