import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { getTasks } from "./lib/apiClient";
import TaskForm from "./screens/TaskForm";
import TasksView from "./screens/TasksView";
import Login from "./components/Login";

export const DataContext = React.createContext({});

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((tasksFromServer) => {
      console.log(tasksFromServer);
      setTasks(tasksFromServer);
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        tasks: tasks,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasksView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tasks" element={<TasksView />} />
          <Route path="/task-form/:id?" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
