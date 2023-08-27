import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { signInThunk } from "../../store/thunks/auth.thunk";
import { Alert } from "antd";

const Signin = () => {
  const {
    user,
    _signIn: { isLoading, isError, errorMessage },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const resp = await dispatch(signInThunk(data));
    if (resp?.payload) history.push("/");
  };

  useEffect(() => {
    if (!isLoading && user) {
      history.push("/");
    }
  }, [user]);

  return (
    <>
      <div className="authincation section-padding">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-xl-5 col-md-6">
              <div className="mini-logo text-center my-4">
                <Link to={"/intro"}>
                  <img
                    src={"https://i.ibb.co/0sMXWD1/android-chrome-192x192.png"}
                    alt="logo-image"
                    width="60"
                  />
                </Link>
                <h4 className="card-title mt-3">Sign in to SteamX</h4>
              </div>
              <div className="auth-form card">
                <div className="card-body">
                  {isError && (
                    <div className="my-3">
                      <Alert
                        message={errorMessage}
                        type="error"
                        showIcon
                        closable
                      />
                    </div>
                  )}
                  <form
                    name="myform"
                    className="signin_validate row g-3"
                    // action="otp-2"
                    onSubmit={onSubmitHandler}
                  >
                    <div className="col-12">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="hello@example.com"
                        name="email"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                      />
                    </div>
                    <div className="col-6">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexSwitchCheckDefault"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-6 text-right">
                      <Link to={"/reset"}>Forgot Password?</Link>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="privacy-link">
                {/* <Link to={"/signup"}>
                  Have an issue with 2-factor authentication?
                </Link> */}
                <br />
                <Link to={"#"}>Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
