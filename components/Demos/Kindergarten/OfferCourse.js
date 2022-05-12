import Image from "next/image";
import React from "react";

function OfferCourse(){
    return(
        <div className=" py-[70px] bg-[#f5f7f9]">
            <div className=" container xl:px-10 px-2">
                <h3 className="sm:text-[38px] text-[28px] text-mainBlack font-bold mb-[8px] leading-[120%]">Courses We Offer</h3>
                <p className=" text-second text-[15px]">Perceived end knowledge certainly day sweetness why cordially</p>

                <div className="mt-[40px] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[40px]">

                    <div className="bg-[#fff] mainShadow rounded-[6px] text-center py-[20px]">
                        <Image  src={'/Images/kindergarten/abc.svg'} alt="" width={'100px'} height="100px"/>
                        <h5 className=" text-mainBlack text-[20px] mt-[10px] font-bold duration-300 hover:text-blue">Preschool</h5>
                        <p className=" text-second w-[200px] mx-auto my-[10px] text-[16px]">Man children rejoiced. Yet uncommonly his ten.</p>
                        <span className=" text-second">5 Course</span>
                    </div>

                    <div className="bg-[#fff] mainShadow rounded-[6px] text-center py-[20px]">
                        <Image  src={'/Images/kindergarten/lego.svg'} alt="" width={'100px'} height="100px"/>
                        <h5 className=" text-mainBlack text-[20px] mt-[10px] font-bold duration-300 hover:text-blue">Nursery</h5>
                        <p className=" text-second w-[200px] mx-auto my-[10px] text-[16px]">Man children rejoiced. Yet uncommonly his ten.</p>
                        <span className=" text-second">8 Course</span>
                    </div>

                    <div className="bg-[#fff] mainShadow rounded-[6px] text-center py-[20px]">
                        <Image  src={'/Images/kindergarten/sport.svg'} alt="" width={'100px'} height="100px"/>
                        <h5 className=" text-mainBlack text-[20px] mt-[10px] font-bold duration-300 hover:text-blue">Sports</h5>
                        <p className=" text-second w-[200px] mx-auto my-[10px] text-[16px]">Man children rejoiced. Yet uncommonly his ten.</p>
                        <span className=" text-second">8 Course</span>
                    </div>

                    <div className="bg-[#fff] mainShadow rounded-[6px] text-center py-[20px]">
                        <Image  src={'/Images/kindergarten/song.svg'} alt="" width={'100px'} height="100px"/>
                        <h5 className=" text-mainBlack text-[20px] mt-[10px] font-bold duration-300 hover:text-blue">Music</h5>
                        <p className=" text-second w-[200px] mx-auto my-[10px] text-[16px]">Man children rejoiced. Yet uncommonly his ten.</p>
                        <span className=" text-second">7 Course</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default React.memo(OfferCourse);