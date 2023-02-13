import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import { useState } from "react";
import Todo from "./Todo";
function App() {
  const [todos, setTodos] = useState([]);

  //create todo 
  //read todo
  //update todo
  //delete todo

  return (
    <div className="h-[100vh] bg-gray-100 py-12 flex items-center justify-center">
      <div className="w-[500px] h-full  flex flex-col gap-6">
        <div className="flex-1 p-3 bg-white shadow-2xl rounded-xl border">
          {
            <Todo text="test" complated={false}/>
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
