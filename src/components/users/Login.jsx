import React, { useState, useEffect } from "react";
import Loader from "../layouts/Loader";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { clearErrors, login } from "../../actions/userAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, navigate]);

  const submitHandler = (e) => {
    dispatch(login(email, password));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="row wrapper">
            <div className="col-10 col-lg-5">
              <form className="shadow-lg" onSubmit={submitHandler}>
                <h1 className="mb-3">Login</h1>
                <div className="form-group">
                  <label htmlFor="email_field">Email</label>
                  <input
                    type="email"
                    id="email_field"
                    className="form-control"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="password_field">
                    Password <span>( not less than 8 character)</span>
                  </label>
                  <input
                    type="password"
                    id="password_field"
                    className="form-control"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <Link to="/users/forgotPassword" className="float-right mb-4">Forgot Password</Link>
                <button
                  id="login_button"
                  type="submit"
                  className="btn btn-block py3"
                >
                  LOGIN
                </button>
                <Link to="/users/signup" className="float-right mt-3">NEW USER?</Link>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
