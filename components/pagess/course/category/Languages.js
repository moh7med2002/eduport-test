import Image from "next/image"
export default function Languages(){
    const Data=[
        {
            id:"1-lan",
            title:"French",
            img:"/Images/pages/course/category/L-1.svg"
        },
        {
            id:"2-lan",
            title:"German",
            img:"/Images/pages/course/category/L-2.svg"
        },
        {
            id:"3-lan",
            title:"Espanol",
            img:"/Images/pages/course/category/L-3.svg"
        },
        {
            id:"4-lan",
            title:"English",
            img:"/Images/pages/course/category/L-4.svg"
        },
        {
            id:"5-lan",
            title:"Hindi",
            img:"/Images/pages/course/category/L-5.svg"
        },
        {
            id:"6-lan",
            title:"Italian",
            img:"/Images/pages/course/category/L-6.svg"
        },
        {
            id:"7-lan",
            title:"Arabic",
            img:"/Images/pages/course/category/L-7.svg"
        },
        {
            id:"8-lan",
            title:"English",
            img:"/Images/pages/course/category/L-4.svg"
        }
    ]
    return(
        <div className="py-[50px]">
            <div className=" container px-2 xl:px-10">
                <h2 className='font-bold text-mainBlack text-[32px] sm:text-[40px] text-center leading-[120%]'>
                    Choose Languages</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6 mt-8">
                    {
                        Data.map(data=>{
                            return (
                                <div key={data.id} className="bg-[#f5f7f9] rounded-[4px] py-4 flex justify-center items-center gap-x-2">
                                    <div>
                                        <Image src={data.img} alt="" width={"70px"} height="40px"/>
                                    </div>
                                    <h4 className="font-bold text-mainBlack text-[20px]">{data.title}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}