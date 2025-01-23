import Button from "../forms/Button";
import TextInput from "../forms/TextInput";

const Footer = () => (
  <footer>
    <div className="container text-center text-md-start">
      <div className="mb-4 text-center">
        <img
          src="https://i.ibb.co/znMjYkJ/Pngtree-environmental-protection-natural-environment-logo-9203785.png"
          alt="Logo"
          className="img-fluid"
          style={{ maxWidth: "100px" }}
        />

        <p className="mt-2">Subscribe to our newsletter</p>
        <div className="input-group mb-3 d-flex justify-content-center">
          <TextInput
            maxWidth="300px"
            placeholder="Enter your email"
            type="email"
            className="form-control form-control-sm custom-input"
          />
          <Button
            placeholder="Subscribe"
            maxWidth="300px"
            type="button"
            className="btn-success"
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-3">
          <h6>Product</h6>
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h6>Resources</h6>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">User guides</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h6>Company</h6>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h6>Carbon Emission Credits</h6>
          <ul>
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">Buy Credits</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="social-icons mt-4 text-center">
        <a href="#">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="#">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="#">
          <i className="bi bi-youtube"></i>
        </a>
      </div>
      <p className="mt-3 mb-0 text-center">&copy; 2025 All rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
