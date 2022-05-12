import Image from "next/image"
export default function GellaryCourses(){
    const Data=[
        {
            id:"1-ge",
            img:"/Images/Courses/13.webp",
            name:"Digital Marketing",
            courseNumber:'23'
        },
        {
            id:"2-ge",
            img:"/Images/Courses/3.webp",
            name:"Figma",
            courseNumber:'16'
        },
        {
            id:"3-ge",
            img:"/Images/Courses/9.webp",
            name:"Python",
            courseNumber:'32'
        },
        {
            id:"4-ge",
            img:"/Images/Courses/10.webp",
            name:"Angular",
            courseNumber:'48'
        },
        {
            id:"5-ge",
            img:"/Images/Courses/4.webp",
            name:"React-Native",
            courseNumber:'31'
        },
        {
            id:"6-ge",
            img:"/Images/Courses/1.webp",
            name:"Sketch",
            courseNumber:'38'
        },
        {
            id:"7-ge",
            img:"/Images/Courses/8.webp",
            name:"Javascript",
            courseNumber:'33'
        },
        {
            id:"8-ge",
            img:"/Images/Courses/11.webp",
            name:"Bootstrap",
            courseNumber:'62'
        }
    ]

    const DataJsx=Data.map(da=>{
        return<div key={da.id} className="w-fit cursor-pointer relative group before:absolute before:bottom-[5px] before:left-0 before:w-[100%] before:h-[50%] before:z-[1]
        overlay2 before:rounded-b-[10px]">
            <Image src={da.img} width="520px" height={"320px"} className="rounded-[10px]" alt=""/>
            <div className="absolute bottom-5 left-5 group-hover:translate-y-[-10px] duration-300 text-white z-[2]">
                <h5 className="font-bold text-[20px]">{da.name}</h5>
                <span>{da.courseNumber} Courses</span>
            </div>
        </div>
    })
    return(
        <div className="py-[50px]">
            <div className="container xl:px-10 px-2">
                <h3 className="text-mainBlack font-bold sm:text-[42px] text-[28px] leading-[120%] mb-[10px] text-center">
                    Top Courses for IT</h3>
                <p className="text-second text-[15px] mb-[20px] text-center">
                Information Technology Courses to expand your skills and boost your career &amp; salary</p>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 gap-[20px] mt-[10px]">
                    {DataJsx}
                </div>
            </div>
        </div>
    )
}