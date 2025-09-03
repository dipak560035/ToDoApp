// import { useState } from "react";

// export default function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");

//   // Add new todo
//   const addTodo = () => {
//     if (input.trim() === "") return; // prevent empty task
//     const newTodo = {
//       id: Date.now(),
//       text: input,
//       completed: false,
//     };
//     setTodos([...todos, newTodo]);
//     setInput(""); // clear input
//   };

//   // Toggle complete
//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   // Delete todo
//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div className="flex flex-col items-center p-5">
//       <h1 className="text-2xl font-bold mb-4"> To-Do List</h1>

//       {/* Input + Button */}
//       <div className="flex gap-2 mb-4">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Add a new task..."
//           className="border rounded p-2"
//         />
//         <button
//           onClick={addTodo}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Add
//         </button>
//       </div>

//       {/* Todo List */}
//       <ul className="w-full max-w-md">
//         {todos.map((todo) => (
//           <li
//             key={todo.id}
//             className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded"
//           >
//             <span
//               onClick={() => toggleTodo(todo.id)}
//               className={`cursor-pointer ${
//                 todo.completed ? "line-through text-gray-500" : ""
//               }`}
//             >
//               {todo.text}
//             </span>
//             <button
//               onClick={() => deleteTodo(todo.id)}
//               className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



import { useState } from "react";
import { Formik, Form, Field } from "formik";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  // Add todo
  const addTodo = (values, { resetForm }) => {
    const newTodo = {
      id: Date.now(),
      text: values.task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    resetForm(); // clear form input
  };

  // Toggle complete
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4"> To-Do App </h1>

      {/* Formik Form */}
      <Formik
        initialValues={{ task: "" }}
        onSubmit={addTodo}
      >
        {() => (
          <Form className="flex gap-2 mb-4">
            <Field
              name="task"
              placeholder="Add a new task..."
              className="border rounded p-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add
            </button>
          </Form>
        )}
      </Formik>

      {/* Todo List */}
      <ul className="w-full max-w-md">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded"
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
