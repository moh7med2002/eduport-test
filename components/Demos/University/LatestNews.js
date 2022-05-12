import Image from "next/image"
import {MdKeyboardArrowRight} from 'react-icons/md'
export default function LatestNews(){
    return(
        <div className="py-[50px]">
            <div className=" container xl:px-10 px-2">
                <div className="flex justify-between items-center mb-[25px] flex-wrap">
                    <h2 className="sm:text-[36px] text-[28px] text-mainBlack font-bold mb-[8px] leading-[120%]">
                        Eduport Latest News</h2>
                    <div className="flex items-center gap-[10px]">
                        <span className="text-second text-[15px]">Want to read more?</span>
                        <button className="flex items-center text-[14px] bg-[#066ac91a] px-[10px] py-[5px] text-blue rounded duration-300 hover:text-[#fff]
                        hover:bg-blue">
                            Go here <MdKeyboardArrowRight/></button>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">
                <div className="xl:w-[28%] md:w-[60%] lg:w-[40%] w-[100%] mb-[20px]">
                    <div className="relative overlay before:z-[1] before:rounded-[8px] before:h-[97%] w-fit mx-auto">
                        <Image src={'/Images/university/news-1.jpg'} width="500px" height={"300px"} alt="" className="rounded-[8px]"/>
                        <span className=" absolute left-[20px] top-[20px] bg-red text-[#fff] text-[13px] px-[4px] py-[1px] rounded-[4px] z-[2]">
                            Student life</span>
                    </div>
                    <h3 className="font-bold text-mainBlack text-[20px] px-[15px] leading-[120%] mb-[10px]">
                        Student Loan Survey: Many Owe $50K-plus</h3>
                    <p className="text-second px-[15px] leading-[120%]">
                        Affronting imprudence do he he everything. Offered chiefly farther of my no colonel shyness. Such on help</p>
                    <div className="flex justify-between px-[15px] mt-[10px]">
                        <span className="text-mainBlack font-bold text-[15px]">Frances Guerrero</span>
                        <span className="text-second text-[14px]">30M Ago</span>
                    </div>
                </div>

                <div className="xl:w-[42%] lg:w-[58%] w-[100%] mb-[20px]">
                    <div className="bg-[#f5f7f9] mb-[25px] rounded-[8px] px-[30px] py-[20px]">
                        <span className="bg-green text-[#fff] text-[14px] px-[7px] py-[4px] rounded-[4px] z-[2]">Research</span>
                        <h3 className="font-bold text-mainBlack text-[20px]  leading-[120%] my-[10px]">
                            How to make a college list</h3>
                        <p className="text-second leading-[120%] text-[15px]">
                            Prospective students should start broadly and then narrow their list down to colleges 
                            that best fit their needs, experts say.Yet remarkably appearance get him his projection.</p>
                        <div className="flex justify-between mt-[10px]">
                            <span className="text-mainBlack font-bold text-[15px]">Louis Crawford</span>
                            <span className="text-second text-[14px]">12H Ago</span>
                        </div>
                    </div>
                    <div>
                        <div className="relative overlay before:z-[1] before:rounded-[8px] before:h-[94%] sm:before:h-[96%] w-fit">
                            <Image src={'/Images/university/news-2.jpg'} width="750px" height={"160px"} alt="" className="rounded-[8px]"/>
                            <span  className=" absolute left-[20px] top-[20px] bg-info text-[#fff] text-[13px] px-[4px] py-[1px] rounded-[4px] z-[2]">
                                Student story</span>
                        </div>
                        <h3 className="font-bold text-mainBlack text-[20px] px-[15px] leading-[120%] mb-[10px]">
                            Student Loan Survey: Many Owe $50K-plus</h3>
                        <p className="text-second px-[15px] leading-[120%]">
                            Prospective students should start broadly and then narrow their list</p>
                        <div className="flex justify-between px-[15px] mt-[10px]">
                            <span className="text-mainBlack font-bold text-[15px]">Lori Stevens</span>
                            <span className="text-second text-[14px]">3M Ago</span>
                        </div>
                    </div>
                </div>

                <div  className="xl:w-[26%] md:w-[60%] lg:w-[40%] w-[100%] mb-[20px]">
                    <div className="relative overlay before:z-[1] before:rounded-[8px] before:h-[97%] w-fit mx-auto">
                        <Image src={'/Images/university/news-3.jpg'} width="450px" height={"250px"} alt="" className="rounded-[8px]"/>
                        <span className=" absolute left-[20px] top-[20px] bg-[#6f42c1] text-[#fff] text-[13px] px-[4px] py-[1px] rounded-[4px] z-[2]">
                            Covid-19</span>
                    </div>
                    <h3  className="font-bold text-mainBlack text-[20px] px-[15px] leading-[120%] mb-[10px]">
                        Covid-19 and the college experienced</h3>
                    <p className="text-second px-[15px] leading-[120%]">
                        Rooms oh fully taken by worse do. Points afraid but may end law.Points afraid but may end law.</p>
                    <div className="flex justify-between px-[15px] mt-[10px]">
                        <span className="text-mainBlack font-bold text-[15px]">Amanda Reed</span>
                        <span className="text-second text-[14px]">July 21, 2021</span>
                    </div>
                </div>

                </div>
            </div>
        </div>
    )
}