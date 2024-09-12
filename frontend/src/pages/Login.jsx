const Login = () => {
  return (
    
      <div className="wrapper">
        <section className="login-content">
          <div className="container h-100">
            <div className="row justify-content-center align-items-center height-self-center">
              <div className="col-md-5 col-sm-12 col-12 align-self-center">
                <div className="sign-user_card">
                  <div className="logo-detail">
                    <div className="d-flex align-items-center">
                      <img
                        src="../assets/images/logo.png"
                        className="img-fluid rounded-normal light-logo logo"
                        alt="logo"
                      />
                      <h4 className="logo-title ml-3">NotePlus</h4>
                    </div>
                  </div>
                  <h3 className="mb-2">Sign Up</h3>
                  <p>Create your account.</p>
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="floating-label form-group">
                          <input
                            className="floating-input form-control"
                            type="text"
                            placeholder=""
                          />
                          <label>Full Name</label>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="floating-label form-group">
                          <input
                            className="floating-input form-control"
                            type="text"
                            placeholder=""
                          />
                          <label>Last Name</label>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="floating-label form-group">
                          <input
                            className="floating-input form-control"
                            type="email"
                            placeholder=""
                          />
                          <label>Email</label>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="floating-label form-group">
                          <input
                            className="floating-input form-control"
                            type="password"
                            placeholder=""
                          />
                          <label>Password</label>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="floating-label form-group">
                          <input
                            className="floating-input form-control"
                            type="password"
                            placeholder=""
                          />
                          <label>Confirm Password</label>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="custom-control custom-checkbox mb-3 text-left">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            I agree with the terms of use
                          </label>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Sign Up
                    </button>
                    <p className="mt-3 mb-0">
                      Already have an Account{" "}
                      <a href="auth-sign-in.html" className="text-primary">
                        <b>Sign In</b>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>    
  );
};
export default Login;
