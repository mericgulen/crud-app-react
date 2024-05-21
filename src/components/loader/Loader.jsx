const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center  gap-4">
      <div
        className="spinner-border"
        style={{ width: '3rem', height: '3rem' }}
        role="status"
      ></div>
      <div
        className="spinner-grow"
        style={{ width: '2rem', height: '2rem' }}
        role="status"
      ></div>
    </div>
  );
};

export default Loader;
