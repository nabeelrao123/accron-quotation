import { useState } from "react";
import { FiClock, FiMapPin } from "react-icons/fi"; // Feather icons
import framee from '../assets/framee.png'
import ovals from '../assets/ovals.png'
import rectan from '../assets/rectan.png'

const Profilecard = () => {
    return (
        <>
            <div className="border border-white bg-white rounded-lg">
                <div className="relative h-[100px] w-full">
                    <img
                        src={rectan}
                        alt="Service icon"
                        className="w-full h-full object-cover"
                    />
                    {/* Center circular image - FIXED */}
                    <div className="absolute left-1/2 -bottom-14 transform -translate-x-1/2">
                        <div className="rounded-full p-3 sm:p-4 md:p-5 flex justify-center items-center">
                            {/* <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"> */}
                            <img
                                // src={`${}`}
                                src={ovals}
                                alt="Service icon"
                                className="w-full h-full object-cover rounded-full"
                            />
                            {/* </div> */}
                        </div>
                    </div>
                </div>

                <div className="mt-10 mb-5 flex flex-col px-5 py-2 space-y-2   ">
                    <p className="font-ngh text-[#333333] font-bold text-[18px] leading-[100%] tracking-[0%] text-center">
                        Albert Flores
                    </p>

                    <p className="font-ngh text-[#333333] font-normal text-[14px] leading-[100%] tracking-[0%] text-center">
                        Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web...
                    </p>

                    <p className="font-ngh text-[#585D6E] font-normal text-[12px] leading-[100%] tracking-[0%] text-center">
                        Clinton, Maryland
                    </p>

                </div>
            </div>

        </>
    );
};

export default Profilecard;
