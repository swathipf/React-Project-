export const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
    const handleEdit = (id) => {
      const selectedTask = tasklist.find((todo) => todo.id === id);
      setTask(selectedTask); // Set the selected task to the state
    };
  
    const handleDelete = (id) => {
      const updatedTasklist = tasklist.filter((todo) => todo.id !== id);
      setTasklist(updatedTasklist);
    };
  
    return (
      <section className="showTask">
        <p className="head">
          <span>
            <span className="title"> Todo</span>
            <span className="count"> {tasklist.length}</span>
          </span>
          <button className="clearAll" onClick={() => setTasklist([])}> Clear All </button>
        </p>
        <ul>
          {tasklist.map((todo) => (
            <li key={todo.id}>
              <p>
                <span className="name"> {todo.name} </span>
                <span className="time"> {todo.time}</span>
              </p>
              <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></i>
              <i onClick={() => handleDelete(todo.id)} className="bi bi-trash3-fill"></i>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default ShowTask;