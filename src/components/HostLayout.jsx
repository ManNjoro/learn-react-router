import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HostLayout() {
  const styles = {
    color: 'red',
    fontWeight: 'bold',
    textDecoration: 'underline'
  }
  return (
    <div>
        <nav className='host-links'>
            <NavLink style={({isActive})=> isActive ? styles : null} to="." end>Dashboard</NavLink>
            <NavLink style={({isActive})=> isActive ? styles : null} to='income'>Income</NavLink>
            <NavLink style={({isActive})=> isActive ? styles : null} to='vans'>Vans</NavLink>
            <NavLink style={({isActive})=> isActive ? styles : null} to='reviews'>Reviews</NavLink>
        </nav>
        <Outlet /> 
    </div>
  )
}
