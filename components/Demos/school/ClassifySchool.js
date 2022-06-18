import Image from "next/image";

export default function ClassifySchools(){

    const Data=[
        {
            id:"clas-1",
            title:"Primary school",
            desc:"1st to 6th grades",
            lessons:"35 Lessons",
            img:"1.svg",
            bg:"#f7c32e80"
        },
        {
            id:"clas-2",
            title:"Middle school",
            desc:"7th to 10th grades",
            lessons:"54 Lessons",
            img:"2.svg",
            bg:"#6f42c180"
        },
        {
            id:"clas-3",
            title:"High school",
            desc:"11th to 12th grades",
            lessons:"70 Lessons",
            img:"3.svg",
            bg:"#fd7e1480"
        },
        {
            id:"clas-4",
            title:"Exams",
            desc:"7th to 10th grades",
            lessons:"120 Lessons",
            img:"4.svg",
            bg:"#17a2b880"
        }
    ];

    const jsx=Data.map(data=>{
        return <div key={data.id}  style={{backgroundColor:data.bg}}
        className="pt-[20px] px-[10px] rounded-[10px] group">
            <p className="pl-[20px] text-[18px] text-mainBlack font-[500] mb-[10px]">{data.desc}</p>
            <h4 className="pl-[20px] text-[30px] text-mainBlack font-[700] mb-[0px] duration-300 group-hover:text-blue">{data.title}</h4>
            <span className="pl-[20px] text-[20px] text-mainBlack font-[400] mb-[10px]">{data.lessons}</span>
            <div className="mt-[20px] opacity-50">
             <Image src={`/Images/school/${data.img}`} alt="" width={"400px"} height="300px"/>
            </div>
        </div>
    })

    return(
        <div className=" py-[50px]">
            <div className=" container px-2 xl:px-10">
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-[30px] px-[20px]">
                    {jsx}
                </div>
            </div>
        </div>
    )
}