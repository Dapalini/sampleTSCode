import * as React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './textError';

const TextArea = (props: any) => {
  const {name, label, ...rest} = props
  return ( 
    <>
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest}></Field>
      <ErrorMessage name={name} component={TextError}></ErrorMessage>
    </>
   );
}
 
export default TextArea;