import { useState } from "react";

const initialTasks = [
  { taskName: "Go to gym", id: 1 },
  { taskName: "Go to temple", id: 2 },
  { taskName: "Go to office", id: 3 },
];
export default function App() {
  const [taskInput, setTaskInput] = useState("");
  let [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (taskInput !== "") {
      console.log({ taskName: taskInput, id: Date.now() });
      setTasks((tasks) => [...tasks, { taskName: taskInput, id: Date.now() }]);
      setTaskInput("");
    }
  }

  return (
    <div className="w-3/5 m-auto text-center ">
      <TitleOfApp />
      <FormInput
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        onSubmit={handleSubmit}
      />
      {tasks.length === 0 ? (
        <h2 className="text-2xl font-semibold">Add tasks to list</h2>
      ) : (
        <TodoList tasks={tasks} />
      )}
    </div>
  );
}

function TitleOfApp() {
  return <h1 className="text-2xl font-bold">Todo App</h1>;
}

function FormInput({ taskInput, setTaskInput, onSubmit }) {
  return (
    <form className="" onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        className="border-2 p-2 rounded-lg m-2 w-2/3"
        placeholder="Enter task name..."
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
        Add
      </button>
    </form>
  );
}

function TodoList({ tasks }) {
  return (
    <ul className="w-2/3 m-auto">
      {tasks.map((task) => (
        <div className="flex justify-between m-2" key={task.id}>
          {task.taskName}
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
            Delete
          </button>
        </div>
      ))}
    </ul>
  );
}
