import Image from 'next/image'
import {BsStarHalf,BsStarFill} from 'react-icons/bs'



export default function FreeLand(){
    
    const secondData=[
        {
            id:"1-sj",
            img:"/Images/trendeingCourse/n1.jpg"
        },
        {
            id:"2-sj",
            img:"/Images/trendeingCourse/n2.jpg"
        },
        {
            id:"3-sj",
            img:"/Images/trendeingCourse/n3.jpg"
        },
        {
            id:"4-sj",
            img:"/Images/trendeingCourse/n4.jpg"
        },
        {
            id:"5-sj",
            img:"/Images/trendeingCourse/n5.jpg"
        }
    ];
    return (
        <div className="py-[50px] bg-[#066ac91a]">
            <div className=" container px-2 xl:px-10 flex flex-wrap justify-between items-center">
                <div className='lg:w-[49%] w-[100%]'>
                    <h3 className='sm:text-[44px] text-[28px] font-bold text-mainBlack leading-[120%] mb-6'>
                        Access to Free Online Courses</h3>
                    <form onSubmit={(e)=>e.preventDefault()} className="max-w-[100%]">
                        <label className='text-mainBlack font-[400] block mb-4'>Enter your email address to get access</label>
                        <div className='bg-[#FFFFFF] px-2  py-2 rounded-md w-[550px] max-w-[100%] flex justify-between gap-3'>
                            <input type={"text"} name="email" placeholder='Ente your email: ' className='flex-1 px-2 border-none shadow-none outline-none'/>
                            <button type="submit" className='w-[150px] h-[42px] bg-[#1d3b53] text-[#fff] rounded-md'>Request access!</button>
                        </div>
                    </form>

                    <div className='my-7 w-[550px] max-w-full flex justify-between'>

                        <div>
                            <ul className="flex">
                                {
                                    secondData.map((da,index)=>{
                                        return <li className="mr-[-8px] ">
                                            <Image src={da.img} width="35px" height={"35px"} alt="" className=" rounded-full"/>
                                        </li>
                                    })
                                }
                                <li className="w-[35px] h-[35px] bg-blue rounded-full ml-[-6px] z-[10]
                                flex items-center justify-center text-[#fff]">1k+</li>
                            </ul>
                        </div>

                        <div className='flex items-center'>
                        <h4 className='font-bold text-mainBlack text-xl mr-2'>4.5/5.0</h4>
                        <ul className='flex gap-x-1 items-center'>
                            <li className='text-yellow'><BsStarFill/></li>
                            <li className='text-yellow'><BsStarFill/></li>
                            <li className='text-yellow'><BsStarFill/></li>
                            <li className='text-yellow'><BsStarFill/></li>
                            <li className='text-yellow text-[17px]'><BsStarHalf/></li>
                        </ul>
                    </div>
                    
                    </div>

                </div>

                <div className='lg:w-[49%] w-[100%] text-center'>
                    <Image src={'/Images/freeAccess/16.svg'} alt="" width={"600px"} height="500px"/>
                </div>
            </div>
        </div>
    )
}