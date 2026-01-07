// Invoice.js
import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import accronlogo from '../assets/accronlogo.jpeg'
import { MapPinIcon } from '@heroicons/react/24/outline';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Invoice({ formValues }) {
    const invoiceRef = useRef(null);
    const today = new Date().toISOString().split("T")[0];

    const downloadPDF = () => {
        const input = invoiceRef.current;
        html2canvas(input, { scale: 2, windowWidth: 800 }).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save("invoice.pdf");
        });
    };

    return (
        <div className="p-3 sm:p-5 bg-gray-100 min-h-screen">
            {/* Download Button */}
            <button
                onClick={downloadPDF}
                className="px-4 py-2 mb-4 sm:mb-5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition w-full sm:w-auto"
            >
                Download Invoice PDF
            </button>

            {/* Invoice Container */}
            <div ref={invoiceRef} className="flex justify-center">
                <div className="w-[800px] bg-white p-4 sm:p-8 border border-gray-300 rounded-lg shadow">

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 border-b pb-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <img src={accronlogo} alt="Accron Logo" className="h-16 sm:h-20 object-contain" />
                        </div>
                        {/* Company Info */}


                        <div className="flex-1 flex flex-col items-center text-center">
                            <p className="text-xs sm:text-sm text-gray-600 italic">INDUSTRIAL. AUTOMATION. SOLUTION</p>
                            <p className="text-xs sm:text-sm text-gray-600">Innovative Mastery, Enduring Solutions</p>

                            {/* Contact Info */}



                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 mt-1 text-xs sm:text-sm text-gray-600 w-full">
                                {/* Email */}
                                <div className="flex items-center gap-1 w-full sm:w-auto justify-center h-5">
                                    <EnvelopeIcon className="h-4 w-4 flex-shrink-0 align-middle" />
                                    <span className="whitespace-nowrap align-middle">accronengineering1@gmail.com</span>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-1 w-full sm:w-auto justify-center h-5">
                                    <PhoneIcon className="h-4 w-4 flex-shrink-0 align-middle" />
                                    <span className="whitespace-nowrap align-middle">+92 317 3169091 | +92 343 3936672</span>
                                </div>
                            </div>

                        </div>





                    </div>

                    {/* Customer Info */}
                    <div className="flex flex-col sm:flex-row sm:justify-between mt-6 gap-4 text-sm sm:text-base">
                        {/* Left Side */}
                        <div className="space-y-1">
                            <p><span className="font-bold text-blue-900">Customer:</span> {formValues.customername}</p>
                            <p><span className="font-bold text-blue-900">Address:</span> {formValues.address}</p>
                            <p><span className="font-bold text-blue-900">Order Validity:</span> {formValues.ordervalidity}</p>
                            <p><span className="font-bold text-blue-900">Person Concerned:</span> {formValues.personconsented}</p>
                        </div>
                        {/* Right Side */}
                        <div className="space-y-1 text-right mt-4 sm:mt-0">
                            <p><span className="font-bold text-blue-900">NTN:</span> A105381-0</p>
                            <p><span className="font-bold text-blue-900">SBR:</span> SA105381-0</p>
                            <p><span className="font-bold text-blue-900">Date:</span> {today}</p>
                        </div>
                    </div>

                    {/* Items Table */}
                    {/* <div className="mt-6 overflow-x-auto">
                        <table className="w-full table-fixed border-collapse border border-gray-300">
                            <thead className="bg-blue-900 text-white">
                                <tr>
                                    <th className="border p-2 w-1/12 text-left">#</th>
                                    <th className="border p-2 w-6/12 text-left">Description</th>
                                    <th className="border p-2 w-2/12 text-left">Quantity</th>
                                    <th className="border p-2 w-3/12 text-left">Amount</th>
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
                    </div> */}


                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full table-fixed border-collapse border border-gray-300">
                            <thead className="bg-blue-900 text-white">
                                <tr>
                                    <th className="border p-2 w-1/12 text-left">#</th>
                                    <th className="border p-2 w-6/12 text-left">Description</th>
                                    <th className="border p-2 w-2/12 text-left">Quantity</th>
                                    <th className="border p-2 w-3/12 text-left">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {formValues?.items?.map((item, index) => (
                                    <tr key={index} className="odd:bg-white even:bg-gray-50">
                                        <td className="border p-2">{index + 1}</td>
                                        <td className="border p-2 break-words max-w-[200px]">{item.desc}</td>
                                        <td className="border p-2">{item.quant}</td>
                                        <td className="border p-2">{item.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
























                    {/* Totals */}
                    <div className="mt-6 flex justify-end">
                        <div className="w-[380px] text-sm sm:text-base space-y-2 border border-gray-300 rounded-md p-4 bg-gray-50">
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
                    {/* <div className="mt-6 text-xs bg-blue-900 sm:text-sm text-white text-center sm:text-left">
                        <p>Plot no. D/265-A, Hub River Road, S.I.T.E., Karachi.</p>
                    </div> */}

                    <div className="mt-6 bg-blue-900 text-white text-xs sm:text-sm p-2 sm:p-3 rounded">
                        <div className="flex items-center justify-center sm:justify-start gap-2">
                            <MapPinIcon className="h-4 w-4 flex-shrink-0" />
                            <span>Plot no. D/265-A, Hub River Road, S.I.T.E., Karachi</span>
                        </div>
                    </div>
                    <div className="mt-6 bg-blue-900 text-white text-xs sm:text-sm p-2 sm:p-3 rounded">
                        <div className="flex items-center justify-center sm:justify-start gap-2" style={{ lineHeight: '1.2', minHeight: '1.2em' }}>
                            {/* ✅ FIX: lineHeight + minHeight helps html2canvas align icon and text */}
                            <MapPinIcon className="h-4 w-4 flex-shrink-0" style={{ verticalAlign: 'middle' }} />
                            <span style={{ verticalAlign: 'middle' }}>
                                Plot no. D/265-A, Hub River Road, S.I.T.E., Karachi
                            </span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}






