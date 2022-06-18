import {FaUniversity,FaGlobe,FaHandshake} from 'react-icons/fa'
import Image from 'next/image'
export default function AbroadLand(){
    const Data=[
        {
            id:"1--",
            value:"400+",
            title:"Universities",
            color:"#17a2b8",
            bg:"#17a2b81a",
            icon:FaUniversity
        },
        {
            id:"2--",
            value:"25+",
            title:"Countries",
            color:"#6f42c1",
            bg:"#f0ecf9",
            icon:FaGlobe
        },
        {
            id:"3--",
            value:"12+",
            title:"Years of Experience",
            color:"#f7c32e",
            bg:"#fef6e0",
            icon:FaHandshake
        }
    ]
    return (
        <div className=" py-[50px]">
            <div className=" container px-2 xl:px-10">
                <h2 className=" text-mainBlack font-bold md:text-[62px] text-[40px] leading-[120%]">
                    Best platform for study in Abroad.</h2>

                    <div className='mt-[40px] flex flex-wrap gap-y-14'>

                        <div className='w-[100%] lg:w-[40%]'>
                        <p className=' text-second text-[15px] mb-4'>
                            Contrasted by oh estimating instrument. Size like body someone had. Are conduct viewing boy minutes</p>
                        <button className='bg-[#066ac91a] text-blue w-[120px] h-[50px] rounded-lg font-bold duration-300 hover:text-[#fff] hover:bg-blue'>
                            Get Inquiry</button>
                        <div className='mt-[20px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2'>
                            {
                                Data.map(da=>{
                                    return(
                                        <div className='flex items-center mb-[14px]' key={da.id}>
                                            <div className='w-[60px] h-[55px] rounded-[5px] mr-[12px] flex items-center justify-center' style={{backgroundColor:da.bg}}>
                                                <da.icon style={{color:da.color}} className="text-[28px]"/>
                                            </div>
                                            <div>
                                                <h5 className=' text-mainBlack font-bold text-[24px]'>{da.value}</h5>
                                                <span className=' text-second text-[15px]'>{da.title}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        </div>

                        <div className='w-[100%] lg:w-[60%]'>
                            <Image src={'/Images/abroad/04.jpg'} width="800px" height={"500px"} alt="" className=' rounded-lg'/>
                        </div>

                    </div>
            </div>
        </div>
    )
}