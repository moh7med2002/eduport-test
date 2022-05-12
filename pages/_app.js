import Footer from '../components/Footer'
import Navbar from '../components/Nav/Navbar'
import {AiOutlineArrowUp} from 'react-icons/ai'
import '../styles/globals.css'
import { useEffect, useState } from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  const [showBtn,setShowBtn]=useState(false);

  function handleScrollClick(){
    if(typeof window!=="undefined"){
        window.scrollTo(
          {
            top: 0,
            left: 0,
            behavior: 'smooth'
          }
        )
  }
}

  useEffect(()=>{
      if(typeof window!=="undefined"){
        window.addEventListener('scroll',checkScroll);
        return ()=> window.removeEventListener("scroll",checkScroll);
      }
  },[checkScroll])

  function checkScroll(){
    if(typeof window!=="undefined"){
      if(window.scrollY>300){
        setShowBtn(true);
      }
      else{
        setShowBtn(false);
      }
    }
  }

  return (
    <>
    <Head>
          <meta charSet="UTF-8"/>
          <meta name="description" content="Free Web tutorials"/>
          <meta name="keywords" content="React Js, NextJs"/>
          <meta name="author" content="Mohammed Hesham"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Beau+Rivage&family=Cairo:wght@300;700&family=Heebo:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head> 
    <div className=' relative'>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>

      <AnimatePresence>
      {showBtn &&
      <motion.button className=' fixed right-[10px] bottom-[40px] z-[10] bg-blue md:w-[50px] md:h-[50px] rounded flex w-[40px] h-[40px]
      justify-center items-center duration-300 hover:bg-[#d6293e]'  onClick={handleScrollClick}
      initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2,duration:0.5}} exit={{opacity:0 , transition:{duration:0.3}}}>
       <AiOutlineArrowUp className='text-[20px] text-[#fff]  font-bold'/>
     </motion.button>
     }
      </AnimatePresence>
    </div>
    </>
  )
}

export default MyApp
