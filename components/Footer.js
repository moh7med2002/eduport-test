import  Image from 'next/image'
import {FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn} from 'react-icons/fa'
export default function Footer(){
    return(
        <footer className='py-[50px] bg-[#24292d]'>
            <div className="container xl:px-10 px-2 flex gap-[30px] flex-wrap lg:flex-nowrap">
                <div className='lg:w-[24%]'>
                    <Image src={'/Images/logo-light.svg'} width="190px" height={"70px"} alt=""/>
                    <p className='text-[#cfd3d7] mb-[10px]'>
                        Eduport education theme, built specifically for the education centers which is dedicated to 
                        teaching and involve learners.</p>
                    <ul className='flex'>
                        <li className='w-[34px] h-[34px] mainShadow rounded-[4px] mr-2 flex justify-center items-center group bg-[#fff] 
                        hover:bg-[#5d82d1] duration-300 cursor-pointer'>
                            <FaFacebookF className='text-[#5d82d1] text-[14px] group-hover:text-[#fff] duration-300'/>
                            </li>
                        <li className='w-[34px] h-[34px] mainShadow rounded-[4px] mr-2 flex justify-center items-center group bg-[#fff] 
                        hover:bg-[#c22b72] duration-300 cursor-pointer'>
                            <FaInstagram className='text-[#c22b72] text-[14px] group-hover:text-[#fff] duration-300'/>
                            </li>
                        <li className='w-[34px] h-[34px] mainShadow rounded-[4px] mr-2 flex justify-center items-center group bg-[#fff] 
                        hover:bg-[#40bff5] duration-300 cursor-pointer'>
                            <FaTwitter className='text-[#40bff5] text-[14px] group-hover:text-[#fff] duration-300'/>
                            </li>
                        <li className='w-[34px] h-[34px] mainShadow rounded-[4px] mr-2 flex justify-center items-center group bg-[#fff] 
                        hover:bg-[#238cc8] duration-300 cursor-pointer'>
                            <FaLinkedinIn className='text-[#238cc8] text-[14px] group-hover:text-[#fff] duration-300'/>
                            </li>
                    </ul>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-2 lg:w-[52%] w-[100%] gap-[20px]'>
                    <div>
                        <h6 className='font-bold text-[#fff] text-[20px] mb-[20px]'>Company</h6>
                        <ul>
                            <li className='footerItem'>About Us</li>
                            <li className='footerItem'>Contact Us</li>
                            <li className='footerItem'>News And Blogs</li>
                            <li className='footerItem'>Library</li>
                            <li className='footerItem'>Career</li>
                        </ul>
                    </div>

                    <div>
                        <h6 className='font-bold text-[#fff] text-[20px] mb-[20px]'>Community</h6>
                        <ul>
                            <li className='footerItem'>Documentation</li>
                            <li className='footerItem'>Faq</li>
                            <li className='footerItem'>Forum</li>
                            <li className='footerItem'>Sitemap</li>
                        </ul>
                    </div>

                    <div>
                        <h6 className='font-bold text-[#fff] text-[20px] mb-[20px]'>Teaching</h6>
                        <ul>
                            <li className='footerItem'>Become a teacher</li>
                            <li className='footerItem'>How to guide</li>
                            <li className='footerItem'>Terms &amp; Conditions</li>
                        </ul>
                    </div>
                </div>

                <div className='lg:w-[24%] w-[100%]'>
                    <h6 className='font-bold text-[#fff] text-[20px] mb-[20px]'>Contact</h6>
                    <p className='text-[#cfd3d7]'>Toll free: <span className='text-mainBlack'>+1234 568 963</span></p>
                    <p className='text-[#cfd3d7] text-[14px] mb-[8px]'>(9:AM to 8:PM IST)</p>
                    <p className='text-[#cfd3d7]'>Email: <span className='text-mainBlack'>example@gmail.com</span></p>
                    <div className='flex gap-[10px]'>
                        <Image src={'/Images/google-play.svg'} width="150px" height={"100px"} alt=""/>
                        <Image src={'/Images/app-store.svg'} width="150px" height={"100px"} alt=""/>
                    </div>
                </div>
            </div>
        </footer>
    )
}