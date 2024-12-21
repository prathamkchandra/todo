import { useState } from 'react'
import Navbar from './components/navbar'

function App() {
  return (
    <>
      <Navbar/> 
    <div className="container mx-auto my-5 rounded-x1 p-5 w-auto bg-violet-100">
      <div className="">
      <h1 className='text-x1 font-bold'>Your todos</h1>
      </div>
      </div> 
    </>
  )
}
export default App
