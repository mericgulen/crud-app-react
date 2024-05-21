import FormItems from '../formItems/FormItems';

const UpdateTodo = ({ todo, setIsEdit, handleUpdate }) => {
  return (
    <form
      onSubmit={handleUpdate}
      className="d-flex justify-content-between align-items-center gap-2"
    >
      <select
        defaultValue={todo.status}
        className="form-select w-50"
        style={{ width: '250px' }}
      >
        <option value="important">Important</option>
        <option value="daily">Daily</option>
        <option value="job">Job</option>
      </select>
      <input
        defaultValue={todo.title}
        className="form-control w-100 shadow "
        type="text"
        placeholder=""
      />

      <div className="btn-group">
        <button
          type="submit"
          className="btn btn-sm bg-success text-light border rounded "
        >
          Confirm
        </button>
        <button
          onClick={() => setIsEdit(false)}
          type="button"
          className="btn btn-sm  bg-danger text-light rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UpdateTodo;
