import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.svg'
const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeclassname='active'>
          <p>Home</p>
        </NavLink>
      </nav>
      <div className="side-nav-div">
        <div><p>PUBLIC</p></div>
        <NavLink to='/Questions' className='side-nav-links' activeclassname='active' >
          <img src={Globe} alt='globe' />
          <p style={{paddingLeft:'10px', }}>Question</p>
        </NavLink>
        <NavLink to='/Tags' className='side-nav-links' activeclassname='active' style={{paddingLeft:'40px'}}>
          <p>Tags</p>
        </NavLink>
        <NavLink to='/Users' className='side-nav-links' activeclassname='active' style={{paddingLeft:'40px'}}>
          <p>Users</p>
        </NavLink>
      </div>
    </div>
  )
}

export default LeftSidebar