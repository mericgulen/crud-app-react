 
const FormItems = () => {
  return (
    <div className="d-flex justify-content-between align-items-center gap-3 w-100">
      <input
        className="form-control w-100 shadow "
        type="text"
        placeholder=""
      />
      <select className="form-select w-50" style={{ width: '250px' }}>
        <option value="important">Important</option>
        <option value="daily">Daily</option>
        <option value="job">Job</option>
      </select>
    </div>
  );
};

export default FormItems
