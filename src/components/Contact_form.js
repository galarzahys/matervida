import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import AlertForm from "./AlertForm";
import Success from "./SuccessAlert";
import * as Yup from 'yup';
import EmailSender from './EmailSender'


const ContactForm = () => {

  const [alert, setAlert] = useState(false)
  const [confirmation, setConfirmation] = useState(false)

  const phoneYup = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


  const validationSchema = Yup.object({
    name: Yup.string()
    .min(2, 'Muito curto!')
    .max(50, 'Muito longo!')
    .required('Requerido'),

    phone: Yup.string().matches(phoneYup, 'Nao é um numero valido'),

    email: Yup.string()
    .email('Nao e um e-mail valido')
    .required('Requerido'),
    
    message: Yup.string()
    .required('Requerido')
    .min(2, 'A mensagem é muito breve, nos conta mais por favor!'),


})

  return (
    <>
      <Formik initialValues= {{
        name:'',
        email:'',
        phone: '',
        message:''
      }}
        

        validationSchema={validationSchema}

        onSubmit={async (values, { setSubmitting, resetForm }) => {
          
          try {
            resetForm();
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
            EmailSender(values);
            setConfirmation(true)
            setTimeout(() =>{
              setConfirmation(false)
            }, 5000)
          } catch (error) {
              setAlert(true);
              console.log(error)
            }
            setTimeout(() =>{
              setAlert(false)
            }, 5000)
        }
    
        }
      
      >
       
        {({
          values,
          errors,
          touched,
          isSubmitting,
        }) => (

          <Form className="form">
               <Field 
               className = "input"
               name="name"
               type="name"
               placeholder="Escreva seu nome"
                /> 
              {errors.name && touched.name ? (
             <AlertForm error={errors.name}/>
             ) : null}

              <Field 
               className = "input"
               name="phone"
               type="text"
               placeholder="Telofone de contato (opcional)"
                /> 
              {errors.phone && touched.phone ? (
             <AlertForm error={errors.phone}/>
             ) : null}

               <Field 
               className = "input"
               name="email"
               type="email"
               placeholder="E-mail de contato"
                /> 
              {errors.email && touched.email ? (
             <AlertForm error={errors.email}/>
             ) : null}

               <Field 
               className = "textarea"
               name="message"
               as="textarea"
               placeholder="Mensagem"
                /> 
              {errors.message && touched.message ? (
             <AlertForm error={errors.message}/>
             ) : null}

          <button type="submit" disabled={isSubmitting} className="submit">
             Enviar
          </button>

          <div>
                {alert && <AlertForm error={"Sending failed"}/>}
                {confirmation && <Success prop={"Envio completo!"}/>}
          </div>

         </Form>
       )}
     </Formik>
   </>
 )};
      
export default ContactForm;