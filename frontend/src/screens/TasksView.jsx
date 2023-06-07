import React from "react";
import { DataContext } from "../App";
import TaskCard from "../components/TaskCard";

function TasksView() {
  const { tasks } = React.useContext(DataContext);
  return (
    <div className="p-5">
      <h1>My Tasks</h1>
      <div>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      <button
        className="btn btn-success mt-3 ms-2"
        onClick={() => {
          document.location.href = "/task-form";
        }}
      >
        Add Task
      </button>
    </div>
  );
}

export default TasksView;
