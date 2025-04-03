
import React, { useState } from "react";
import "../App.css";

const Backend = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Backend-разработчик</h1>
      <div className="inputContainer">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Введите новую задачу"
          className="input"
        />
        <button onClick={addTask} className="button">
          Добавить
        </button>
      </div>
      <ul className="list">
        {tasks.map((task, index) => (
          <li key={index} className="listItem">
            {task}
            <button
              onClick={() => deleteTask(index)}
             className="deleteButton"
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Backend;