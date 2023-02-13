function Todo({text , complated}) {
  return (
    <div className="bg-gray-100 border rounded-lg p-4 flex ">
        <p htmlFor="checkbox" className="flex-1">{text}</p>
        <input type="checkbox" name="" id="checkbox" />
    </div>
  )
}

export default Todo