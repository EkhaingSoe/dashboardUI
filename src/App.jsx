import React, { useState } from 'react'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import "./App.css"


const App = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
   
    <div >
      
      <Nav setToggle={setToggle} toggle={toggle} />
      <Sidebar toggle={toggle} />
      <Dashboard/>
    </div>
  )
}

export default App