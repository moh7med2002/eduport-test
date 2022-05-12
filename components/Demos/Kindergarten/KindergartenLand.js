import {FaUniversity,FaUserGraduate,FaChalkboardTeacher,FaBookReader} from 'react-icons/fa'
import Image from 'next/image'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'
import { CountUp } from "use-count-up"
import React from 'react'
function KindergartenLand(){

    function createRate(rate){
        let arr=[];
        rate=5-rate;
        let rate1=rate%1;
        let rate2=parseInt(rate/1);
        let count= rate1===0?rate2:1+rate2;
        let full=5-count;
        for(let i=0;i<full;i++){
            arr.push(1);
        }
        if(rate1!==0){
            arr.push(0.5);
        }
        for(let i=0;i<rate2;i++){
            arr.push(0);
        }
        const style={
            color:" #f7c32e",
            fontSize:"16px"
        }
        return <ul className="flex hap-[5px]">
                {arr.map((val,index)=>{
                    return <li key={index+"star"}>
                        {val===1?<AiFillStar style={style}/>:val===0.5?<BsStarHalf style={style}/>:<AiOutlineStar  style={style}/>}
                        </li>
                })}
        </ul>
    }

    return(
        <div className='py-[70px]'>
            <div className=" container xl:px-10 px-2 flex flex-wrap">
                <div className=' hidden xl:flex xl:w-[25%]   items-end'>
                    <div className=' relative  mx-auto text-center'>
                    <Image src={'/Images/kindergarten/land-1.png'} alt="" width={'200px'} height={"340px"}/>
                    <figure className="absolute bottom-[4px] left-[50%] translate-x-[-50%] mt-4 mb-0 z-[-1]">
					<svg width="290.2px" height="296.4px">
						<path className="fill-info" d="M287.8,112.4c0.7-5.5-17.6-26-41.7-47.9l0-0.1c-1.3-1.3-2.5-2.7-3.7-4.2c-0.7-0.9-2.3-1.9-4-3.2 c-1.8-1.4-3.6-3-5.4-4.5c-3.8-3.3-7.7-6.5-11.6-9.5c-3.8-2.9-8-5-11.6-8.5c-0.1-0.1-0.1-0.1-0.2-0.2c-4.5-3.4-9-6.6-13.4-9.7 c0,0-0.1,0-0.1,0c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.1-0.2-0.1-0.3-0.2c0,0,0,0,0,0c-0.2-0.2-0.4-0.4-0.7-0.6c-0.9-0.7-1.9-1.3-2.8-2 c-0.3-0.2-0.6-0.4-0.9-0.7c-0.3-0.2-0.7-0.4-0.9-0.5c-1.4-0.8-2.8-2.1-4.2-3c-0.2-0.1-0.5-0.2-0.7-0.4c-0.2-0.1-0.4-0.2-0.6-0.3 c-0.3,0-0.5-0.1-0.8-0.1c-14.8-9.1-28-14.9-37.1-14.7C140.6,2,131.1,6,120,12.6c-0.7,0.5-1.4,0.9-2.1,1.4c-0.7,0.4-1.3,0.9-1.9,1.1 c-6,3.7-12.3,8.1-18.8,13c0,0,0,0,0,0c-0.1,0.1-0.2,0.2-0.3,0.2c-0.1,0-0.1,0-0.2,0.1c-0.1,0.1-0.2,0.1-0.3,0.2c0,0-0.1,0-0.1,0.1 c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.1c0,0.1-0.1,0.2-0.1,0.2c-0.2,0.1-0.4,0.4-0.7,0.5C44.6,67.8-15.6,133,10.1,137.8 c0,0,10.4-0.7,27.2-1.8c-9.1,31.1-4.2,128.8,4.3,146.9c10.4,22,201.2,11.4,214.9,7.9c12.9-3.3,7.5-137.5,3.5-163.6 C295.7,126,286.5,122.7,287.8,112.4z"></path>
					</svg>
				    </figure>
                    <div className=' absolute left-[-95%] bottom-[-7%] z-[-2]'>
                        <Image src={'/Images/kindergarten/rocket.svg'} alt="" width={'200px'} height="200px" className=' rotate-[80deg]'/>
                    </div>
                    
                    </div>
                </div>

                <div className='xl:w-[50%] w-[100%] xl:py-[40px]'>
                        <div className='bg-[#1d3b53] w-fit flex items-center mx-auto text-[#fff] font-bold px-[20px] py-[5px] rounded'>
                            <FaUniversity className='mr-[5px] text-[18px]'/>
                            <div className='text-[15px]'>St Joseph, Eugene, Oregon, USA</div>
                        </div>
                        <h3 className="sm:text-[42px] text-[28px] text-mainBlack font-bold mb-[8px] leading-[120%] text-center lg:w-[80%] mx-auto mt-[20px]">
                            The Best kindergarten You Can Get</h3>
                        <p className=' text-second text-[14px] text-center leading-[120%] w-[82%] mx-auto'>
                            The best cost-efficient choice for parents looking for high-quality education,
                            Dedicated Timetabled Lessons Offered with qualified Staff.</p>

                        <div className='mt-[30px] flex flex-wrap justify-center gap-[30px]'>
                            <div className='flex items-center'>
                                <span className='w-[55px] h-[55px] bg-[#fff] mainShadow rounded-[50%] flex items-center justify-center mr-[15px]'>
                                    <FaUserGraduate className='text-info text-[20px]'/></span>
                                <div>
                                    <h4 className='font-bold text-[24px] text-mainBlack'>
                                        <CountUp isCounting start={0} end={1} duration={3}/><span>k</span></h4>
                                    <p className=' text-second text-[15px]'>Total Students</p>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <span  className='w-[55px] h-[55px] bg-[#fff] mainShadow rounded-[50%] flex items-center justify-center mr-[15px]'>
                                    <FaChalkboardTeacher className='text-[#6f42c1] text-[24px]'/></span>
                                <div>
                                    <h4 className='font-bold text-[24px] text-mainBlack'>
                                    <CountUp isCounting start={0} end={105} duration={3}/>
                                    </h4>
                                    <p className=' text-second text-[15px]'>Total Instructors</p>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <span className='w-[55px] h-[55px] bg-[#fff] mainShadow rounded-[50%] flex items-center justify-center mr-[15px]'>
                                    <FaBookReader className='text-red text-[20px]'/></span>
                                <div>
                                    <h4 className='font-bold text-[24px] text-mainBlack'>
                                    <CountUp isCounting start={0} end={2} duration={3}/><span>k</span>
                                    </h4>
                                    <p className=' text-second text-[15px]'>Total Activities</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center items-center mt-[30px] flex-wrap gap-y-[15px]'>
                            <button className='w-[120px] h-[50px] text-blue bg-[#066ac91a] font-bold duration-500 rounded-[6px] hover:text-[#fff] 
                            hover:bg-blue'>
                                Book now</button>
                            <div className='flex items-center ml-[20px]'>
                                <h4 className='text-[36px] text-mainBlack font-bold mr-[10px]'>4.5</h4>
                                <div>
                                    {createRate(4.5)}
                                    <span className='text-second text-[13px] font-bold'>Students Love Us!</span>
                                </div>
                            </div>
                        </div>
                </div>

                <div className='xl:w-[25%] w-[100%] xl:mt-[0] mt-[20px] text-center'>
                    <div className=' relative  mx-auto text-center'>
                    <Image src={'/Images/kindergarten/land-2.png'} alt="" width={'200px'} height={"340px"}/>
                    <figure className="absolute bottom-[4px] left-[50%] translate-x-[-50%] mt-4 mb-0 z-[-1]">
					<svg width="290.2px" height="296.4px">
						<path className="fill-green" d="M287.8,112.4c0.7-5.5-17.6-26-41.7-47.9l0-0.1c-1.3-1.3-2.5-2.7-3.7-4.2c-0.7-0.9-2.3-1.9-4-3.2 c-1.8-1.4-3.6-3-5.4-4.5c-3.8-3.3-7.7-6.5-11.6-9.5c-3.8-2.9-8-5-11.6-8.5c-0.1-0.1-0.1-0.1-0.2-0.2c-4.5-3.4-9-6.6-13.4-9.7 c0,0-0.1,0-0.1,0c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.1-0.2-0.1-0.3-0.2c0,0,0,0,0,0c-0.2-0.2-0.4-0.4-0.7-0.6c-0.9-0.7-1.9-1.3-2.8-2 c-0.3-0.2-0.6-0.4-0.9-0.7c-0.3-0.2-0.7-0.4-0.9-0.5c-1.4-0.8-2.8-2.1-4.2-3c-0.2-0.1-0.5-0.2-0.7-0.4c-0.2-0.1-0.4-0.2-0.6-0.3 c-0.3,0-0.5-0.1-0.8-0.1c-14.8-9.1-28-14.9-37.1-14.7C140.6,2,131.1,6,120,12.6c-0.7,0.5-1.4,0.9-2.1,1.4c-0.7,0.4-1.3,0.9-1.9,1.1 c-6,3.7-12.3,8.1-18.8,13c0,0,0,0,0,0c-0.1,0.1-0.2,0.2-0.3,0.2c-0.1,0-0.1,0-0.2,0.1c-0.1,0.1-0.2,0.1-0.3,0.2c0,0-0.1,0-0.1,0.1 c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.1c0,0.1-0.1,0.2-0.1,0.2c-0.2,0.1-0.4,0.4-0.7,0.5C44.6,67.8-15.6,133,10.1,137.8 c0,0,10.4-0.7,27.2-1.8c-9.1,31.1-4.2,128.8,4.3,146.9c10.4,22,201.2,11.4,214.9,7.9c12.9-3.3,7.5-137.5,3.5-163.6 C295.7,126,286.5,122.7,287.8,112.4z"></path>
					</svg>
				    </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(KindergartenLand);