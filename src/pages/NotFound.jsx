import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <div className='not-found'>
        <h1>Sorry, the page you were looking for was no found</h1>
        <Link to='/' className='not-found-link'>Return to home</Link>
        </div>
    </div>
    
  )
}
