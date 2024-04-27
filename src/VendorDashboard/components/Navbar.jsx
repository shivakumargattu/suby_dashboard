import React from 'react'

const Navbar = ({showLoginHandlar,showRegisternHandlar}) => {
  
  return (
    <div className='navSection'>
      <div className='company'>
        Vendor Dashboard
      </div>
      <div className='userAuth'>
      <span onClick={showLoginHandlar}>Login / </span>
      <span onClick={showRegisternHandlar}>Register</span>

      </div>
    </div>
  )
}

export default Navbar