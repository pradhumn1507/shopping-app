import React from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'

export default function Navbar() {
  return (
    <div>
      <Link to='/signup'>Signup</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}
