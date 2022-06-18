import Image from 'next/image';

export default function LandSchool(){

    const data=[
        { 
            id:"100pp",
            img:"/Images/teachers/3.jpg",
            order:"1",
            desc:"st",
            name:"Jacqueline Miller",
            class:"12th Board Exam"
        },
        { 
            id:"200pp",
            img:"/Images/teachers/5.jpg",
            order:"2",
            desc:"nd",
            name:"Louis Ferguson",
            class:"12th Board Exam"
        },
        { 
            id:"300pp",
            img:"/Images/teachers/2.jpg",
            order:"1",
            desc:"st",
            name:"Frances Guerrero",
            class:"10th Board Exam"
        }
    ];

    const Jsx=data.map(da=>{
        return(
            <div key={da.id} className="flex items-center gap-x-[20px] mb-[10px]">
                <div className='relative'>
                    <Image src={da.img} width="85px" height={"85px"} className=" rounded-full" alt=''/>
                    <div className=' absolute right-0 top-[60%] w-fit'>
                        <Image src={'/Images/school/medal-badge.png'} width="35px" height={'35px'} alt=""/>
                        <span className='text-[10px] font-bold absolute left-[50%] top-[30%] -translate-x-1/2'>{da.order}<sup>{da.desc}</sup></span>
                    </div>
                </div>
                <div>
                    <h5 className=' text-mainBlack font-[600] text-[20px]'>{da.name}</h5>
                    <p className=' text-second'>{da.class}</p>
                </div>
            </div>
        )
    });


    return(
        <div className=" py-[50px]">
            <div className=" container xl:px-10 px-2 flex items-center justify-between flex-wrap gap-y-[30px]">
                
                <div className='w-[100%] lg:w-[45%]'>
                    <h2 className=' font-bold text-mainBlack leading-[130%] text-[40px] sm:text-[40px] md:text-[66px]'>
                    <svg className="fill-yellow inline-block" width="103" height="100" viewBox="0 0 103 100">
							<path d="M69.0166 69.7017C56.5959 80.712 39.8019 84.7239 25.181 80.1338C24.3382 79.9118 23.8242 78.9676 24.1599 78.1317C24.3819 77.2889 25.3261 76.7749 26.162 77.1106C39.7195 81.3514 55.3555 77.6122 66.9322 67.3502C78.5088 57.0882 84.0965 42.0136 81.5127 28.0453C81.3934 27.1819 81.9032 26.2994 82.7665 26.1801C83.6299 26.0608 84.5124 26.5706 84.6317 27.4339C87.4951 42.4465 81.4374 58.6914 69.0166 69.7017Z"></path>
							<path d="M26.0436 85.7222C25.923 85.8291 25.8627 85.8825 25.6887 85.9291C24.8651 86.3362 23.9689 86.0539 23.5015 85.2838C22.0666 82.5718 21.1317 76.2941 27.8958 72.0209C28.6659 71.5536 29.6224 71.7824 30.0898 72.5525C30.5571 73.3227 30.3283 74.2792 29.5582 74.7466C23.8589 78.3989 26.0805 83.213 26.3875 83.8023C26.7479 84.4518 26.5863 85.2412 26.0436 85.7222Z"></path>
							<path d="M90.0771 28.9603C89.5344 29.4413 88.7314 29.5071 88.1298 29.0713C87.635 28.7562 83.0688 25.9128 78.8126 31.1931C78.2562 31.9017 77.2257 31.9538 76.5706 31.4577C75.8621 30.9014 75.81 29.8708 76.306 29.2158C81.3597 23.0131 87.48 24.6943 90.0002 26.4442C90.769 26.9471 90.9349 27.9845 90.3786 28.693C90.258 28.7999 90.1374 28.9068 90.0771 28.9603Z"></path>
							<path d="M26.6015 44.2033C28.5257 46.3739 28.3271 49.6725 26.1565 51.5966C23.9859 53.5208 20.6873 53.3222 18.7632 51.1516C16.8391 48.981 17.0376 45.6824 19.2082 43.7583C21.3788 41.8342 24.6774 42.0327 26.6015 44.2033Z"></path>
							<path d="M56.8095 17.4259C58.7337 19.5965 58.5351 22.895 56.3645 24.8192C54.1939 26.7433 50.8953 26.5447 48.9712 24.3741C47.0471 22.2035 47.2456 18.905 49.4162 16.9808C51.5869 15.0567 54.8854 15.2552 56.8095 17.4259Z"></path>
						</svg> School Might be Close, Not Your Curiosity</h2>
                    <p className='text-second leading-[120%] text-[15px] w-[80%] my-[15px]'>
                        We are so eager to be working with kids and making a difference in their careers. Being a mentor is what we have always wanted to be.</p>
                    <button className='w-[130px] h-[50px] rounded-md bg-[#1d3b53] text-[#fff] duration-300 hover:scale-105 origin-top-left'>
                        Apply Now</button>
                </div>

                <div className='w-[100%] lg:w-[30%]'>
                    <h4 className='font-bold text-mainBlack leading-[120%] text-[26px] mb-[20px]'>
                        Our 2022 Top-Ranked Student</h4>
                    {Jsx}
                </div>
            </div>
        </div>
    )
}