import Image from 'next/image'
export default function BecomeInstructors(){
    return(
        <div className="pt-[100px]">
            <div className="container xl:px-10 px-2">
                <div className='linerBg rounded-[10px] lg:h-[250px] flex justify-between items-center lg:pl-[400px] lg:pr-[50px] px-[30px] sm:px-[50px] relative 
                flex-wrap py-[50px] lg:py-[0] gap-[20px]'>
                    <div className=' w-fit absolute bottom-[-6.5px] left-[40px] hidden lg:block'>
                        <Image src={"/Images/Instructors/6.png"} width="270px" height={"350px"} alt=""/>
                    </div>
                    <div>
                        <h4 className='text-[#fff] font-bold sm:text-[36px] text-[28px] leading-[120%]'>Become an Instructor!</h4>
                        <p className='text-[#fff] text-[15px]'>
                            Teach thousands of students and earn money with ease!</p>
                    </div>
                    <button className='w-[160px] bg-[#fff] rounded-[6px] h-[40px] font-[500]'>Get Started Now!</button>
                </div>
            </div>
        </div>
    )
}