import React from "react"
import "./style/PokeApp.css"
import Navbar from "./components/Navbar"
import { Outlet } from 'react-router-dom'

function PokeApp() {
  return (
    <div className="App">
      <Navbar />
      <Outlet/>
    </div>
  )
}

export default PokeApp
