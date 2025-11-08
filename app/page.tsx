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
          
          <div>
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
            className="text-[30px] font-extrabold mt-5"
          >Silver Way</h4>

          <div 
            className="text-gray-700 mt-2 text-center max-w-[350px] px-5"
          >
            <span>Bienvenue chez Silver Way.</span>
            <p>Chaque bijou raconte votre histoire.Découvrez l'élégance de notre collection de colliers,bracelets et bagues personnalisés. ✨️</p>
            
          </div>


      </div>


    <div className="w-full h-fit flex flex-col justify-center- items-center bg-white-">

      <h4 className="w-full text-center text-xl font-[900] text-gray-900 m-2">Social Media : </h4>
      
      <div className="w-[300px] flex flex-col gap-2">

        {
          socialMedia.map((media) => (
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
          ))
        }
      
      </div>

          <div 
            className="mt-5 flex justify-center items-center gap-4"
          >
            <a
              href="tel:+21690353752"
              className=" border border-[#888] w-12 h-12 p-3- rounded-2xl"
            >
              <img
                src={'/phone.png'}
                className="border-[#888] w-full h-full p-3 rounded-2xl"
              />
            </a>

            <a
              href="mailto:silverwayshop@gmail.com"
              className=" border border-[#888] w-12 h-12 p-3- rounded-2xl"
            >
              <img
                src={'/email.png'}
                className="border-[#888] w-full h-full p-3 rounded-2xl"
              />
            </a>

            <span
              onClick={handleShareClicked}
              className=" border border-[#888] w-12 h-12 p-3- rounded-2xl cursor-pointer"
            >
              <img
                src={'/share.png'}
                className="border-[#888] w-full h-full p-3 rounded-2xl"
              />
            </span>


          </div>


    </div>


    </div>
  );
}
