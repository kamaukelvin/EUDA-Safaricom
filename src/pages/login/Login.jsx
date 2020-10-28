import React from "react";
import logo from "../../assets/img/logo-saf.png";
import bg from "../../assets/img/cover.jpg";
import { Formik, ErrorMessage, Form } from "formik";
import Alert  from "../../components/alerts/WarningAlert";
import Footer from "../../components/footer/Footer";
import * as Yup from "yup";

const Login = ({ onChange, login, state, showAlert }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={state}
      validationSchema={Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      })}
      onSubmit={() => login()}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="content content-fixed content-auth">
            <div className="row">
                   <div className="col-md-7 d-none d-lg-flex"
                     style={{
                      backgroundImage: `url(${bg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "top center",
                      height: "92vh",
                    }}
                   >
                  </div>
                {/* media-body */}
                <div className="col-md-5">
                <div className="sign-wrapper mg-lg-x-100 mg-t-100 mg-xl-x-100">
                  <div className="wd-100p">
                    <div className="">
                      <img src={logo} className="img-logo" alt="" />
                    </div>
                    <h3 className="tx-color-01 mg-t-15 mg-b-5">Sign In</h3>
                    <p className="tx-color-03 tx-16 mg-b-40">
                      Welcome back! Please signin to continue.
                    </p>
                    {showAlert && <Alert message="Error" description="testing my warning alert" />}
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        name="username"
                        value={state.username}
                        onChange={onChange}
                        className={
                          "form-control" +
                          (errors.username && touched.username
                            ? " is-invalid"
                            : "")
                        }
                        placeholder="Enter your username"
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <div className="d-flex justify-content-between mg-b-5">
                        <label className="mg-b-0-f">Password</label>
                        <a href className="tx-13">
                          Forgot password?
                        </a>
                      </div>
                      <input
                        type="password"
                        name="password"
                        value={state.password}
                        onChange={onChange}
                        className={
                          "form-control" +
                          (errors.password && touched.password
                            ? " is-invalid"
                            : "")
                        }
                        placeholder="Enter your password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <button 
                    className="btn btn-brand-02 btn-block"
                    type="submit"
                    disabled={state.loading}
                    
                    >
                        
                    {state.loading && (
                      <span className="text-capitalize">Sign In</span>
                    )}
                    {state.loading && (
                      <i
                        className="fa fa-circle-notch fa-spin"
                        style={{ marginRight: "5px" }}
                      />
                    )}
                    {!state.loading && (
                      <span className="text-capitalize"> Sign In</span>
                    )}
                    </button>
                  </div>
                </div>
                {/* sign-wrapper */}
              </div>
              {/* media */}
            </div>
            </div>
            {/* container */}
         
          {/* content */}
          <Footer />
        </Form>
      )}
    </Formik>
  );
};

export default Login;
