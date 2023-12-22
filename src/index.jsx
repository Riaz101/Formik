// import { useState } from 'react'
// import { Field, Form, Formik } from "formik";


// const App = () => {
//   return (
//     <>
//       <div className="container text-center	py-20	">
//         <Formik
//           initialValues={{
//             firstName: "",
//             lastName: "",
//             className: "",
//             collegeName: "",
//             contactNumber: "",
//             email: "",
//             gender: "",
//             address: "",
//           }}
//           onSubmit={(values) => {
//             alert(JSON.stringify(values, null, 2));
//             // console.log(values);
//           }}
//         >
//           <Form>
//             <h1 className='font-extrabold	'>Registration Form</h1>
//             <div className="row">
//               {/* First Name */}
//               <div className="field-div col-lg-6 col-md-6 col-sm-12 border-solid	">
//                 <Field
//                   className="input"
//                   type="text"
//                   placeholder="First Name"
//                   name="firstName"
//                 />
//               </div>
//               {/* Last Name */}
//               <div className="field-div col-lg-6 col-md-6 col-sm-12 border-solid	">
//                 <Field
//                   className="input"
//                   type="text"
//                   placeholder="Last Name"
//                   name="lastName"
//                 />
//               </div>
//             </div>

//             <div className="row">
//               {/* Class Name */}
//               <div className="field-div col-lg-6 col-md-6 col-sm-12 border-solid	">
//                 <Field
//                   className="input"
//                   type="text"
//                   placeholder="Class Name"
//                   name="className"
//                 />
//               </div>
//               {/* College Name */}
//               <div className="field-div col-lg-6 col-md-6 col-sm-12 border-solid	">
//                 <Field
//                   className="input"
//                   type="text"
//                   placeholder="College Name"
//                   name="collegeName"
//                 />
//               </div>
//             </div>

//             <div className="row">
//               {/* Contact Number */}
//               <div className="field-div col-lg-6 col-md-6 col-sm-12">
//                 <Field
//                   className="input"
//                   type="number"
//                   name="contactNumber"
//                   placeholder="Contact Number"
//                 />
//               </div>
//               {/* Email */}
//               <div className="field-div col-lg-6 col-md-6 col-sm-12">
//                 <Field
//                   className="input"
//                   type="email"
//                   placeholder="E-mail"
//                   name="email"
//                 />
//               </div>
//             </div>

//             <div className="row row2">
//               {/* Gender */}
//               <div className="gender col-lg-6 col-md-6 col-sm-12">
//                 <div className="label-field">
//                   <label>
//                     Male
//                     <Field className="input" value="Male" type="radio" name="gender" />
//                   </label>
//                   <label>
//                     Female
//                     <Field className="input" value="Female" type="radio" name="gender" />
//                   </label>
//                 </div>
//               </div>
//               {/* City Name (Address) */}
//               <div className="col-lg-6 col-md-6 col-sm-12">
//                 <Field className="field-select" name="address" as="select">
//                   <option disabled>City Name</option>
//                   <option>Lahore</option>
//                   <option>Multan</option>
//                   <option>Bahawalpur</option>
//                   <option>Islamabad</option>
//                 </Field>
//               </div>
//             </div>

//             <div className="button-div">
//               {/* Submit Button */}
//               <button className="button">Submit</button>
//             </div>
//           </Form>
//         </Formik>
//       </div>
//     </>
//   );
// };

// export default App;