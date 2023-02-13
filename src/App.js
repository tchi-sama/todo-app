import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import { useEffect, useState } from "react";
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import Todo from "./Todo";
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  //create todo 
  const createTodo = async (e) => {
    e.preventDefault();
    if(input){
      await addDoc(collection(db, "todos"), {
        text:input,
        complated:false,
      })
      setInput("");
    }else{
      alert("Please enter a todo");
      return;
    }
  }
  //read todo
  useEffect(()=>{
    const q = query(collection(db,"todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id :doc.id})
      });
      setTodos(todosArr);
      console.log(todosArr)
    })
    return ()=> unsubscribe();
  },[])
  //update todo
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos",todo.id), {
      complated:!todo.complated,
    })
  };
  //delete todo
  const deleteTodo = async (todo) => {
    await deleteDoc(doc(db, "todos",todo.id))
        };
  return (
    <div className="h-[100vh] bg-gray-100 py-12 flex items-center justify-center">
      <div className="w-[500px] h-full  flex flex-col gap-6">
        <div className="overflow-y-auto flex-1 flex flex-col gap-2 p-3 bg-white shadow-2xl rounded-xl border">
          {
            todos.map((todo) => (
              <Todo deleteTodo={deleteTodo} toggleComplete={toggleComplete}  key={todo.id} todo={todo} />
            ))
          }
        </div>
        <form onSubmit={createTodo} className="border h-16 p-3 bg-white shadow-2xl rounded-xl flex justify-between gap-3">
          <input value={input} onChange={e=>setInput(e.target.value)} type="text" className=" rounded w-full h-full outline-none" />
          <button className="flex px-2 justify-center items-center gap-2 text-white bg-green-600 rounded-lg ">
            add
            <DoneRoundedIcon />
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
