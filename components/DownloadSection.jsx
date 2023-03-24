import React, { useEffect, useState } from "react";
// import styled, { createGlobalStyle } from "styled-components";
import {MdDownloadForOffline} from 'react-icons/md'


export const DownloadSection = ({ytimage})=>{
    const [isLoaded,setIsLoaded]=useState(false)
    // console.log(ytimage)
    const [img, setImg] = useState()    
    const handleDownload=()=>{
        console.log("Download image")
    }
    console.log(ytimage)
    useEffect(() => {
      if(ytimage!==null){
        setIsLoaded(true)
        setImg(ytimage)
      }

    }, [ytimage])
    

    return(
    <>
    {
        isLoaded ? 
        <>
        {/* {setImg(ytimage)} */}
        <div onClick={handleDownload} className="sm:px-6 md:gap-4 text-white grid md:grid-cols-2 grid-rows-2 ">
           
            <img className="pl-3 md:max-w-[450px]  sm:max-w-[350px] max-w-[250px]" src={img} alt="img" />
         
            
            <div className="gap-4 flex flex-col justify-center mx-auto text-xl sm:text-2xl md-text-3xl">
            
                <div className="border-white border-2 rounded-lg p-1 cursor-pointer items-center justify-center flex flex-col">
                    <span >High Quality</span><MdDownloadForOffline className="text-red-600"/>
                </div>

                <div className="border-white border-2 rounded-lg p-1 cursor-pointer items-center justify-center flex flex-col">
                    <span>Medium Quality </span><MdDownloadForOffline className="text-red-600" />
                </div>

                <div className="border-white border-2 rounded-lg p-1 cursor-pointer items-center justify-center flex flex-col">
                    <span>Low Quality</span><MdDownloadForOffline className="text-red-600" />
                </div>
            </div>
        
        </div>
        </>
        :
        <>
        <div className="w-full h-[700px]">

        </div>
        </>
    }
  </>
    
        )

}

