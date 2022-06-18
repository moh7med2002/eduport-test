import Image from 'next/image'
export default function CategoryLand(){
    return(
        <div className="py-[50px] bg-[#f5f7f9]">
            <div className=" container xl:px-10 px-2 flex items-center flex-wrap">

                <div className='w-[25%] lg:block hidden'>
                    <Image src={'/Images/pages/course/category/category-1.svg'} alt="" width={"400px"} height="300px"/>
                </div>
                
                <div className='lg:w-[50%] w-[100%] lg:mb-0 mb-12'>
                    <h2 className='font-bold text-mainBlack text-[30px] sm:text-[44px] text-center leading-[120%]'>
                        What do you want to learn?</h2>
                    <p className='text-second text-center text-[15px]'>
                        Grow your skill with the most reliable online courses and certification</p>
                    <form action='#' method='POST' className='w-[500px] max-w-full mx-auto bg-[#fff] mt-5 px-3 py-2 flex justify-between rounded-md'>
                        <input type={"search"} placeholder="Search course" className=' shadow-none outline-none flex-1 mr-2'/>
                        <button type="submit" className='w-[85px] bg-mainBlack text-[#fff] rounded h-[38px]'>Search</button>
                    </form>
                </div>

                <div className='lg:hidden w-[50%]'>
                    <Image src={'/Images/pages/course/category/category-1.svg'} alt="" width={"400px"} height="300px"/>
                </div>

                <div className='lg:w-[25%] w-[50%]'>
                    <Image src={'/Images/pages/course/category/category-2.svg'} alt="" width={"400px"} height="300px"/>
                </div> 

            </div>
        </div>
    )
}