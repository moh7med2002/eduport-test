import Image from "next/image"
export default function ChooseGategory(){
    const Data=[
        {
            id:"1-cg",
            img:"/Images/pages/course/category/1.svg",
            title:"Data Science",
            coursesNum:"15",
            bg:"#0cbc871a"
        },
        {
            id:"2-cg",
            img:"/Images/pages/course/category/2.svg",
            title:"IT & Software",
            coursesNum:"22",
            bg:"#fd7e141a"
        },
        {
            id:"3-cg",
            img:"/Images/pages/course/category/3.svg",
            title:"Engineering",
            coursesNum:"53",
            bg:"#d6293e1a"
        },
        {
            id:"4-cg",
            img:"/Images/pages/course/category/4.svg",
            title:"Web Development",
            coursesNum:"25",
            bg:"#6f42c21a"
        },
        {
            id:"5-cg",
            img:"/Images/pages/course/category/5.svg",
            title:"Finance",
            coursesNum:"20",
            bg:"#17a2b81a"
        },
        {
            id:"6-cg",
            img:"/Images/pages/course/category/6.svg",
            title:"Medical",
            coursesNum:"10",
            bg:"#24292d1a"
        },
        {
            id:"7-cg",
            img:"/Images/pages/course/category/7.svg",
            title:"Architecture",
            coursesNum:"30",
            bg:"#f7c32e1a"
        },
        {
            id:"8-cg",
            img:"/Images/pages/course/category/8.svg",
            title:"Art & Design",
            coursesNum:"35",
            bg:"#24292d1a"
        },
        {
            id:"9-cg",
            img:"/Images/pages/course/category/9.svg",
            title:"Photography",
            coursesNum:"10",
            bg:"#6f42c21a"
        },
        {
            id:"10-cg",
            img:"/Images/pages/course/category/10.svg",
            title:"Music",
            coursesNum:"10",
            bg:"#d6293e1a"
        },
        {
            id:"11-cg",
            img:"/Images/pages/course/category/11.svg",
            title:"Marketing",
            coursesNum:"30",
            bg:"#0cbc871a"
        },
        {
            id:"12-cg",
            img:"/Images/pages/course/category/12.svg",
            title:"Accounting",
            coursesNum:"35",
            bg:"#066ac91a"
        }
    ]
    return (
        <div className="py-[50px]">
            <div className=" container px-2 xl:px-10">
                <h2 className='font-bold text-mainBlack text-[32px] sm:text-[40px] text-center leading-[120%]'>
                    Choose a Categories</h2>
                <p className='text-second text-center text-[15px]'>
                    Perceived end knowledge certainly day sweetness why cordially</p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6 mt-8">
                    {
                        Data.map(data=>{
                            return <div key={data.id} className=" rounded-[8px] py-4 text-center cursor-pointer group duration-200 hover:-translate-y-[5px]"
                            style={{backgroundColor:data.bg}}>
                                        <div className="bg-[#fff] w-[80px] h-[80px] rounded-full mx-auto flex items-center justify-center">
                                            <Image src={data.img} alt="" width={"80px"} height="60px"/> 
                                        </div>
                                            <h4 className="font-bold text-mainBlack text-[20px] mt-2 duration-200 group-hover:text-blue">{data.title}</h4>
                                            <p className="font-bold text-mainBlack text-[15px]">{data.coursesNum} Courses</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}