import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
  <>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
            
            <Link to="/" class="navbar-brand">My Website</Link>
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link to="/" class="nav-link">HOME</Link>
                </li>
                <li className="nav-item">
                    <Link to="/About" class="nav-link">ABOUT</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Menu" class="nav-link">MENU</Link>
                </li>
            </ul>
        </div>
        </nav>
    </>

  )
}

export default Navbar