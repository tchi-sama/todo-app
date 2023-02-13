function Todo({todo , toggleComplete}) {
  return (
    <div onClick={()=>toggleComplete(todo)} className="bg-gray-100 border rounded-lg p-2 gap-2 flex ">
        <input checked={todo.complated} type="checkbox" name="" id="checkbox" />
        <p htmlFor="checkbox" className="flex-1 p-2">{todo.text}</p>
    </div>
  )
}

export default Todo