import React from 'react'
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import { AlertType } from '../context/AlerctContext';
import * as Yup from 'yup';
import { useAlertContext } from '../context/AlerctContext';


 const SignupSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Name is too Short!')
     .max(50, 'Too Long!')
     .required('This field is required!'),
    message: Yup.string()
     .min(2, 'Your message is too short!')
     .max(140, 'Too Long!')
     .required('This field is required!'),
    email: Yup.string()
      .email('Invalid email')
      .required('This field is required!'),
    enquiry: Yup
    .string()
    .oneOf(["freelance", "open source", "other"])
    .required("This field is required!"),
 })

function ContactForm() {
  const { isOpen, onOpen } = useAlertContext() as AlertType

  return (
    <Formik
      initialValues={{
         name: '',
         message: '',
         email: '',
         enquiry : 'freelance'
       }}
       validationSchema={SignupSchema}
       onSubmit={(values) => {
          onOpen('All good!', `Thanks for your submission ${values.name}, we will get back to you shortly!`)
        //  console.log( "values" , values);
        console.log(isOpen);
       }}>

      <Form className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <label 
              htmlFor="">
                Name
            </label> 
            <Field 
              placeholder='Name' 
              className='p-4 border border-slate-300 rounded-lg' 
              name="name" />
              <div className='text-right text-sm text-red-700' >
                <ErrorMessage name="name" />
              </div>
          </div>
          <div 
            className='flex flex-col gap-2'>
            <label 
              htmlFor="">
                Email
              </label> 
            <Field 
              placeholder='E-mail' 
              className='p-4 border border-slate-300 rounded-lg' 
              name="email" />
              <div className='text-right text-sm text-red-700' >
                <ErrorMessage name="email" />
              </div>
          </div>
          <div 
            className='flex flex-col gap-2'>
            <label 
              htmlFor="">Type of enquiry
            </label> 
            <Field 
              placeholder='Name' 
              component="select"
              className='p-4 border border-slate-300 rounded-lg bg-white' 
              name="enquiry">
              <option 
                value="freelance">Freelance project proposal</option>
              <option 
                value="open-source">Open source consultancy session</option>
              <option 
                value="other">Other</option>
            </Field>
          </div>
          <div 
            className='flex flex-col gap-2'>
            <label htmlFor="">Message</label> 
            <Field as="textarea" placeholder='White down your message' className='p-4 border border-slate-300 rounded-lg ' name="message" />
               <div className='text-right text-sm text-red-700' >
                <ErrorMessage name="message" />
              </div>
          </div>
          <button type="submit" className='p-4 bg-slate-900 rounded-lg text-white flex flex-row items-center justify-center'>Submit</button>
        </Form> 
    </Formik>
    
  )
}

export default ContactForm