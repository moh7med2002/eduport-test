import {AiOutlineClose} from 'react-icons/ai'
export default function VideosPlay({clicked}){
    return(
        <div className="fixed top-0 z-[1000] w-[100vw] left-0">
            <div className="w-[100%] h-[100vh] bg-[#000000ea] flex justify-center items-center">
            <iframe width="800" height="500" src="https://www.youtube.com/embed/tXHviS-4ygo" 
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
            <button className=' absolute top-[20px] right-[30px] font-bold text-[35px] text-[#6c757d]' onClick={clicked}><AiOutlineClose/></button>
        </div>
        </div>
    )
}