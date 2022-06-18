import Image from "next/image"
import {BiFullscreen} from 'react-icons/bi'
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'
import { useState } from "react";
export default function BestMoments(){
    const src='/Images/school/';
    const images =
    [
        {
            image:src+'b1.jpg',
            height:"692px",
            width:"519px",
        },
        {
            image:src+'b2.jpg',
            height:"692px",
            width:"519px",
        },
        {
            image:src+'b3.jpg',
            height:"692px",
            width:"1038px",
        },
        {
            image:src+'b4.jpg',
            height:"692px",
            width:"519px",
        },
        {
            image:src+'b5.jpg',
            height:"692px",
            width:"1038px",
        },
        {
            image:src+'b6.jpg',
            height:"692px",
            width:"519px",
        },
        {
            image:src+'b7.jpg',
            height:"692px",
            width:"519px",
        },
    ]
    
    const [ImageSrc,setImageSrc]=useState("");
    const [imageToShow, setImageToShow] = useState({});
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);

    function showImage(image){
        setImageSrc(image.image);
        setImageToShow(image);
        setLightBoxDisplay(true);
    };
    //hide lightbox
    function hideLightBox(){
    setLightBoxDisplay(false);
    };

    //show next image in lightbox
    const showNext = (e) => {
        e.stopPropagation();
        let currentIndex = images.findIndex((img)=>img.image===ImageSrc);
        if (currentIndex >= images.length - 1) {
            setLightBoxDisplay(false);
        } else {
            let nextImage = images[currentIndex + 1];
            setImageSrc(nextImage.image);
            setImageToShow(nextImage);
        }
    };

    //show previous image in lightbox
    const showPrev = (e) => {
        e.stopPropagation();
        let currentIndex = images.findIndex((img)=>img.image===ImageSrc);
        if (currentIndex <= 0) {
            setLightBoxDisplay(false);
        } else {
            let nextImage = images[currentIndex - 1];
            setImageSrc(nextImage.image);
            setImageToShow(nextImage);
        }
    };


    return(
        <div className="py-[50px]">
            <div className=" container px-2 xl:px-10">
                <h2  className="sm:text-[42px] text-[28px] text-mainBlack font-bold  leading-[120%] text-center mb-6">
                    Our Best Moments</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[20px]">

                    <div>
                            <div className="flex gap-x-6">
                                <div className="relative image-gellary-parent group before:h-[97%]">
                                    <Image src={src+`b1.jpg`} width="900px" height={"1200px"} alt="" className="rounded-[5px]"/>
                                    <span className='image-hover' onClick={() => showImage(images[0])}>
                                    <BiFullscreen className='text-[#fff] text-[28px]'/></span>
                                </div>
                                <div className="relative image-gellary-parent  group before:h-[97%]">
                                    <Image src={src+`b2.jpg`} width="900px" height={"1200px"} alt="" className="rounded-[5px]"/>
                                    <span className='image-hover' onClick={() => showImage(images[1])}>
                                    <BiFullscreen className='text-[#fff] text-[28px]'/></span>
                                </div>
                            </div>
                            
                            <div className="mt-[12px] relative image-gellary-parent  group before:h-[97%]"> 
                                <Image src={src+`b3.jpg`} width="900px" height={"600px"} alt="" className="rounded-[5px]"/>
                                <span className='image-hover' onClick={() => showImage(images[2])}>
                                    <BiFullscreen className='text-[#fff] text-[28px]'/></span>
                            </div>
                    </div>

                    <div>
                        <div className="relative image-gellary-parent group overflow-hidden before:h-[99%]">
                            <Image src={src+`b4.jpg`} width="900px" height={"1200px"} alt="" className="rounded-[5px]"/>
                            <span className='image-hover' onClick={() => showImage(images[3])}>
                                    <BiFullscreen className='text-[#fff] text-[28px]'/></span>
                        </div>
                    </div>

                    <div className="">
                        <div  className="mb-[12px] relative image-gellary-parent group before:h-[97%] ">
                            <Image src={src+`b5.jpg`} width="900px" height={"600px"} alt="" className="rounded-[5px]"/>
                            <span className='image-hover' onClick={() => showImage(images[4])}>
                                    <BiFullscreen className='text-[#fff] text-[28px]'/></span>
                        </div>
                        <div  className="flex gap-x-6">
                            <div className="relative image-gellary-parent group before:h-[97%]">
                                <Image src={src+`b6.jpg`} width="900px" height={"1200px"} alt="" className="rounded-[5px]"/>
                                <span className='image-hover' onClick={() => showImage(images[5])}>
                                    <BiFullscreen className='text-[#fff] text-[28px]'/></span>
                            </div>
                            <div className="relative image-gellary-parent group before:h-[97%]">
                                <Image src={src+`b7.jpg`} width="900px" height={"1200px"} alt="" className="rounded-[5px]"/>
                                <span className='image-hover' onClick={() => showImage(images[6])}>
                                    <BiFullscreen className='text-[#fff] text-[28px]'/></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {
        lightboxDisplay ? 
        <div id="lightbox" onClick={hideLightBox}>
            <button onClick={showPrev} className="prev-gellary flex justify-center items-centers"><IoIosArrowBack/></button>
            <Image id="lightbox-img" src={imageToShow.image} height={imageToShow.height} width={imageToShow.width} alt=""></Image>
            <button onClick={showNext} className="next-gellary flex justify-center items-center"><IoIosArrowForward/></button>
        </div>
    : ""
    }
        </div>
    )
}