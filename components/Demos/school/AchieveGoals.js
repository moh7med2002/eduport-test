import Image from "next/image"
import {BsPatchCheckFill} from 'react-icons/bs'
export default function AchieveGoals(){
    return(
        <div className="py-[50px]">
            <div className=" container px-2 xl:px-10 grid lg:grid-cols-2 gap-[30px] items-center">

                <div>
                    <h2 className="sm:text-[44px] text-[30px] leading-[120%] text-mainBlack font-bold mb-[15px]">
                        Achieve Your Goals With Eduport</h2>
                    <p className=" text-second mb-[18px] text-[15px]">
                        Two before narrow not relied on how except moment myself Dejection assurance Mrs led 
                        certainly So gate at no only none open Betrayed. Narrow not relied on how except moment myself 
                        Dejection gate at no only none open Betrayed.</p>
                    <ul className="mb-[20px]">
                        <li className=" flex gap-[10px] items-center mb-[10px]">
                            <BsPatchCheckFill className="text-green"/> 
                            <span className="text-second font-[500] text-[15px]">You will never think that knowing education</span>
                        </li>
                        <li className=" flex gap-[10px] items-center mb-[10px]">
                            <BsPatchCheckFill className="text-green "/> 
                            <span className="text-second font-[500] text-[15px]">Never mess with education and here’s the reason why</span>
                        </li>
                        <li className=" flex gap-[10px] items-center">
                            <BsPatchCheckFill className="text-green"/> 
                            <span className="text-second font-[500] text-[15px]">This is why this year will be the year of education</span>
                        </li>
                    </ul>
                    <button className=" bg-mainBlack text-[#fff] w-[130px] h-[50px] rounded-[5px]">Read More</button>
                </div>

                <div className="flex justify-between flex-wrap">

                    <div className="w-[100%] sm:w-[32%] sm:mb-0 mb-5">
                        <div className="h-[140px] bg-[#dc35451a] rounded-[5px] flex justify-center items-center flex-col mb-[20px]">
                            <span className=" text-mainBlack font-medium">Since</span>
                            <h5 className=" text-red font-bold text-[38px]">1995</h5>
                        </div>
                        <div className="h-[140px] bg-[#f5f7f9] rounded-[5px] flex justify-center items-center flex-col">
                            <h5 className=" text-blue font-bold text-[38px]">26+</h5>
                            <span className=" text-mainBlack font-medium">certified professor</span>
                        </div>
                    </div>

                    <div className="w-[100%] sm:w-[64%]">
                        <Image src={'/Images/school/first.jpg'} alt="" width={"500px"} height="600px" className=" rounded-lg"/>
                    </div>

                </div>

            </div>
        </div>
    )
}