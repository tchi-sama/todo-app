import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { IconButton } from "@mui/material";
function Todo({ todo, toggleComplete,deleteTodo }) {
  return (
    <div
      className="bg-gray-100 justify-center items-center border rounded-lg p-2 gap-2 flex "
    >
        <div className="flex flex-1" onClick={() => toggleComplete(todo)}>
      <input checked={todo.complated} type="checkbox" name="" id="checkbox" />
      <p  htmlFor="checkbox" className="flex-1 p-2">
        {todo.text}
      </p>
        </div>
      <IconButton onClick={()=>deleteTodo(todo)}>
        <DeleteRoundedIcon />
      </IconButton>
    </div>
  );
}

export default Todo;
