import Button from "./Button";
import TextInput from "./TextInput";

const PortfolioGenerator = () => (
  <div className="container">
    <h2 className="text-center mb-4 d-flex justify-content-center">
      Portfolio Generator
    </h2>
    <div className="input-group mb-3 d-flex justify-content-center">
      <TextInput
        maxWidth="300px"
        placeholder="Enter your Credits"
        type="text"
        className="form-control form-control-sm custom-input"
      />
      <Button
        placeholder="Generate Portfolio"
        maxWidth="300px"
        type="button"
        className="btn-success"
      />
    </div>
  </div>
);

export default PortfolioGenerator;
