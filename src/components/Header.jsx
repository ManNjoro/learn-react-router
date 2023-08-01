import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import avatar from '../images/avatar-icon.png'

export default function Header() {

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

  return (
    <header>
        <nav className="navbar">
            <Link to="/"><h1>#VANLIFE</h1></Link>
            <div className="nav-links">
                <NavLink className={({isActive})=> isActive ? "active" : null} to="/host">Host</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/vans">Vans</NavLink>
                <Link to="login" className="login-link">
                    <img 
                        alt='user'
                        src={avatar} 
                        className="login-icon"
                    />
                </Link>
                <button onClick={fakeLogOut}>X</button>
            </div>
        </nav>
    </header>
  )
}
