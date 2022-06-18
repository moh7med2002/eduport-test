import Image from "next/image"
export default function TopCountry(){
    const Data=[
        {
            id:"1-topC",
            img:"/Images/abroad/cn.svg",
            name:"Canada",
        },
        {
            id:"2-topC",
            img:"/Images/abroad/gr.svg",
            name:"Germany",
        },
        {
            id:"3-topC",
            img:"/Images/abroad/nz.svg",
            name:"New Zealand",
        },
        {
            id:"4-topC",
            img:"/Images/abroad/uk.svg",
            name:"United Kingdom",
        },
        {
            id:"5-topC",
            img:"/Images/abroad/us.svg",
            name:"USA",
        },
        {
            id:"6-topC",
            img:"/Images/abroad/au.svg",
            name:"Australia",
        }
    ]
    return(
        <div className="py-[50px] bg-[#f5f7f9]">
            <div className=" container px-2 xl:px-10 flex flex-wrap">
                <div className="w-[100%] lg:w-[33%] mb-[20px] lg:mb-0">
                    <h3 className=" text-mainBlack font-bold text-[32px] sm:text-[38px]">
                        Top countries to study</h3>
                </div>
                <div className="w-[100%] lg:w-[67%] grid sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-7">
                    {
                        Data.map(data=>{
                            return <div key={data.id} className="bg-[#FFFFFF] mainShadow rounded-[8px] px-4 py-5 flex items-center cursor-pointer group">
                                <div className="mr-[15px]">
                                    <Image src={data.img} alt="" width={"70px"} height="40px"/>
                                </div>
                                <h6 className=" text-mainBlack text-[21px] font-semibold duration-300 group-hover:text-blue leading-[120%]">{data.name}</h6>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}