import Image from "next/image"
export default function LaestBlogs(){
    const Blogs=[
        {
            id:"1-blogs",
            day:"15",
            month:"Jan 2022",
            title:'12 worst types of business accounts you follow on Twitter',
            author:"Jacqueline Miller"
        },
        {
            id:"2-blogs",
            day:"12",
            month:"Jan 2022",
            title:'How 10 worst business fails of all time could have been prevented',
            author:"Frances Guerrero"
        },
        {
            id:"3-blogs",
            day:"09",
            month:"Jan 2022",
            title:'Never underestimate the influence of social media',
            author:"Louis Ferguson"
        }
    ]
    return(
        <div className="py-[50px]">
            <div className=" container px-2 xl:px-10">
                <h2  className="sm:text-[42px] text-[28px] text-mainBlack font-bold mb-[8px] leading-[120%] text-center">
                Latest News &#38; Blogs
                </h2>

                <div className="mt-[20px] flex flex-wrap">

                    <div className="w-[100%] lg:w-[45%]">
                        <div className=" text-center">
                            <Image src={'/Images/school/18.jpg'} alt="" width={'700px'} height="420px" className="rounded-[8px]"/>
                        </div>
                        <h4 className="px-[20px] text-mainBlack leading-[120%] font-bold text-[24px] mt-[10px]">
                            Around the web: 20 fabulous infographics about business</h4>
                        <p className="pl-[20px] pr-[20px]  xl:pr-[20px] text-second text-[15px] leading-[120%] mt-[12px]">
                            Projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving.</p>
                        <div className="mt-[20px] pl-[20px] pr-[20px] xl:pr-[20px] flex items-center justify-between">
                            <span className=" text-mainBlack font-semibold">Lori Stevens</span>
                            <span className=" text-second">29 Jan 2022</span>
                        </div>
                    </div>

                    <div className="w-[100%] lg:w-[55%] mt-8 lg:mt-0 lg:pl-[25px]">
                        {
                            Blogs.map((blog,index)=>{
                                const checkPadding=index===0?false:true;
                                const checkBorder=index===Blogs.length-1?true:false
                                return <div id={blog.id} className={`flex sm:items-center pb-[30px] ${!checkBorder&&'border-b'} border-b-[#0000001a] 
                                ${checkPadding&&'pt-[30px]'} gap-[20px] sm:gap-[30px] sm:flex-row flex-col`}>
                                    <div className="sm:w-[150px] h-[110px] bg-mainBlack rounded-lg flex items-center justify-center flex-col">
                                        <h5 className=" font-bold text-[#fff] text-[36px]">{blog.day}</h5>
                                        <h6 className="text-[#fff]">{blog.month}</h6>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className=" text-mainBlack font-semibold text-[21px] leading-[120%]">{blog.title}</h4>
                                        <span className=" text-second mt-[10px]">{blog.author}</span>
                                    </div>
                                    </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}