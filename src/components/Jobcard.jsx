import { FiBookmark } from "react-icons/fi";
import { FiClock, FiMapPin } from "react-icons/fi";
import framee from '../assets/framee.png'
import Button from "./Button";
const JobCard = ({
    promotedText,
    title,
    team,
    location,
    postedTime,
    applicants,
    buttonText = "Apply Now",
    onButtonClick,
    icon
}) => {
    return (
        <>
            <div className="bg-white flex flex-col space-y-3 py-3  px-2 border border-[#E1E1E1] rounded-[10px] border-default shadow-xs">
                {/* <p className="font-ngh text-[10px] text-[#333333] font-semibold  " >
                    promotedText?   promotedText:''} 
                    
                    </p> */}
                    {promotedText && <p className="font-ngh text-[10px] text-[#333333] font-semibold  " >{promotedText}</p>}

                <div className="flex items-center space-x-2" >
                    <img src={framee}
                        alt="Service icon"
                        className="w-10 h-10 object-cover"
                    />
                    <div>
                        <p className="font-ngh text-[14px] font-semibold  text-[#333333]">{title} </p>
                        <p className="font-ngh text-[14px] font-normal  text-[#333333]">{team} </p>
                    </div>
                </div>

                <div className="flex items-center space-x-2" >
                    <FiMapPin className='text-sm text-[#585D6E]' />
                    <p className="font-ngh text-[12px] font-normal  text-[#585D6E]" >{location}</p>
                </div>

                <div className="flex items-center space-x-2" >
                    <FiClock className='text-sm text-[#585D6E]' />
                    <p className="font-ngh text-[12px] font-normal  text-[#585D6E]" >1day ago |
                        <span className="font-ngh text-[12px] font-normal  text-[#0154AA]" > {applicants}</span>
                    </p>
                </div>


                <div className="flex items-center justify-around px-1 " >
                    <button className="font-ngh font-normal  hover:bg-[#0154AA] px-16 md:px-12 bg-[#0154AA] text-white  py-3 xl:px-6  rounded-md font-ngh 
                     text-[12px] leading-[100%] tracking-[0]">
                        {buttonText}
                    </button>
          
          
                    {/* <FiClock className='text-xs text-[#585D6E]' /> */}

<FiBookmark className="text-[#AAAAAA] text-[22px]" />
                </div>
            </div>


        </>

    );
};

export default JobCard;

