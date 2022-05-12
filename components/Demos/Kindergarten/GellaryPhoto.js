import Image from 'next/image';
import React , { useState } from 'react';
import {BiFullscreen} from 'react-icons/bi'
import {BsArrowLeft ,BsArrowRight} from 'react-icons/bs'
function GellaryPhoto(){

    const images =
    [
        {
            image:'/Images/kindergarten/about-1.jpg',
            height:"440px",
            width:"376px",
            id:0,
            width2:"519px",
            height2:"692px"
        },
        {
            image:'/Images/kindergarten/about-2.jpg',
            height:"260px",
            width:"376px",
            id:1,
            width2:"800px",
            height2:"600px"
        },
        {
            image:'/Images/kindergarten/about-3.jpg',
            height:"440px",
            width:"376px",
            id:2,
            width2:"800px",
            height2:"692px"
        },
        {
            image:'/Images/kindergarten/about-4.jpg',
            height:"260px",
            width:"376px",
            id:3,
            width2:"519px",
            height2:"692px"
        },
        {
            image:'/Images/kindergarten/about-5.jpg',
            height:"260px",
            width:"376px",
            id:4,
            width2:"519px",
            height2:"692px"
        },
        {
            image:'/Images/kindergarten/about-6.jpg',
            height:"440px",
            width:"376px",
            id:5,
            width2:"519px",
            height2:"592px"
        },
        {
            image:'/Images/kindergarten/about-7.jpg',
            height:"260px",
            width:"376px",
            id:6,
            width2:"800px",
            height2:"600px"
        },
        {
            image:'/Images/kindergarten/about-8.jpg',
            height:"440px",
            width:"376px",
            id:7,
            width2:"800px",
            height2:"600px"
        }
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

    const imageCards = images.map((image) => (
        <div  key={image.id+"ge"} className="relative image-gellary-parent mb-[5px] group"  >
            <Image className="image-card" src={image.image} width={image.width} height={image.height} alt=""/>
            <span className=' absolute w-[40px] h-[35px] rounded-[4px] bg-mainBlack top-[50%] left-[50%] translate-y-[10px] translate-x-[-50%] z-[2] flex
            justify-center items-center cursor-pointer opacity-0 duration-300 group-hover:translate-y-[-50%] group-hover:opacity-100' onClick={() => showImage(image)}>
                <BiFullscreen className='text-[#fff] text-[28px]'/></span>
        </div>
    ));
    return(
        <div className="py-[50px]">
            <div className="container xl:px-10 px-2 overflow-hidden">
            <h3 className="sm:text-[38px] text-[28px] text-mainBlack font-bold mb-[8px] leading-[120%]">Our Lovely Movements</h3>
            <p className=" text-second text-[15px] mb-[20px]">Perceived end knowledge certainly day sweetness why cordially</p>
            <div className='lg:columns-4 md:columns-3 columns-2'>{imageCards}</div>
            {
        lightboxDisplay ? 
        <div id="lightbox" onClick={hideLightBox}>
            <button onClick={showPrev} className="prev-gellary flex justify-center items-centers"><BsArrowLeft/></button>
            <Image id="lightbox-img" src={imageToShow.image} height={imageToShow.height2} width={imageToShow.width2} alt=""></Image>
            <button onClick={showNext} className="next-gellary flex justify-center items-center"><BsArrowRight/></button>
        </div>
    : ""
    }
            </div>
        </div>
    )
}

export default React.memo(GellaryPhoto);