import { useState } from 'react'
import Navbar from './components/navbar'

function App() {
  return (
    <>
      <Navbar/> 
    <div className="container mx-4 my-4 rounded-xl p-5 bg-violet-100 min-h-[70vh]">
      <div className="addTodo my-5">
        <h2 className='text-lg font-bold'>Add a Todo</h2>
        <input type="text" className='w-2-1/2'></input>
        <button className='bg-violet-800 hover :bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-4'>Add</button>
        </div>
      <h2 className='text-lg font-bold'>Your todos</h2>
      <div className="todos">
        < div className="todoflex">
          <div className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <div className="buttons">
              <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Edit</button>
              <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Delete</button>
              </div>
              </div>
              <div>
            </div>
    </div>
</div>
          </div>
    </>
  )
}
export default App
