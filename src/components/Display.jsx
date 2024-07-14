import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DisplayHome from './DisplayHome'

function Display() {
  return (
    <div className='w-[100%] overflow-auto m-2 pt-4 px-6 rounded bg-[#121212] text-white lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome/>} />
      </Routes>
    </div>
  )
}

export default Display
