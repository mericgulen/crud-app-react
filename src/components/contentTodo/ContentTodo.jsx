
 const ContentTodo = ({ todo, handleDelete, setIsEdit }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex gap-3">
        <span className="text-start" style={{width: '120px'}}>
          {todo.status}
        </span>
        <span className="flex-1 text-start  ">
          {todo.title}
        </span>
      </div>
      <div className="btn-group">
        <button
          onClick={() => setIsEdit(true)}
          className="btn bg-info text-light border rounded "
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="btn bg-danger text-light rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContentTodo
