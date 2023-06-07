const SERVER_URL = "http://localhost:8000";

export const getTasks = () => {
  return fetch(`${SERVER_URL}/api/v1/tasks`).then((res) => res.json());
};

export const createTask = (task) => {
  return fetch(`${SERVER_URL}/api/v1/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  }).then((res) => res.json());
};

export const updateTask = (task) => {
  return fetch(`${SERVER_URL}/api/v1/tasks/${task._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  }).then((res) => res.json());
};

export const deleteTask = (taskId) => {
  return fetch(`${SERVER_URL}/api/v1/tasks/${taskId}`, {
    method: "DELETE",
  });
};
