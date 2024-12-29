import { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./components/Navbar";
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const saveToLS = (params) => {
    console.log("Saving to local storage", todos);
    localStorage.setItem("todos", JSON.stringify([...todos, params]));
  };

  const toggleFinished = () => {
    setshowFinished(!showFinished);
  };
  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id == id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id != id;
    });
    setTodos(newTodos);
    saveToLS();
  };
  const handleDelete = (e, id) => {
    console.log(`The id is ${id}`);
    let index = todos.findIndex((item) => {
      return item.id == id;
    });
    console.log(index);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };
  function handleAdd (){
    setTodos((prev)=>[...prev, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo(()=>"");
    saveToLS({ id: uuidv4(), todo, isCompleted: false });
  };

  const handlechange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    console.log(e, e.target);
    let id = e.target.name;
    console.log(`The id is ${id}`);
    let index = todos.findIndex((item) => {
      return item.id == id;
    });
    console.log(index);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
  };


  let count = 0;
  const [count2, setCount2] = useState(0);

  function handleCount() {
    setCount2(count2 + 1);
    count = count + 1;
  
    console.log(count, "normal variable");
    console.log(count2,"state variable");
  }

  function printValues(){
    console.log(count, "normal variable");
    console.log(count2,"state variable");
  }
  return (
    <>
      <Navbar />
      <div className="container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[70vh] md:w-[55%]">
        <h1 className="font-bold text-center text-3xl">
          Manage your todos at one place
        </h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <div className="flex justify-between bg-green-400 px-5 py-1" onClick={handleCount}>
            <p>state variable:{count2}</p>
            <p>normal variable:{count}</p>
          </div>
          <div className="flex justify-between bg-green-400 px-5 py-1" onClick={printValues}>
            Print
          </div>
          <h2 className="text-2xl font-bold">Add Todo</h2>
          <div className="flex">
            <input
              onChange={handlechange}
              value={todo}
              type="text"
              className="w-full rounded-full px-5 py-1"
            />
            <button
              onClick={handleAdd}
              disabled={todo.length <= 3}
              className="bg-violet-800  hover:bg-violet-950 mx-2 rounded-full disabled:bg-violet-400 p-4 py-2 text-sm font-bold text-white"
            >
              Save
            </button>
          </div>
        </div>
        <input
          className="my-4"
          id="show"
          onChange={toggleFinished}
          type="checkbox"
          checked={showFinished}
        />
        <label className="mx-2" htmlFor="show">
          Show Finished
        </label>
        <div className="h-[1px] bg-black opacity-15  w-[90%] mx-auto my-2"></div>
        <h2 className="text-lg font-bold">Your todos</h2>
        <div className="todos">
          {todos.length == 0 && <div className="m-5">No Todos yet!</div>}
          {todos.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div key={item.id} className="todo flex my-3 justify-between">
                  <div className="flex gap-5">
                    <input
                      name={item.id}
                      onChange={handleCheckbox}
                      type="checkbox"
                      checked={todo.isCompleted}
                      id=""
                    />
                    <div className={item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </div>
                  </div>
                  <div className="buttons flex h-full">
                    <button
                      onClick={(e) => {
                        handleEdit(e, item.id);
                      }}
                      className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                    >
                      <MdEdit />
                    </button>
                    <button
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                      className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              )
            );
          })}
          <div></div>
        </div>
      </div>
    </>
  );
}
export default App;
