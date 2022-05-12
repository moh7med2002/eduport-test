import Image from "next/image"
import {FaUserGraduate,FaGraduationCap,FaLaptop} from 'react-icons/fa'
import {GiAchievement} from 'react-icons/gi'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BsCheckCircleFill} from 'react-icons/bs'
export default function WelcomeWBS(){
    const Data=[
        {
            id:"1-uni-q",
            title:"Undergraduate",
            time:"Onsite",
            icon:FaUserGraduate,
            bg:"#f7c32e"
        },
        {
            id:"2-uni-q",
            title:"Graduate",
            time:"Online + Onsite",
            icon:FaGraduationCap,
            bg:"#17a2b8"
        },
        {
            id:"3-uni-q",
            title:"Post Graduate",
            time:"Online + Onsite",
            icon:GiAchievement,
            bg:"#d6293e"
        },
        {
            id:"4-uni-q",
            title:"Online education",
            time:"Coming soon...",
            icon:FaLaptop,
            bg:"#6f42c1"
        }
    ]
    return(
        <div className="py-[50px]">
            <div className="container xl:px-10 px-2 grid lg:grid-cols-2 sm:gap-[20px]">
                <div className="flex gap-[30px] relative pb-[70px]">
                    <div>
                        <Image src={'/Images/university/1.jpg'} alt="" width={"300px"} height="380px" className="rounded-[7px]"/>
                    </div>
                    <div className="pt-[50px]">
                        <Image src={'/Images/university/2.jpg'} alt="" width={"300px"} height="380px" className="rounded-[7px]"/>
                    </div>
                    <div className="absolute bottom-0 left-0 bg-[#fff] mainShadow rounded-[6px] p-[15px] w-[200px] sm:w-[240px]">
                        <div className="flex items-center">
                            <h6 className="font-bold text-mainBlack text-[15px] mr-[5px]">Congratulations</h6> 
                            <BsCheckCircleFill className="text-green text-[15px]"/></div>
                        <p className="text-[14px] text-second pr-[20px]">Your admission is successfully confirmed.</p>
                    </div>
                </div>
                <div className="pt-[50px]">
                    <h3 className="font-bold text-mainBlack text-[24px] sm:text-[38px] leading-[120%] mb-[10px]">
                        Welcome to WBS University</h3>
                    <p className="text-second leading-[120%] text-[16px] pr-[20px]">
                        Two before narrow not relied on how except moment myself Dejection assurance Mrs 
                        led certainly So gate at no only none open Betrayed.</p>
                    <div className="grid sm:grid-cols-2 mt-[30px] gap-y-[25px]">
                        {Data.map(data=>{
                            return(
                                <div key={data.id} className="flex items-center ">
                                    <div className="w-[42px] h-[42px] rounded-[4px] mr-[10px] flex items-center justify-center" style={{backgroundColor:data.bg}}>
                                        <data.icon className="text-[#fff] text-[22px] "/></div>
                                    <div>
                                        <h5 className="font-bold text-mainBlack text-[15px]">{data.title}</h5>
                                        <div className="flex items-center text-second">
                                            <AiOutlineClockCircle className="text-[15px] mr-[5px]"/> <span className="text-[14px]">{data.time}</span></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <button className="w-[130px] h-[40px] bg-[#066ac91a] text-blue mt-[20px] rounded-[5px] duration-300 hover:bg-blue hover:text-[#fff]">
                        More about us</button>
                </div>
            </div>
        </div>
    )
}