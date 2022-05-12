export default function BoxOne(){
    return(
        <div style={{backgroundImage:`url(/Images/land.jpg)`}} 
        className="max-w-[100%] bg-center bg-no-repeat bg-cover rounded-[10px] my-[20px] min-h-[80vh] relative overlay before:rounded-[10px] flex justify-center items-center">
            <div className="relative w-[100%]">
                <h2 className="text-[#fff] text-center text-[28px] md:text-[56px] font-bold leading-[120%]">
                    Discover Lifelong Learning</h2>
                <p className="text-[#fff] text-center w-[750px] mx-auto max-w-[100%] text-[16px] p-[10px]">
                    This Bootstrap 5 based theme is ideal for all types of sites that offer education such as Kindergarten, 
                    School, College, University, Courses Hub, Training Center, or any Academy.</p>
                <div className="flex items-center justify-center mt-[20px] gap-[20px]">
                    <button className="bg-blue text-[#fff] w-[120px] h-[40px] rounded-[5px] duration-300 hover:scale-110 font-bold">Admissions</button>
                    <button className="bg-transparent text-[#fff] w-[120px] h-[40px] rounded-[5px] border border-[#fff] duration-300
                    hover:bg-[#fff] hover:text-mainBlack font-bold">Learn More</button>
                </div>
            </div>
        </div>
    )
}