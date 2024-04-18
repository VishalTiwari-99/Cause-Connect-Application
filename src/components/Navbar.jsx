import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbarContainer'>
        <div className="navbarLeft">
            <Link to="/" style={{textDecoration:"none"}}>
              <div className="link1"><span className="logo">CauseConnect</span></div>
            </Link>
        </div>

        <div className="navbarCenter1">
          <div className="navLink">
            <div className="link1">
              <Link to="/raise" style={{textDecoration:"none"}}>
                <span className='raise'>Raise</span>              
              </Link>
            </div>
          </div>
        </div>

        <div className="navbarCenter2">
          <div className="navLink">
            <div className="link2">
              <Link to="/donate" style={{textDecoration:"none"}}>
                <span className='view'>View</span>
              </Link>
            </div>
          </div>
        </div>        

        <div className="navbarRight">
          <div className="searchBox">
            <input className='inputBox' type="text" placeholder='Search Here...' />
          </div>
        </div>
    </div>
  )
}

export default NavBar