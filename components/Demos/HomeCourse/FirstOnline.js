import {BsCheckCircleFill} from 'react-icons/bs'
export default function FirstOnline(){
    return(
        <div className="container xl:px-10 px-2 py-[50px]">
            <div className='bg-[#24292d] rounded-[6px] w-[96%] mx-auto p-[20px] sm:p-[40px] flex justify-between items-center md:flex-row flex-col md:gap-0 gap-[20px]'>
                <div>
                    <h4 className='text-[#fff] font-bold sm:text-[30px] text-[26px] leading-[120%]'>
                        Create your first online assessment</h4>
                    <p className='text-[#fff] text-[14px]'>
                        Boost up your knowledge, grow your skill with the most reliable online courses and certifications</p>
                    <div className='mt-[15px] sm:mt-[20px] flex items-start flex-wrap gap-[6px]'>
                        <div className='flex items-center mr-[20px]'>
                            <BsCheckCircleFill className='text-green mr-[6px]'/> <span className='text-[#fff] text-[15px]'>Free registration</span></div>
                        <div className='flex items-center'>
                            <BsCheckCircleFill className='text-green mr-[6px]'/> <span className='text-[#fff] text-[15px]'>Powerful features</span></div>
                    </div>
                </div>
                <button className='w-[160px] h-[40px] bg-yellow rounded-[6px] font-[600] md:mx-0 mr-auto'>Sign Up for free</button>
            </div>
        </div>
    )
}