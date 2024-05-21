import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Add() {
  // <img src={x.img} alt="" />
  //   <h3>{x.name}</h3>
  //   <p>{x.desc}</p>
  //   <h4>${x.price}</h4>
  return (
    <div>
        

        <HelmetProvider>
    
      <Helmet>
        <title>Add</title>
        
      </Helmet>
     
   
  </HelmetProvider>

  <Formik
       initialValues={{ img: '', name: '', desc: '',price:'' }}
       validationSchema={Yup.object({
        img: Yup.string()
          
           .required('Required'),
           name: Yup.string()
           .required('Required'),
           desc: Yup.string()
           .required('Required'),
           price: Yup.string()
           .required('Required'),
       })}
       onSubmit={(values) => {
        fetch("http://localhost:3000/product",{
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
       }}
     >
       <Form>
         <label htmlFor="img">img</label>
         <Field name="img" type="url" />
         <ErrorMessage name="img" />

         <label htmlFor="name">name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="lastName"> desc</label>
         <Field name="desc" type="text" />
         <ErrorMessage name="desc" />
 
         <label htmlFor="price"> price</label>
         <Field name="price" type="number" />
         <ErrorMessage name="price" />
 
         <button type="submit">Add</button>
       </Form>
     </Formik>
    </div>
  )
}

export default Add