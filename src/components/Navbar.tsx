import React from "react"  
import '../style/Navbar.css'; 
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to='/' className="navbar-container">Pokemon</Link>
    </nav>
  )
}

export default Navbar
