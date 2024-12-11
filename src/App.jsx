import { useState } from 'react'
import Navbar from './components/navbar'

function App() {
  return (
    <>
      <Navbar/> 
    <div className="container mx-auto my-5 rounded-x1 p-5 bg-violet-100">
        <h1 className='text-x1 '>Your todos</h1>
      </div> 

    </>
  )
}
export default App
