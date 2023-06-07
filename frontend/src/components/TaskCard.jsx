import React from "react";
import { deleteTask } from "../lib/apiClient";

function TaskCard(props) {
  const { task } = props;

  const handleDeleteTask = (id) => {
    console.log("Delete task", id);
    deleteTask(id).then(() => {
      document.location.href = "/";
    });
  };

  return (
    <div
      className="d-flex justify-content-between align-items-center"
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        padding: "10px",
        margin: "10px",
      }}
    >
      <div className="">
        <div>
          <strong className="me-2">Title</strong>
          {task.title}
        </div>
        <div>
          <strong className="me-2">Description</strong>
          {task.description}
        </div>
      </div>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            document.location.href = `/task-form/${task._id}`;
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-danger ms-2"
          onClick={() => handleDeleteTask(task._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
