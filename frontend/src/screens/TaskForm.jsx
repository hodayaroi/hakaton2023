import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../App";
import { createTask, updateTask } from "../lib/apiClient";

function TaskForm() {
  let { id } = useParams();
  const [formValues, setFormValues] = React.useState({});
  const { tasks } = React.useContext(DataContext);
  const isEdit = !!id;

  useEffect(() => {
    if (!!id) {
      console.log("Edit task", id);
      const task = tasks.find((task) => task._id === id);
      if (task) {
        setFormValues(task);
      }
    }
  }, [id, tasks]);

  const handleCreateTask = () => {
    console.log("Create task", formValues);
    createTask(formValues)
      .then((task) => {
        console.log(task);
      })
      .then(() => {
        document.location.href = "/";
      });
  };

  const handleEditTask = () => {
    console.log("Update task", formValues);
    updateTask(formValues)
      .then((task) => {
        console.log(task);
      })
      .then(() => {
        document.location.href = "/";
      });
  };

  return (
    <div>
      <div className="d-flex justify-content-start mt-5 ms-5">
        <h1>{isEdit ? "Edit Task" : "Create Task"}</h1>
      </div>
      <div className="p-5 ">
        <div className="my-3 row">
          <label className="col-1" htmlFor="title">
            Title
          </label>
          <input
            className="col-4"
            type="text"
            id="title"
            name="title"
            value={formValues?.title || ""}
            onChange={(e) =>
              setFormValues({ ...formValues, title: e.target.value })
            }
          />
        </div>
        <div className="my-3 row">
          <label className="col-1" htmlFor="description">
            Description
          </label>
          <input
            className="col-4"
            type="text"
            id="description"
            name="description"
            value={formValues?.description || ""}
            onChange={(e) =>
              setFormValues({ ...formValues, description: e.target.value })
            }
          />
        </div>
        <div className="col-4 d-flex justify-content-center">
          <button
            className=""
            disabled={!formValues?.title || !formValues?.description}
            onClick={isEdit ? handleEditTask : handleCreateTask}
          >
            {isEdit ? "Update Task" : "Create Task"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
