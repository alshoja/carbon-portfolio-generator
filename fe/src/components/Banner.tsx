import InputGroup from "./forms/InputGroup";

const Banner = () => {
  return (
    <>
      <div className="container banner">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-5 offset-xl-1 ">
            <h1 className="h1 text-secondary">Check Your Carbon Credit</h1>
            <p className="text-secondary">
              Explore a variety of carbon credit projects and select the one
              that best suits your needs. Track and manage your portfolio with
              ease to make a positive impact on the environment.
            </p>
            <div className="input-group mb-3 d-flex justify-content-start">
              <InputGroup />
            </div>
          </div>
          <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
            <div className="logos">
              <img
                src="https://i.ibb.co/znMjYkJ/Pngtree-environmental-protection-natural-environment-logo-9203785.png"
                className="device"
              />
              <div className="screen"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
