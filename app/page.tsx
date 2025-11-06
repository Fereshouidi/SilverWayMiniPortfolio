'use client';
import Image from "next/image";
import Bg1 from "./componnents/background_1";
import Bg2 from "./componnents/background_2";
import Pyramid from "./componnents/pyramid";
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialMedia } from "./constants";



export default function Home() {


const handleShareClicked = async () => {
  
  const text = "https://silverway-virid.vercel.app/";

  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
};


  return (

    // <div className="w-full h-screen flex flex-col justify-center items-center bg-white">

    //   <h4 className="text-lg font-bold text-black mb-10">Social Media : </h4>
      
    //   <div className="w-[300px] flex flex-row flex-wrap justify-between items-center gap-5">
    //     <a  
    //       href=""
    //     >
    //       <img 
    //         src="/facebook.avif" 
    //         alt="" 
    //         className="w-7 h-7"
    //       />
    //     </a>
    //   </div>


    // </div>




    <div 
      className="
        flex flex-col min-h-screen bg-[#f2f2f2] text-black
        bg-linear-to-b from-transparent via-[rgba(0,0,0,0.27)] to-[rgba(0,0,0,0.77)]
      "
    >

      <div 
        className="
          relative w-full min-h-[300px] overflow-hidden flex flex-col items-center justify-center pt-5
          
        "
      >
        {/* <div className="w-full h-[100%] relative overflow-hidden flex flex-col items-center bg-gradient-to-r from-purple-500 to-pink-500 to-transparent"> */}
          
          <div
            // initial={{ y: -50, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            // transition={{ duration: 0.8, ease: "easeOut" }}          
          >
            <img 
              src="/favicon.ico" 
              alt="" 
              className="w-24 h-24 mt-10 rounded-full border-2 border-[white]"
              style={{
                boxShadow: '2px 5px 15px #555'
              }}
            />
          </div>
          


          <h4 
            // initial={{ x: -50, opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.8, ease: "easeOut" }}              
            className="text-[30px] font-extrabold mt-5"
          >Silver Way</h4>

          <div 
            // initial={{ x: 50, opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.8, ease: "easeOut" }}  
            className="text-gray-700 mt-2 text-center max-w-[350px] px-5"
          >
            <span>Bienvenue chez Silver Way.</span>
            <p>Chaque bijou raconte votre histoire.Découvrez l'élégance de notre collection de colliers,bracelets et bagues personnalisés. ✨️</p>
            
          </div>



        {/* </div> */}

        {/* <div className="h-fit w-fit absolute top-0 left-[75%] translate-x-[-50%] bg-red-500-">
          <Pyramid/>
        </div>
        <div className="h-fit w-fit absolute top-0 left-[75%] ml-6 translate-x-[-50%] bg-red-500-">
          <Pyramid/>
        </div>
        <div className="h-fit w-fit absolute -top-5 left-[75%] ml-3 translate-x-[-50%] bg-red-500-">
          <Pyramid/>
        </div> */}

        {/* <div className="h-fit w-fit absolute bottom-0 left-[20%] translate-x-[-50%] bg-red-500-">
          <Pyramid/>
        </div>
        <div className="h-fit w-fit absolute bottom-0 left-[20%] ml-6 translate-x-[-50%] bg-red-500-">
          <Pyramid/>
        </div>
        <div className="h-fit w-fit absolute -bottom-5 left-[20%] ml-3 translate-x-[-50%] bg-red-500-">
          <Pyramid/>
        </div> */}

        {/* <div className="absolute top-0 left-0 w-full h-full">
          <Bg1/>
        </div> */}

{/* 
        <video
          src={"/bg-1.webm"}
          autoPlay
          loop
          className="w-full h-full absolute top-0 left-0 bg-blue-400 object-cover- scale-200"
        /> */}

      </div>

      {/* <motion.div className="p-5">

          <motion.h4 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}              
            className="text-lg font-bold mt-5"
          >Bio : </motion.h4>

          <motion.p 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}              
            className="text-gray-800 mt-2 px-2"
          >example example example example example example example example example example example example example example example example example example example example example example .</motion.p>

      </motion.div> */}




    <div className="w-full h-fit flex flex-col justify-center- items-center bg-white-">

      <h4 className="w-full text-center text-xl font-[900] text-gray-900 m-2">Social Media : </h4>
      
      <div className="w-[300px] flex flex-col gap-2">

        {
          socialMedia.map((media) => (
            // <div 
            //   key={media.id}
            //   className=""
            // >
              <a  
                key={media.id}
                href={media.link}
                className={`
                  w-full h-10 flex flex-row rounded-2xl p-7 justify-start items-center gap-2 ${media.bachground}
                  

                `}
                  
                style={{
                  backgroundColor: "",
                }}
              >
                <img 
                  src={media.icon} 
                  alt="" 
                  className="w-8 h-8 ml-[25%] translate-x-[-50%]"
                />
                <p className={`text-white text-lg ${media.label == "TikTok" && "ml-2"}`}>{media.label}</p>
              </a>
            // </div>
          ))
        }
      
      </div>

          <div 
            className="mt-5 flex justify-center items-center gap-4"
          >
            <a
              href="tel:+21690353752"
              className=" border-1 border-[#888] w-12 h-12 p-3- rounded-2xl"
            >
              <img
                src={'/phone.png'}
                className="border-[#888] w-full h-full p-3 rounded-2xl"
              />
            </a>

            <a
              href="mailto:silverwayshop@gmail.com"
              className=" border-1 border-[#888] w-12 h-12 p-3- rounded-2xl"
            >
              <img
                src={'/email.png'}
                className="border-[#888] w-full h-full p-3 rounded-2xl"
              />
            </a>

            <span
              onClick={handleShareClicked}
              className=" border-1 border-[#888] w-12 h-12 p-3- rounded-2xl"
            >
              <img
                src={'/share.png'}
                className="border-[#888] w-full h-full p-3 rounded-2xl"
              />
            </span>


          </div>


    </div>



      {/* <motion.div
        className="w-full h-24 bg-red-500"
      >

      </motion.div> */}




        {/* <div className="absolute top-0 left-30 w-full h-full flex justify-center items-center opacity-20-">
          <Bg1/>
        </div>
        <div className="absolute top-20 -left-20 w-full h-full flex justify-center items-center opacity-20-">
          <Bg1/>
        </div> */}

    </div>
  );
}
