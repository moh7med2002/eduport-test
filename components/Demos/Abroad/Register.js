export default function Register(){
    return(
        <div className="py-[50px] mt-[70px]">
            <div className=" container px-2 xl:px-10 grid lg:grid-cols-2 gap-7">
                <div className="bg-[#f7c12e81] rounded-md text-center py-7">
                    <span className=" text-mainBlack font-normal text-[19px] inline-block mb-4">
                        Join Webinar about</span>
                    <h3 className=" font-bold text-red text-[40px]  mb-3">
                        Study in Canada</h3>
                    <h4 className="text-mainBlack font-semibold text-[25px] mb-4">
                        Apply for 2022 May intakes</h4>
                    <button className="text-[#fff] bg-mainBlack w-[122px] h-[37px] rounded">Register Now</button>
                </div>
                <div className="bg-[#f5f7f9] rounded-md text-center py-7">
                    <span  className=" text-mainBlack font-normal text-[19px] inline-block mb-4">
                        Just started new</span>
                    <h3 className=" font-bold text-info text-[40px] mb-3">
                        IELTS Batches</h3>
                    <h4 className=" text-second mb-4">
                        Accepted in more than 10K institutions around the world.</h4>
                    <button className="text-[#fff] bg-mainBlack w-[122px] h-[37px] rounded">Register Now</button>
                </div>
            </div>
        </div>
    )
}