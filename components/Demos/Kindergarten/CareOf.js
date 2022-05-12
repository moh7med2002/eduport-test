import Image from "next/image";
import React from "react";

function CareOf(){
    return(
        <div className="py-[50px]">
            <div className=" container xl:px-10 px-2">
                <div className="grid md:grid-cols-2  xl:gap-x-[100px] gap-x-[50px]">
                    <h3 className="md:text-[38px] text-[28px] text-mainBlack font-bold mb-[8px] leading-[120%]">
                        How we care for our students and build their confidence</h3>
                    <div>
                        <p className="text-second text-[15px]">
                            Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.</p>
                        <button className="w-[110px] h-[40px] bg-yellow mt-[12px] rounded-[4px] duration-300 hover:scale-105">Contact Us</button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-[50px] gap-y-[30px]">

                    <div className=" text-center">
                        <div className="w-[100px] h-[100px] rounded-[50%] flex justify-center items-center bg-[#fff] mainShadow mx-auto">
                            <Image src={'/Images/kindergarten/child.svg'} alt="" width={'60px'} height="160px"/>
                        </div>
                        <h5 className=" text-mainBlack font-[700] text-[20px] mt-[12px] mb-[8px]">We care about kids</h5>
                        <p className="text-second text-[15px] w-[320px] mx-auto">Man children rejoiced. Yet uncommonly his ten who diminution astonished.</p>
                    </div>

                    <div className=" text-center">
                        <div className="w-[100px] h-[100px] rounded-[50%] flex justify-center items-center bg-[#fff] mainShadow mx-auto lg:mt-[40px]">
                            <Image src={'/Images/kindergarten/idea.svg'} alt="" width={'60px'} height="160px"/>
                        </div>
                        <h5 className=" text-mainBlack font-[700] text-[20px] mt-[12px] mb-[8px]">Building life-long learners</h5>
                        <p className="text-second text-[15px] w-[330px] mx-auto">Who diminution astonished. Yet uncommonly his ten who diminution astonished.</p>
                    </div>

                    <div className=" text-center">
                        <div className="w-[100px] h-[100px] rounded-[50%] flex justify-center items-center bg-[#fff] mainShadow mx-auto">
                            <Image src={'/Images/kindergarten/help.svg'} alt="" width={'60px'} height="160px"/>
                        </div>
                        <h5 className=" text-mainBlack font-[700] text-[20px] mt-[12px] mb-[8px]">Helping struggling students</h5>
                        <p className="text-second text-[15px] w-[320px] mx-auto">Man children rejoiced. Yet uncommonly his ten who diminution astonished.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default React.memo(CareOf);