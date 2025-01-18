import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <div className="header-blue">
      <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            CEEZER
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navcol-1"
            aria-controls="navcol-1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                {/* <NavLink className="nav-link active" to="/">
                  Home
                </NavLink> */}
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <a href="#" className="nav-link login me-3">
                Log In
              </a>
              <a className="btn btn-light action-button" role="button" href="#">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
);

export default Header;
