import Form from './components/form/Form';
import TodoItem from './components/todosItems/TodoItem';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './components/loader/Loader';

function App() {
  const [todos, setTodos] = useState([]);

  /*
  /  fetch request
 
  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.log(err));
  }, []);
 */
  /// axios get request
  useEffect(() => {
    axios
      .get('http://localhost:3000/todos')
      .then(res => setTodos(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container p-3 p-md-5">
      <h1 className="text-center ">
        <span className="text--color">CRUD</span> - Todo Application
        <Form setTodos={setTodos}   />
        <ul className="list-group">
          {todos ? (
            todos.map(todo => (
              <TodoItem
                todo={todo}
                setTodos={setTodos}
                allTodos={todos}
                key={todo.id}
              />
            ))
          ) : (
            <Loader />
          )}
        </ul>
      </h1>
    </div>
  );
}

export default App;
