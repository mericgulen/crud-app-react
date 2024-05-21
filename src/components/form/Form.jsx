// import axios from 'axios';
import axios from 'axios';
import { v4 as generatedId } from 'uuid';
import FormItems from '../formItems/FormItems';
import { toast } from 'react-toastify';

const Form = ({ setTodos }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const newTitle = e.target[0].value;
    const newStatus = e.target[1].value;
    //- console.log(todoInput, todoSelect);

    /// Preparing json data for API
    const newTodo = {
      id: generatedId(),
      title: newTitle,
      status: newStatus,
      date: new Date().toLocaleDateString(),
    };
    /*
    //- sending data to the API  using fetch
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
    })
      .then(() => setTodos((prev) => [...prev, newTodo]))
      .catch(err => console.log(err));
  };
  */

    /// sending data to the API using axios
    axios
      .post('http://localhost:3000/todos', newTodo)
      .then(() => {
        setTodos(prev => [...prev, newTodo]);
        toast.success('Successfully added');
      })
      .catch(err => toast.error('Sorry, an error occurred'));

    e.target[0].value = '';
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-end gap-3 my-5"
    >
      <FormItems />

      <button type="submit" className="btn bg--color text-light  border fs-4  ">
        Create
      </button>
    </form>
  );
};

export default Form;
