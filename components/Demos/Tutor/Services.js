import Image from "next/image";
import {BsFillPatchCheckFill} from 'react-icons/bs';

export default function ServicesTutor(){
    return(
        <div className="py-[50px]">
            <div className="container xl:px-10 px-2">
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-[20px] items-center">

                    <div>
                        <h3 className="text-mainBlack font-bold text-[32px] leading-[120%]">
                            Services that you need to know</h3>
                        <p className="text-second text-[15px]">
                            The 1-hour demo will provide Happiness prosperous impression had conviction For every delay in their Extremity now, strangers</p>
                    </div>

                    <div className="bg-[#fff] rounded-lg mainShadow py-[20px] px-[20px]">
                        <div className="flex items-center mb-[20px]">
                            <Image src={'/Images/tutor/1.svg'} alt="" width={"70px"} height="60px"/>
                            <div className="ml-[10px]">
                                <h4 className="text-mainBlack font-bold text-[20px]">School tuition</h4>
                                <p className=" text-second text-[14px]">Total 268 Students</p>
                            </div>
                        </div>
                        <ul>
                                <li className="flex items-center">
                                    <BsFillPatchCheckFill className="text-green text-[15px] mr-[6px]"/> 
                                    <span className="text-second text-[15px]">Private and public classes</span></li>
                                <li className="flex items-center">
                                    <BsFillPatchCheckFill className="text-green text-[15px] mr-[6px]"/> 
                                    <span className="text-second text-[15px]">Online and offline classes</span></li>
                                <li className="flex items-center">
                                    <BsFillPatchCheckFill className="text-green text-[15px] mr-[6px]"/>
                                    <span className="text-second text-[15px]">Mon to Sat classes</span></li>
                            </ul>
                    </div>

                    <div className="bg-[#fff] rounded-lg mainShadow py-[20px] px-[20px]">
                        <div  className="flex items-center mb-[20px]">
                            <Image src={'/Images/tutor/2.svg'} alt="" width={"70px"} height="60px" className=""/>
                            <div className="ml-[10px]">
                                <h4 className="text-mainBlack font-bold text-[20px]">College tuition</h4>
                                <p className=" text-second text-[14px]">Total 780 Students</p>
                            </div>
                        </div>
                        <ul>
                                <li className="flex items-center">
                                    <BsFillPatchCheckFill className="text-green text-[15px] mr-[6px]"/> 
                                    <span className="text-second text-[15px]">Only private classes</span></li>
                                <li className="flex items-center">
                                    <BsFillPatchCheckFill className="text-green text-[15px] mr-[6px]"/> 
                                    <span className="text-second text-[15px]">Online and offline classes</span></li>
                                <li className="flex items-center">
                                    <BsFillPatchCheckFill className="text-green text-[15px] mr-[6px]"/> 
                                    <span className="text-second text-[15px]">Sat and Sun classes</span></li>
                            </ul>
                    </div>

                    <div className="bg-[#fff] rounded-lg mainShadow py-[20px] px-[20px]">
                        <div className="flex items-center mb-[20px]">
                            <Image src={'/Images/tutor/3.svg'} alt="" width={"70px"} height="60px"/>
                            <div className="ml-[10px]">
                                <h4 className="text-mainBlack font-bold text-[20px]">Language tuition</h4>
                                <p className=" text-second text-[14px]">Total 576 Students</p>
                            </div>
                        </div>
                        <ul>
                                <li className="flex items-center">
                                    <BsFillPatchCheckFill className="text-green text-[15px] mr-[6px]"/> 
                                    <span className="text-second text-[15px]">Private and public classes</span></li>
                                <li className="flex items-center">
                                    <BsFillPatchCheckFill className="text-green text-[15px] mr-[6px]"/> 
                                    <span className="text-second text-[15px]">Online and offline classes</span></li>
                            </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}