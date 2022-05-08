import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import c from "./login.module.css";
import { required } from "./../../utilities/validators/index";
import { createField } from "./../common/FormsControls/FormsControls";
import { login } from "./../redux/auth-reducer";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={c.email}>
        {createField("email", "email", [required], Input)}
      </div>

      <div className={c.password}>
        {createField("password", "password", [required], Input, {
          type: "password",
        })}
      </div>

      <div className={c.checkbox}>
        {createField(
          null,
          "rememberMe",
          [],
          Input,
          { type: "checkbox" },
          <p>remember me</p>
        )}
      </div>

      {captchaUrl && <img src={captchaUrl} alt="captcha" />}
      {captchaUrl && createField("symbols", "captcha", [required], Input, {})}

      {error && <div className={c.errorMessage}>{error}</div>}
      <div className={c.button_wrapper}>
        <button className={c.button}>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div className={c.wrapper}>
      <h1 className={c.title}>Login page</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
