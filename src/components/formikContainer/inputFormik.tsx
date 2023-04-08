import * as React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from "./textError"

const InputFormik = (props: any) => {
  const {label, name, ...rest} = props
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name}></Field>
      <ErrorMessage name={name} component={TextError}></ErrorMessage>
    </>
   );
}
 
export default InputFormik;