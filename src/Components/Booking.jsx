import React from 'react'
import { Outlet } from 'react-router-dom'

function Booking() {
  return (
    <div class='bg-text'>
        <h1 className='text-center'>Booking</h1><hr/>
        <Outlet></Outlet>
    </div>
  )
}

export default Booking