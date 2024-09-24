import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TasksList() {
  const urlBase = "http://localhost:8080/tasks-app/tasks";

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const result = await axios.get(urlBase);
    console.log("Load tasks result: ");
    console.log(result.data);
    setTasks(result.data);
  };

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Task list</h3>
      </div>
      <div className="container">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Task</th>
              <th scope="col">Resposible person</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {
            tasks.map((task, index) => (
              <tr key={index}>
                <th scope="row">{task.taskId}</th>
                <td>{task.taskName}</td>
                <td>{task.responsiblePerson}</td>
                <td>{task.status}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
