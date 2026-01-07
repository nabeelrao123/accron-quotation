// // Invoice.js
// import React, { useRef } from "react";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// export default function Invoice({ formValues }) {

//     console.log('kokoko', formValues)
//     const invoiceRef = useRef(null);

//     const downloadPDF = () => {
//         const input = invoiceRef.current;

//         html2canvas(input, { scale: 2 }).then((canvas) => {
//             const imgData = canvas.toDataURL("image/png");
//             const pdf = new jsPDF("p", "mm", "a4");

//             const pdfWidth = pdf.internal.pageSize.getWidth();
//             const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

//             pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//             pdf.save("invoice.pdf");
//         });
//     };
//     const today = new Date().toISOString().split("T")[0];

//     return (
//         <div className="p-5">
//             {/* Download Button */}
//             <button
//                 onClick={downloadPDF}
//                 className="px-5 py-2.5 mb-5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//             >
//                 Download Invoice PDF
//             </button>

//             {/* Invoice Content */}
//             <div ref={invoiceRef} className="bg-gray-100 min-h-screen py-6 px-3 sm:px-6">
//                 <div className="max-w-5xl mx-auto bg-white p-4 sm:p-8 border border-gray-300">

//                     {/* Header */}
//                     <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 border-b pb-4">
//                         <div>
//                             <h1 className="text-xl sm:text-2xl font-bold uppercase">
//                                 Accron Engineering
//                             </h1>
//                             <p className="text-xs sm:text-sm text-gray-600">
//                                 accronengineering1@gmail.com
//                             </p>
//                             <p className="text-xs sm:text-sm text-gray-600">
//                                 +92 317 3169091 | +92 343 3936672
//                             </p>
//                         </div>

//                         <div className="sm:text-right">
//                             <h2 className="text-lg sm:text-xl font-semibold">
//                                 Quotation
//                             </h2>
//                             <p className="text-sm">
//                                 Date: <span className="font-medium">14-05-2025</span>
//                             </p>
//                         </div>
//                     </div>

//                     {/* Customer Info */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm">
//                         <div className="space-y-1">
//                             {/* <p><span className="font-semibold">Customer:</span> {formValues.customername}</p>
//                       */}
//                             <div>
//                                 <p className="text-lg font-semibold" ><span className="font-bold text-lg  text-blue-900">Customer:</span> {formValues.customername}</p>
//                                 <p className="text-lg font-semibold" ><span className="font-bold text-lg  text-blue-900">Address:</span> {formValues.address}</p>



//                                 <p className="text-lg font-semibold" ><span className="font-bold text-lg  text-blue-900">Order Validity:</span> {formValues.ordervalidity}</p>
//                                 <p className="text-lg font-semibold" ><span className="font-bold text-lg  text-blue-900">Person Concerned:</span> {formValues.personconsented}</p>
//                             </div>
//                         </div>
//                         <div className="space-y-1">
//                             <p className="text-lg font-semibold" ><span className="font-bold text-lg  text-blue-900">NTN:</span> A105381-0</p>
//                             <p  className="text-lg font-semibold" ><span className="font-bold text-lg  text-blue-900">SBR:</span> SA105381-0</p>
//                             <p className="text-lg font-semibold" ><span className="font-bold text-lg  text-blue-900">Date:</span> {today}</p>
//                         </div>
//                     </div>

//                     {/* Items */}
//                     <div className="mt-6 space-y-4">

//                         {/* Item Card (Mobile Friendly) */}
//                         <div className="border p-3 sm:p-4 rounded-md">
//                             <div className="grid grid-cols-4 grid-rows-1 gap-4">
//                                 {formValues?.items?.map((item,index) => (
//                                   <>
//                                   <div key={item} className="bg-white border p-4">
//                                     <p className="" >     {index+1}</p>
//                                     </div>
//                                        <div key={item} className="bg-white border p-4">
//                                      <p className="" >    {item.desc}</p>
//                                     </div>
//                                        <div key={item} className="bg-white border p-4">
//                                      <p className="" > {item.quant}</p>
//                                     </div>
//                                        <div key={item} className="bg-white border p-4">
//                                      <p className="" > {item.amount}</p>
//                                     </div>
//                                 </>
//                                 ))}
//                             </div>










//                         </div>

//                         {/* <div className="border p-3 sm:p-4 rounded-md">
//                             <div className="flex justify-between items-center text-sm">
//                                 <span className="font-semibold">02 Labour Charges</span>
//                                 <span className="font-semibold">PKR 140,000</span>
//                             </div>
//                         </div> */}

//                     </div>

//                     {/* Totals */}
//                     <div className="mt-6 flex justify-end  ">
//                         <div className="w-full sm:w-1/2 text-sm space-y-2 border-b ">
//                             <div className="flex justify-between border-b pb-1">
//                                 <span>Total</span>
//                                 <span>326,000</span>
//                             </div>
//                             <div className="flex justify-between border-b pb-1">
//                                 <span>SRB Tax (15%)</span>
//                                 <span>48,900</span>
//                             </div>
//                             <div className="flex justify-between font-bold text-base sm:text-lg">
//                                 <span>Total Amount</span>
//                                 <span>374,900</span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Terms */}
//                     <div className="mt-6 text-sm">
//                         <h3 className="font-semibold mb-2">Terms of Payment</h3>
//                         <ul className="list-disc pl-5 space-y-1 text-gray-700">
//                             <li>Further reduction will be applied if service is extended to more machines.</li>
//                             <li>70% advance payment before project initiation.</li>
//                             <li>30% payment upon final delivery confirmation.</li>
//                         </ul>
//                     </div>

//                     {/* Signatures */}
//                     <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
//                         <div>
//                             <p className="font-semibold">Proprietory:</p>
//                             <div className="mt-8 border-t pt-2">Signature / Stamp</div>
//                         </div>
//                         <div>
//                             <p className="font-semibold">Customer Approval:</p>
//                             <div className="mt-8 border-t pt-2">Signature</div>
//                         </div>
//                     </div>

//                     {/* Footer */}
//                     <div className="mt-6 text-xs text-gray-600 text-center sm:text-left">
//                         <p>Plot no. D/265-A, Hub River Road, S.I.T.E., Karachi.</p>
//                         <p>NTN: A105381-0 | SRB: SA105381-0</p>
//                     </div>

//                 </div>
//             </div>
//         </div>

//     );
// }


// Invoice.js
import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import accronlogo from '../assets/accronlogo.jpeg'
 
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';



export default function Invoice({ formValues }) {
    const invoiceRef = useRef(null);

    const downloadPDF = () => {
        const input = invoiceRef.current;

        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save("invoice.pdf");
        });
    };

    const today = new Date().toISOString().split("T")[0];

    return (
        <div className="p-3 sm:p-5">
            {/* Download Button */}
            <button
                onClick={downloadPDF}
                className="px-4 py-2 mb-4 sm:mb-5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition w-full sm:w-auto"
            >
                Download Invoice PDF
            </button>

            {/* Invoice Content */}
            <div ref={invoiceRef} className="bg-gray-100 py-4 px-2 sm:px-6 min-h-screen">
                <div className="max-w-5xl mx-auto bg-white p-4 sm:p-8 border border-gray-300 rounded-lg shadow">

                    {/* Header */}
                    {/* <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 border-b pb-4">
                        <div>
                            <h1 className="text-lg sm:text-2xl font-bold uppercase">
                                Accron Engineering
                            </h1>
                            <p className="text-xs sm:text-sm text-gray-600">accronengineering1@gmail.com</p>
                            <p className="text-xs sm:text-sm text-gray-600">+92 317 3169091 | +92 343 3936672</p>
                        </div>

                        <div className="sm:text-right mt-2 sm:mt-0">
                            <h2 className="text-lg sm:text-xl font-semibold">Quotation</h2>
                            <p className="text-sm">
                                Date: <span className="font-medium">{today}</span>
                            </p>
                        </div>
                    </div> */}



                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 border-b pb-4">
                        {/* Logo on Left */}
                        <div className="flex-shrink-0">
                            <img
                                src={accronlogo} // Replace with your logo path
                                alt="Accron Logo"
                                className="h-16 sm:h-20 object-contain"
                            />
                        </div>

                        {/* Contact Info Centered */}
                        <div className="flex-1 flex flex-col items-center text-center">
                            <p className="text-xs sm:text-sm text-gray-600 italic">INDUSTRIAL. AUTOMATION. SOLUTION </p>
                            <p className="text-xs sm:text-sm text-gray-600">Innovative Mastery, Enduring Solutions </p>
                            {/* <p className="text-xs sm:text-sm text-gray-600">+92 317 3169091 | +92 343 3936672</p> */}

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 sm:gap-4 text-xs sm:text-sm text-gray-600">
                                {/* Email */}
                                <div className="flex items-center gap-1">
                                    <EnvelopeIcon className="h-4 w-4 text-gray-600" />
                                    <span>accronengineering1@gmail.com</span>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-1">
                                    <PhoneIcon className="h-4 w-4 text-gray-600" />
                                    <span>+92 317 3169091 | +92 343 3936672</span>
                                </div>
                            </div>




                        </div>
                    </div>













                    {/* Customer Info */}
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mt-6 text-sm">
                        <div className="space-y-1">
                            <p className="text-sm sm:text-base">
                                <span className="font-bold text-blue-900">Customer:</span> {formValues.customername}
                            </p>
                            <p className="text-sm sm:text-base">
                                <span className="font-bold text-blue-900">Address:</span> {formValues.address}
                            </p>
                            <p className="text-sm sm:text-base">
                                <span className="font-bold text-blue-900">Order Validity:</span> {formValues.ordervalidity}
                            </p>
                            <p className="text-sm sm:text-base">
                                <span className="font-bold text-blue-900">Person Concerned:</span> {formValues.personconsented}
                            </p>
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm sm:text-base">
                                <span className="font-bold text-blue-900">NTN:</span> A105381-0
                            </p>
                            <p className="text-sm sm:text-base">
                                <span className="font-bold text-blue-900">SBR:</span> SA105381-0
                            </p>
                            <p className="text-sm sm:text-base">
                                <span className="font-bold text-blue-900">Date:</span> {today}
                            </p>
                        </div>
                    </div> */}



<div className="flex flex-col sm:flex-row sm:justify-between mt-6 gap-4 text-sm sm:text-base">
  {/* Left Side: Customer Info */}
  <div className="space-y-1">
    <p>
      <span className="font-bold text-blue-900">Customer:</span> {formValues.customername}
    </p>
    <p>
      <span className="font-bold text-blue-900">Address:</span> {formValues.address}
    </p>
    <p>
      <span className="font-bold text-blue-900">Order Validity:</span> {formValues.ordervalidity}
    </p>
    <p>
      <span className="font-bold text-blue-900">Person Concerned:</span> {formValues.personconsented}
    </p>
  </div>

  {/* Right Side: NTN, SBR, Date */}
  <div className="space-y-1 text-right mt-4 sm:mt-0">
    <p>
      <span className="font-bold text-blue-900">NTN:</span> A105381-0
    </p>
    <p>
      <span className="font-bold text-blue-900">SBR:</span> SA105381-0
    </p>
    <p>
      <span className="font-bold text-blue-900">Date:</span> {today}
    </p>
  </div>
</div>











                    {/* Items Table */}
                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full text-sm sm:text-base border-collapse border border-gray-300">
                            <thead className="bg-blue-900 text-white   ">
                                <tr>
                                    <th className="border p-2 text-left">#</th>
                                    <th className="border p-2 text-left">Description</th>
                                    <th className="border p-2 text-left">Quantity</th>
                                    <th className="border p-2 text-left">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {formValues?.items?.map((item, index) => (
                                    <tr key={index} className="odd:bg-white even:bg-gray-50">
                                        <td className="border p-2">{index + 1}</td>
                                        <td className="border p-2">{item.desc}</td>
                                        <td className="border p-2">{item.quant}</td>
                                        <td className="border p-2">{item.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Totals */}
                    {/* <div className="mt-6 flex justify-end">
            <div className="w-full sm:w-1/2 text-sm sm:text-base space-y-2 border-t pt-2">
              <div className="flex justify-between">
                <span>Total</span>
                <span>326,000</span>
              </div>
              <div className="flex justify-between">
                <span>SRB Tax (15%)</span>
                <span>48,900</span>
              </div>
              <div className="flex justify-between font-bold text-base sm:text-lg">
                <span>Total Amount</span>
                <span>374,900</span>
              </div>
            </div>
          </div> */}





                    <div className="mt-6 flex justify-end">
                        <div className="w-full sm:w-1/2 text-sm sm:text-base space-y-2 border border-gray-300 rounded-md p-4 bg-gray-50">
                            <div className="flex justify-between border-b border-gray-300 pb-1">
                                <span>Total</span>
                                <span>326,000</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300 pb-1">
                                <span>SRB Tax (15%)</span>
                                <span>48,900</span>
                            </div>
                            <div className="flex justify-between font-bold text-base sm:text-lg pt-1">
                                <span>Total Amount</span>
                                <span>374,900</span>
                            </div>
                        </div>
                    </div>


                    {/* Terms */}
                    <div className="mt-6 text-sm sm:text-base">
                        <h3 className="font-semibold mb-2">Terms of Payment</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Further reduction will be applied if service is extended to more machines.</li>
                            <li>70% advance payment before project initiation.</li>
                            <li>30% payment upon final delivery confirmation.</li>
                        </ul>
                    </div>

                    {/* Signatures */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base">
                        <div>
                            <p className="font-semibold">Proprietor:</p>
                            <div className="mt-8 border-t pt-2">Signature / Stamp</div>
                        </div>
                        <div>
                            <p className="font-semibold">Customer Approval:</p>
                            <div className="mt-8 border-t pt-2">Signature</div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                        <p>Plot no. D/265-A, Hub River Road, S.I.T.E., Karachi.</p>
                        <p>NTN: A105381-0 | SRB: SA105381-0</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
