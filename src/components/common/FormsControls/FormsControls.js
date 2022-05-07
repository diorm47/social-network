import React from "react";
import c from "./FormsControls.module.css";
import { Field } from "redux-form";

const FormControls = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div className={c.formControl + " " + (hasError ? c.error : " ")}>
      <div>{children}</div>
      {hasError && <span className={c.error}>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControls {...props}>
      <textarea {...input} {...restProps} />
    </FormControls>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControls {...props}>
      <input {...input} {...restProps} />
    </FormControls>
  );
};

export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ""
) => (
  <div>
    <Field
      placeholder={placeholder}
      validate={validators}
      name={name}
      component={component}
      {...props}
    />{" "}
    {text}
  </div>
);
