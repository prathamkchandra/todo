import { useState } from 'react'
import Navbar from './components/navbar'
const { v4: uuidv4 } = require('uuid');
function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit=()=>{

  }
  const handleDelete= ()=>{

  }
  const handleAdd= ()=>{
    setTodos([...todos, {id: uuidv4(),todo, isCompleted:false}])
    setTodo("")
    console.log(todos)
  }
  const handlechange= (e)=>{
setTodo(e.target.value)
  }
  const handlecheckbox = (e)=>{
    setTodo(e.target.id) 
}
  return (
    <>
      <Navbar/> 
    <div className="container mx-4 my-4 rounded-xl p-5 bg-violet-100 min-h-[70vh]">
      <div className="addTodo my-5">
        <h2 className='text-lg font-bold'>Add a Todo</h2>
        <input onChange={handlechange} value={todo} type="text" className='w-1/2'/>
        <button onClick={handleAdd} className='bg-violet-800 hover :bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-4'>Add</button>
        </div>
      <h2 className='text-lg font-bold'>Your todos</h2>
      <div className="todos">
        {todos.map(item=>{

      return <div key={todo} className="todo flex w-1/4 my-3 justify-between">
          <input type="checkbox" value={todo.isCompleted} name="" id=""/>
          <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            <div className="buttons">
              <button onClick={handleEdit}className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Edit</button>
              <button onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Delete</button>
              </div>
              </div>
        })}
              <div>
            </div>
    </div>
</div>
    </>
  )
}
export default App
