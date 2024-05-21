import formatDate from '../../utils/date/FormatDate';
import axios from 'axios';
import ContentTodo from '../contentTodo/ContentTodo';
import UpdateTodo from '../updateTodo/UpdateTodo';
import { useState } from 'react';
import { toast } from 'react-toastify';

const TodoItem = ({ todo, allTodos, setTodos }) => {
  const [isEdit, setIsEdit] = useState(false);
  // console.log(todo)
  /// delete todo from API
  const handleDelete = () => {
    /*
    / send delete request using fetch  to API
    fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const filteredTodos = allTodos.filter(item => item.id !== todo.id);
        setTodos(filteredTodos);
      })
      .catch(err => console.log(err));

  */

    /// send delete request using axios  to API
    axios
      .delete(`http://localhost:3000/todos/${todo.id}`)
      .then(() => {
        const filteredTodos = allTodos.filter(item => item.id !== todo.id);
        setTodos(filteredTodos);
        toast.info('Todo deleted');
      })
      .catch(err => toast.error('Deletion failed'));
  };

  /// uptade todo from API
  const handleUpdate = e => {
    e.preventDefault();
    const updateStatus = e.target[0].value;
    const updateTitle = e.target[1].value;

    const updateTodo = {
      title: updateTitle,
      status: updateStatus,
    };
    /*
    /// send patch request using fetch  to API
    fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateTodo),
    })
      .then(() => {

        const updated = { ...todo, ...updateTodo };
        
      const newUpdatedTodo = allTodos.map(item => item.id === updated.id ? updated : item);
      setTodos(newUpdatedTodo);
         
      })
      .catch(err => console.log(err));
*/
    /// send patch request using axios  to API
    axios
      .patch(`http://localhost:3000/todos/${todo.id}`, updateTodo)
      .then(() => {
        const updated = { ...todo, ...updateTodo };

        const newUpdatedTodo = allTodos.map(item =>
          item.id === updated.id ? updated : item
        );
        setTodos(newUpdatedTodo);
      })
      .catch(err => toast.error('Update failed'));

    setIsEdit(false);
    toast.success('Todo updated');
  };

  return (
    <li className="d-grid list-flex list-unstyled px-2 py-4 border mb-4 rounded gap-2">
      {isEdit ? (
        <UpdateTodo
          todo={todo}
          setIsEdit={setIsEdit}
          handleUpdate={handleUpdate}
        />
      ) : (
        <ContentTodo
          todo={todo}
          handleDelete={handleDelete}
          setIsEdit={setIsEdit}
        />
      )}

      <span className="d-flex align-items-center">{formatDate(todo.date)}</span>
    </li>
  );
};

export default TodoItem;
