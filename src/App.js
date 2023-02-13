import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "./firebase";
import Todo from "./Todo";
function App() {
  const [todos, setTodos] = useState([]);

  //create todo 
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
  //delete todo

  return (
    <div className="h-[100vh] bg-gray-100 py-12 flex items-center justify-center">
      <div className="w-[500px] h-full  flex flex-col gap-6">
        <div className="flex-1 p-3 bg-white shadow-2xl rounded-xl border">
          {
            todos.map((todo) => (
              <Todo key={todo.id} text={todo.text} complated={todo.complated} />
            ))
          }
        </div>
        <div className="border h-16 p-3 bg-white shadow-2xl rounded-xl flex justify-between gap-3">
          <input type="text" className=" rounded w-full h-full outline-none" />
          <button className="flex px-2 flex justify-center items-center gap-2 text-white bg-green-600 rounded-lg ">
            add
            <DoneRoundedIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
