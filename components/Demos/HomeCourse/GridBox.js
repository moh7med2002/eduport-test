import Image from "next/image"
export default function GridBox(){
    return(
        <div className="py-[50px]">
            <div className="container px-2 xl:px-10 grid lg:grid-cols-2 gap-[20px]">
                <div className="bg-[#066ac91a] flex flex-wrap sm:flex-nowrap rounded-[10px] pt-[35px] pl-[35px]">
                    <div className="sm:mb-[50px] mb-[20px]">
                        <h4 className="font-bold text-mainBlack text-[22px] sm:text-[30px]">Earn a Certificate</h4>
                        <p className="text-mainBlack text-[16px] sm:text-[19px] leading-[140%] mb-[12px]">
                            Get the right professional certificate program for you.</p>
                        <button className="w-[140px] h-[40px] bg-blue text-white rounded-[6px]">
                            View Programs</button>
                    </div>
                    <Image src={'/Images/CoursesPage/1.svg'} width="400px" height={"200px"} alt=""/>
                </div>
                <div className="bg-[#9a9ea41a] flex flex-wrap sm:flex-nowrap rounded-[10px] pt-[35px] pl-[35px]">
                    <div className="sm:mb-[50px] mb-[20px]">
                        <h4 className="font-bold text-mainBlack text-[22px] sm:text-[30px]">Best Rated Courses</h4>
                        <p className="text-mainBlack text-[16px] sm:text-[19px] leading-[140%] mb-[12px]">
                            Enroll now in the most popular and best rated courses.</p>
                        <button className="w-[140px] h-[40px] bg-yellow text-mainBlack rounded-[6px]">
                            View Courses</button>
                    </div>
                    <Image src={'/Images/CoursesPage/2.svg'} width="400px" height={"200px"} alt=""/>
                </div>
            </div>
        </div>
    )
}