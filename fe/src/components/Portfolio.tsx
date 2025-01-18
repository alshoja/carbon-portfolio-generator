const PortfolioGenerator = () => (
  <div className="container">
    <h2 className="text-center mb-4 d-flex justify-content-center">
      Portfolio Generator
    </h2>
    <div className="input-group mb-3 d-flex justify-content-center">
      <input
        type="text"
        className="form-control form-control-sm custom-input"
        placeholder="Enter Requested Tons"
        style={{ maxWidth: "300px" }}
      />
      <button className="btn btn-success btn-sm">Generate Portfolio</button>
    </div>
  </div>
);

export default PortfolioGenerator;
