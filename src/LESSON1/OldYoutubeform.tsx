import * as React from 'react';
import * as Yup from "yup"
import { useFormik } from 'formik';

const YoutubeForm = () => {

  type ValuesType = {
    name: string, 
    email: string, 
    channel: string
  }

  const initialValues: ValuesType = {
      name: "",
      email: "",
      channel: "", 
    } 

  const onSubmit = (values: ValuesType) => console.log("Form Values", values) 

  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid email format").required("Required"),
    channel: Yup.string().required("Required")

  }) 

  const formik = useFormik({
    initialValues, 
    onSubmit,
    validationSchema
    // validate,
  })

  console.log("Visited field", formik.touched)

  return ( 
    <div className="d-flex justify-content-center">
      <form 
        className="form-control p-4" 
        style={{width: "400px"}} 
        onSubmit={formik.handleSubmit}>
        
        <h3 className="mt-3">Youtube Form</h3>
        
        <label 
          className="mt-3" 
          htmlFor='name'>Name</label>
        <input 
          className="form-control" 
          type="text" 
          id="name" 
          name="name"
          onBlur={formik.handleBlur} 
          onChange={formik.handleChange} 
          value={formik.values.name}>
        </input>
        {formik.errors.name && formik.touched.name
          ? <div style={{color: "#ff6666"}}>{formik.errors.name}</div> 
          : null}
        
        <label className="mt-3" htmlFor='email'>E-mail</label>
        <input className="form-control" type="text" id="email" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}></input>
        {formik.errors.email && formik.touched.email ? <div style={{color: "#ff6666"}}>{formik.errors.email}</div> : null}
        
        <label className="mt-3" htmlFor='channel'>Channel</label>
        <input className="form-control" type="text" id="channel" name="channel" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.channel}></input>
        {formik.errors.channel && formik.touched.channel ? <div style={{color: "#ff6666"}}>{formik.errors.channel}</div> : null}
        
        <button className="btn btn-primary mt-4" type="submit">Submit</button>

      </form>
    </div>
   );
}
 
export default YoutubeForm;