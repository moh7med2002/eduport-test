import Image from  'next/image'
import {FaQuoteLeft , FaQuoteRight} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'
import {BsStarHalf,BsShieldFillCheck} from 'react-icons/bs'
export default function FeedBack(){
    function CreateStars(){
        return(
            <ul className='flex hap-[3px] mt-[8px] mb-[10px] text-yellow justify-center text-[18px]'>
                <li><AiFillStar/></li>
                <li><AiFillStar/></li>
                <li><AiFillStar/></li>
                <li><AiFillStar/></li>
                <li><BsStarHalf/></li>
            </ul>
        )
    }
    return(
        <div className='py-[70px] bg-[#f5f7f9]'>
            <div className="container xl:px-10 px-2 flex xl:flex-row flex-col-reverse items-center">
                <div className='flex md:flex-row flex-col gap-[30px] xl:w-[60%]'>
                    <div className='md:w-[50%]'>
                        <div className='bg-[#fff] rounded-[10px] text-center py-[30px] px-[20px] md:mt-[40px]'>
                            <Image src={'/Images/teachers/3.jpg'} width="75px" height={"75px"} className="rounded-[50%]" alt=''/>
                            <p className='text-[16px] text-second mb-[12px]'>
                            &quot; Moonlight newspaper up its enjoyment agreeable depending. 
                            Timed voice share led him to widen noisy young. At weddings believed laughing &quot;</p>
                            <CreateStars/>
                            <h6 className=' text-mainBlack font-[600] text-[15px]'>Carolyn Ortiz</h6>
                        </div>
                        <div className=' bg-blue rounded-[16px] text-center w-fit px-[20px] py-[10px] feedBackBg mt-[40px] ml-auto md:block hidden'>
                            <span className='font-bold text-white text-[22px] inline-block mb-[-4px]'>4.5/5.0</span>
                            <CreateStars/>
                            <p className='text-white'>Based on 3265 ratings</p>
                        </div>
                    </div>

                    <div className='md:w-[35%]'>
                        <div className='bg-[#fff] w-fit py-[20px] px-[25px] rounded-[10px] mb-[30px] mr-auto md:block hidden relative'>
                            <span className='bg-yellow w-[55px] h-[55px] rounded-[50%] flex justify-center items-center text-[20px] text-mainBlack
                            absolute top-[-27.5px] right-[-27.5px]'><BsShieldFillCheck/></span>
                            <span className=' text-mainBlack font-bold text-[15px] block mb-[13px]'>100+ Verified Mentors</span>
                            <div className='flex items-center gap-[10px] mb-[12px]'>
                                <Image src={'/Images/teachers/2.jpg'} width="40px" height={"40px"} alt="" className=' rounded-[4px]'/>
                                <div>
                                    <h6 className=' text-mainBlack font-[600] text-[15px]'>Lori Stevens</h6>
                                    <p className='text-second font-[300] text-[14px]'>Tutor of physic</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-[10px] mb-[12px]'>
                                <Image src={'/Images/teachers/1.jpg'} width="40px" height={"40px"} alt="" className=' rounded-[4px]'/>
                                <div>
                                    <h6 className=' text-mainBlack font-[600] text-[15px]'>Billy Vasquez</h6>
                                    <p className='text-second font-[300] text-[14px]'>Tutor of chemistry</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <Image src={'/Images/teachers/4.jpg'} width="40px" height={"40px"} alt="" className=' rounded-[4px]'/>
                                <div>
                                    <h6 className=' text-mainBlack font-[600] text-[15px]'>Larry Lawson</h6>
                                    <p className='text-second font-[300] text-[14px]'>Tutor of technology</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='bg-[#fff] rounded-[10px] text-center py-[30px] px-[20px]'>
                                <Image src={'/Images/teachers/5.jpg'} width="75px" height={"75px"} className="rounded-[50%]" alt=''/>
                                <p  className='text-[16px] text-second mb-[12px]'>
                                &quot; At weddings believed laughing although the Moonlight 
                                newspaper up its enjoyment agreeable depending. &quot;</p>
                                <CreateStars/>
                                <h6  className=' text-mainBlack font-[600] text-[15px]'>Dennis Barrett</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='xl:w-[40%] xl:text-left text-center xl:mb-[0] mb-[30px]'>
                    <h3 className='font-bold text-mainBlack md:text-[48px] text-[32px] leading-[120%] mb-[10px]'>
                        Some valuable feedback from our students</h3>
                    <p className=' text-second text-[15px] mb-[10px] px-[12px]'>
                        Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. 
                        Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. 
                        Picture for attempt joy excited ten carried manners talking how.</p>
                    <button className=' capitalize text-white bg-blue w-[140px] h-[40px] rounded-md duration-300 hover:opacity-95'>view reviews</button>
                </div>
            </div>
        </div>
    )
}