import React, {useState} from 'react';
import * as Yup from "yup"
import {Formik, Form, Field, ErrorMessage, FieldArray, FastField} from 'formik';
import Error from './error';

const YoutubeForm = () => {
  
  type ValuesType = {
    name: string, 
    email: string, 
    channel: string,
    comment: string,
    address: string
    social: { facebook: string, twitter: string}
    phoneNumber: string[],
    phNumbers: string[]
  }

  const initialValues: ValuesType = {
      name: "",
      email: "",
      channel: "",
      comment: "", 
      address: "",
      social: {facebook: "", twitter: ""},
      phoneNumber: ["",""],
      phNumbers: [""]
    } 
 
    const savedValues: ValuesType = {
      name: "Daniel",
      email: "daniel@gmail.com",
      channel: "Daniel today",
      comment: "Know your surroundings", 
      address: "Estaban",
      social: {facebook: "", twitter: ""},
      phoneNumber: ["",""],
      phNumbers: [""]
    } 

  const [formValues, setFormValues] = useState<null | ValuesType>(null)


  const onSubmit = (values: ValuesType, onSubmitProps: any) => {
    console.log("Form Values", values) 
    console.log("Submit props",onSubmitProps)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid email format").required("Required"),
    channel: Yup.string().required("Required")

  }) 

  const validateComment = (value: any) => {
    let error;
    if (!value) {
      error = "Required"
    }
    return error
  }

  console.log("Visited field")

  return ( 
    <div className="d-flex justify-content-center">

      
    <Formik 
      enableReinitialize
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
      // validateOnMount
      onSubmit={onSubmit}
      >
        {formik => {
          console.log("Fromik props", formik)
          return (
            <Form
            className="form-control p-4" 
            style={{width: "400px"}}>
            
            <h3 className="mt-3">Youtube Form</h3>
            
            <label 
              className="mt-3" 
              htmlFor='name'>Name</label>
            <Field 
              className="form-control" 
              type="text" 
              id="name" 
              name="name"
              >
            </Field>
            <ErrorMessage name="name" component={Error}/> 
            
            <label className="mt-3" htmlFor='email'>E-mail</label>
            <Field className="form-control" type="text" id="email" name="email"></Field>
            <ErrorMessage name="email" component={Error}/>
            
            <label className="mt-3" htmlFor='channel'>Channel</label>
            <Field className="form-control" type="text" id="channel" name="channel"></Field>

            <div style={{color: "#ff6666"}}>
              <ErrorMessage name="channel" component={Error}/>
            </div>

            <label className='mt-3' htmlFor='address'>Address</label>
            <FastField type="tesxt" className="form-control" id="address" name="address">
              {(props: any) => {
                console.log("FastField render")
                const {field, form, meta} = props
                return (
                  <div>
                    <input className="form-control" type="text" id="address" {... field} />
                    {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                  </div>
                ) 
              }}
            </FastField>

            <label className='mt-3' htmlFor='comment'>Comments</label>
            <Field as="textarea" className="form-control" id="comment" name="comment" validate={validateComment}></Field>
            <ErrorMessage name="comment" component={Error}></ErrorMessage>

            <label className='mt-3' htmlFor='facebook'>Facebook</label>
            <Field type="text" className="form-control" id="facebook" name="social.facebook"></Field>
            
            <label className='mt-3' htmlFor='twitter'>Twitter</label>
            <Field type="text" className="form-control" id="twitter" name="social.twitter"></Field>
          
            <label className='mt-3' htmlFor='primary'>Primary</label>
            <Field type="text" className="form-control" id="primary" name="phoneNumber[0]"></Field>
            
            <label className='mt-3' htmlFor='secondary'>Secondary</label>
            <Field type="text" className="form-control" id="secondary" name="phoneNumber[1]"></Field>

            <label className='mt-3' htmlFor='phNumbers'>Phone Numbers</label>
            <FieldArray name="phNumbers">
              {(fieldArrayProps)=>{
                const {push, remove, form} = fieldArrayProps
                const {values} = form
                const {phNumbers} = values
                console.log("Errors",form.errors)
                return <div>
                  {phNumbers.map((phNumber: string, index: number) => {
                    return (
                      <div className="d-flex justify-content-between mb-1" key={index}>
                        <Field type="text" className="form-control" name={`phNumbers[${index}]`}/>
                        {phNumbers.length !== 1 && 
                          <button type="button" className="btn btn-danger ms-1" onClick={() => {remove(index)}}> - </button>
                        }
                        <button type="button" className="btn btn-success ms-1" onClick={() => {push("")}}> + </button>
                      </div>
                    )
                  })}
                </div>
              }}
            </FieldArray>
            
            {/* <button className="btn btn-primary mt-4 d-block" type="button" onClick={()=>formik.setFieldTouched("comment")}>Set comment field touched</button>
            <button className="btn btn-primary mt-2 d-block" type="button" onClick={()=> formik.setTouched({
              name: true,email: true, channel: true, comment: true
            })}>Set all touched</button>
            
            <button className="btn btn-primary mt-4 d-block" type="button" onClick={()=>formik.validateField("comment")}>Validate comments</button>
            <button className="btn btn-primary mt-2 d-block" type="button" onClick={()=> formik.validateForm()}>Validate all</button> */}
            
            <button className="btn btn-primary mt-2 d-block" type="button" onClick={() => setFormValues(savedValues)}>Load saved data</button>
            <button className="btn btn-primary mt-2 d-block" type="reset">Reset</button>
            <button className="btn btn-primary mt-2 d-block" type="submit" disabled={!formik.isValid || formik.isSubmitting} >Submit</button>

          </Form>
          )
        }

        }
    </Formik>
    </div>
   );
}
 
export default YoutubeForm;