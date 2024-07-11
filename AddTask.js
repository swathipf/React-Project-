import React from 'react';

export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent reload
    const date = new Date();

    if (task.id) {
      // Updating an existing task
      const updatedTasklist = tasklist.map((todo) =>
        todo.id === task.id
          ? { id: task.id, name: task.name, time: `${date.toLocaleTimeString()}, ${date.toLocaleDateString()}` }
          : todo
      );
      setTasklist(updatedTasklist);
      setTask({ id: '', name: '', time: '' }); // Clear task state after updating
    } else {
      // Adding a new task
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()}, ${date.toLocaleDateString()}`
      };
      setTasklist([...tasklist, newTask]);
      e.target.task.value = ''; // Clear input field
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.name || " "}
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? 'Update' : 'Add'}</button>
      </form>
    </section>
  );
};

export default AddTask;