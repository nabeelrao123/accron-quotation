// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useRef, useState } from "react";
// import * as Yup from "yup";

// const Invoiceform = () => {
//   const initialCount = useRef(1)
//   // const [obj, setObj] = useState([{
//   //   [`no${initialCount.current}`]: 1,
//   //   [`desc${initialCount.current}`]: "",
//   //   [`quant${initialCount.current}`]: "",
//   //   [`amount${initialCount.current}`]: "",
//   // },

//   const [obj, setObj] = useState([{
//     // no: 10,
//     desc: "",
//     quant: "",
//     amount: "",
//   },
//   ])


//   let initialValues = {
//     customername: "",
//     address: "",
//     ordervalidity: "",
//     personconsented: "",
//     items: obj
//   };

//   console.log(initialValues)

//   // const [count, setCount] = useState(1)

//   const arr = Array.from({ length: initialCount.current * 4 });
//   // console.log(arr);
//   const addFeild = () => {
//     // alert('dfgbh')
//     // initialCount.current += 1;
//     // console.log('nabeel', obj[0].`no${initialCount.current}`)

//     // setObj([...obj, {
//     //   [`no${initialCount.current}`]: initialCount.current,
//     //   [`desc${initialCount.current}`]: "",
//     //   [`quant${initialCount.current}`]: "",
//     //   [`amount${initialCount.current}`]: "",
//     // }])

//     console.log(obj.length + 1)
//     setObj([...initialValues.items, {
//       // no: obj.length + 1,
//       desc: "",
//       quant: "",
//       amount: "",
//     }])

//   }

//   let abc=obj

//   console.log('nabeel',abc)
//   console.log('nabeel', obj)

//   const validationSchema = Yup.object({

//     items: Yup.array().of(
//       Yup.object({

//         desc: Yup.string().required("Description is required"),
//         quant: Yup.number()
//           // .typeError("Quantity must be a number")
//           // .positive("Must be greater than 0")
//           .required("Quantity is required"),
//         amount: Yup.number()
//           // .typeError("Amount must be a number")
//           // .positive("Must be greater than 0")
//           .required("Amount is required"),
//       })
//     ),




//     customername: Yup.string()
//       .min(3, "Minimum 3 characters")
//       .required("Customer name is required"),
//     address: Yup.string()
//       .min(3, "Minimum 3 characters")
//       .required("Email is required"),
//     ordervalidity: Yup.string()
//       .min(3, "Minimum 3 characters")
//       .required("Email is required"),
//     personconsented: Yup.string()
//       .min(3, "Minimum 3 characters")
//       .required("Name is required"),

//   });

//   const onSubmit = (values, { resetForm }) => {
//     console.log('values', values);
//     resetForm();
//   };




//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
//           Contact Us
//         </h2>

//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={onSubmit}
//         >
//           {({ isSubmitting }) => (
//             <Form className="space-y-6">

//               {/* Name & Email */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//                 {/* Name */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Customer Name
//                   </label>
//                   <Field
//                     name="customername"
//                     type="text"
//                     placeholder="Enter customer name"
//                     className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <ErrorMessage
//                     name="customername"
//                     component="p"
//                     className="text-red-500 text-sm mt-1"
//                   />
//                 </div>


//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Address
//                   </label>
//                   {/* <div>
//                     <p><span className="font-semibold">   lot no. C32, S.I.T.E karachi.</span></p>
//                   </div> */}
//                   <Field
//                     name="address"
//                     type="text"
//                     placeholder="Enter address"
//                     className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <ErrorMessage
//                     name="address"
//                     component="p"
//                     className="text-red-500 text-sm mt-1"
//                   />
//                 </div>
//               </div>


//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Order Validity
//                   </label>
//                   <Field
//                     name="ordervalidity"
//                     type="text"
//                     placeholder="Enter order validity"
//                     className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <ErrorMessage
//                     name="ordervalidity"
//                     component="p"
//                     className="text-red-500 text-sm mt-1"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Person Consented
//                   </label>
//                   <Field
//                     name="personconsented"
//                     type="text"
//                     placeholder="Enter person consented"
//                     className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <ErrorMessage
//                     name="personconsented"
//                     component="p"
//                     className="text-red-500 text-sm mt-1"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <div className="space-y-4">
//                   <div className="flex justify-between items-center" >
//                     <p className="text-sm font-medium text-gray-700" >   Description</p>
//                     <div >
//                       <button
//                         type="button"
//                         onClick={() => addFeild()}
//                         className="w-full bg-blue-600 text-white py-3 px-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50"
//                       >
//                         Add Feild
//                       </button>

//                     </div>
//                   </div>
//                   <div className="border p-3 sm:p-4 rounded-md">

//                     {/* <div className=${`grid grid-cols-5 grid-rows-${count} gap-4`}`> */}
//                     <div className={`grid grid-cols-4 gap-4 grid-rows-${obj.length}`}>
//                       {initialValues.items.map((item, index) => (
//                         <>


//                           <div className="flex flex-col space-y-2" >
//                             <Field
//                               name={`items.${index}.desc`}
//                               placeholder="Description"
//                               className="border p-2 rounded"
//                             />
//                             <ErrorMessage
//                               name={`items.${index}.desc`}
//                               component="div"
//                               className="text-red-500 text-sm"
//                             />
//                           </div>

//                           <div className="flex flex-col space-y-2" >


//                             <Field
//                               name={`items.${index}.quant`}
//                               placeholder="Quantity"
//                               className="border p-2 rounded"
//                             />
//                             <ErrorMessage
//                               name={`items.${index}.quant`}
//                               component="div"
//                               className="text-red-500 text-sm"
//                             />
//                           </div>

//                           <div className="flex flex-col space-y-2" >
//                             <Field
//                               name={`items.${index}.amount`}
//                               placeholder="amount"
//                               className="border p-2 rounded"
//                             />
//                             <ErrorMessage
//                               name={`items.${index}.amount`}
//                               component="div"
//                               className="text-red-500 text-sm"
//                             />

//                           </div>

//                       <button
//                         type="button"
//                         // onClick={() => addFeild()}
//                         className="w-full bg-red-600 text-white h-[50px] py-3 px-3 rounded-lg font-medium hover:bg-red-700 transition disabled:opacity-50"
//                       >
//                         del
//                       </button>

















//                           {/* <input
//                             defaultValue={item.no}
//                             type="text"
//                             placeholder="Enter your name"
//                             className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

//                           /> */}

//                           {/* <input
//                             onChange={(e) => {
//                               let objw={
//                                 ...item,
//                                 desc:e.target.value
//                               }
//                              obj[index]=objw
//                              console.log('kkkookk',obj)

//                            setObj([...obj])
//                              }}
//                             values={item.desc}
//                             type="text"
//                             placeholder="Enter your name"
//                             className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

//                           /> */}

//                           {/* <Field
//                             name="personconsentemdsd"
//                             type="text"
//                             placeholder="Enter person consented"
//                             className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           />
//                           <ErrorMessage
//                             name="personconsenjted"
//                             component="p"
//                             className="text-red-500 text-sm mt-1"
//                           /> */}


//                         </>
//                       ))}
//                     </div>










//                   </div>

//                   {/* <div className="border p-3 sm:p-4 rounded-md">
//                             <div className="flex justify-between items-center text-sm">
//                                 <span className="font-semibold">02 Labour Charges</span>
//                                 <span className="font-semibold">PKR 140,000</span>
//                             </div>
//                         </div> */}

//                 </div>


//                 {/* <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Message
//                 </label>
//                 <Field
//                   as="textarea"
//                   name="message"
//                   rows="5"
//                   placeholder="Write your message..."
//                   className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <ErrorMessage
//                   name="message"
//                   component="p"
//                   className="text-red-500 text-sm mt-1"
//                 /> */}
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50"
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default Invoiceform;










import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Invoice from "./Invoice";

const InvoiceForm = () => {
  const initialValues = {
    customername: "",
    address: "",
    ordervalidity: "",
    personconsented: "",
    items: [
      {
        desc: "",
        quant: "",
        amount: "",
      },
    ],
  };


  const [preView, setPreView] = useState({
    state:false,
    initialValues
  })
  const validationSchema = Yup.object({
    customername: Yup.string()
      .min(3, "Minimum 3 characters")
      .required("Customer name is required"),
    address: Yup.string()
      .min(3, "Minimum 3 characters")
      .required("Address is required"),
    ordervalidity: Yup.string()
      .min(3, "Minimum 3 characters")
      .required("Order validity is required"),
    personconsented: Yup.string()
      .min(3, "Minimum 3 characters")
      .required("Person consented is required"),
    items: Yup.array().of(
      Yup.object({
        desc: Yup.string().required("Description is required"),
        quant: Yup.number()
          .typeError("Quantity must be a number")
          .required("Quantity is required"),
        amount: Yup.number()
          .typeError("Amount must be a number")
          .required("Amount is required"),
      })
    ),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("values", values);

    
    setPreView({
      state:true,
      initialValues:values
    })

    // resetForm();

  };

  return (

    <>
      {preView.state == true ? <><Invoice formValues={preView.initialValues}  /></> : <>

        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
          <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Invoice Form
            </h2>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ values }) => (
                <Form className="space-y-6">
                  {/* Customer Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Customer Name
                      </label>
                      <Field
                        name="customername"
                        type="text"
                        placeholder="Enter customer name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ErrorMessage
                        name="customername"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <Field
                        name="address"
                        type="text"
                        placeholder="Enter address"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ErrorMessage
                        name="address"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  {/* Order Validity & Person Consented */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Order Validity
                      </label>
                      <Field
                        name="ordervalidity"
                        type="text"
                        placeholder="Enter order validity"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ErrorMessage
                        name="ordervalidity"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Person Consented
                      </label>
                      <Field
                        name="personconsented"
                        type="text"
                        placeholder="Enter person consented"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ErrorMessage
                        name="personconsented"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  {/* Items */}
                  <FieldArray name="items">
                    {({ push, remove }) => (
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <p className="text-sm font-medium text-gray-700">
                            Items
                          </p>
                          <button
                            type="button"
                            onClick={() =>
                              push({ desc: "", quant: "", amount: "" })
                            }
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                          >
                            Add Field
                          </button>
                        </div>

                        {values.items.map((item, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-4 gap-4 border p-3 rounded-md"
                          >
                            <div>
                              <Field
                                name={`items.${index}.desc`}
                                placeholder="Description"
                                className="border p-2 rounded w-full"
                              />
                              <ErrorMessage
                                name={`items.${index}.desc`}
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </div>

                            <div>
                              <Field
                                name={`items.${index}.quant`}
                                placeholder="Quantity"
                                className="border p-2 rounded w-full"
                              />
                              <ErrorMessage
                                name={`items.${index}.quant`}
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </div>

                            <div>
                              <Field
                                name={`items.${index}.amount`}
                                placeholder="Amount"
                                className="border p-2 rounded w-full"
                              />
                              <ErrorMessage
                                name={`items.${index}.amount`}
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </div>

                            <div className="flex items-center">
                              <button
                                type="button"
                                onClick={() => remove(index)}
                                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </FieldArray>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50"
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>

      </>}





    </>
  );
};

export default InvoiceForm;
