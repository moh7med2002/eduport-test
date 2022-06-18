import Image from "next/image"

export default function CompanyADS(){
    const Data=[
        {
            img:"/Images/freeAccess/1.svg",
            id:"1-svg"
        },
        {
            img:"/Images/freeAccess/2.svg",
            id:"2-svg"
        },
        {
            img:"/Images/freeAccess/3.svg",
            id:"3-svg"
        },
        {
            img:"/Images/freeAccess/4.svg",
            id:"4-svg"
        },
        {
            img:"/Images/freeAccess/5.svg",
            id:"5-svg"
        },
        {
            img:"/Images/freeAccess/6.svg",
            id:"6-svg"
        },
        {
            img:"/Images/freeAccess/7.svg",
            id:"7-svg"
        },
        {
            img:"/Images/freeAccess/8.svg",
            id:"8-svg"
        },
        {
            img:"/Images/freeAccess/9.svg",
            id:"9-svg"
        },
        {
            img:"/Images/freeAccess/10.svg",
            id:"10-svg"
        },
        {
            img:"/Images/freeAccess/11.svg",
            id:"11-svg"
        }
    ]
    return (
        <div className="py-[50px]">
            <div className=" container px-2 xl:px-10 flex flex-wrap justify-center gap-y-4">
                {
                    Data.map(da=>{
                        return <div key={da.id} className="lg:w-1/6 md:w-1/4 sm:w-1/3 w-1/3">
                            <Image src={da.img} alt="" width={"100px"} height="50px" className=" grayscale cursor-pointer duration-200
                            hover:grayscale-0"/>
                        </div>
                    })
                }
            </div>
        </div>
    )
}