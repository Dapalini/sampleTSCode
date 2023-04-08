import * as React from 'react';
import InputFormik from './inputFormik';
import TextArea from './textArea';

const FormikControl = (props: any) => {
  const {control, ...rest} = props
  switch(control) {
    case "input": 
      return <InputFormik {...rest}/>
    case "textarea":
      return <TextArea {...rest}></TextArea>
    case "select":
    case "radio":
    case "checkBox":
    case "date":
    default: return null
  }
  
}
 
export default FormikControl;
