import React from 'react'
import { AiOutlineFacebook, AiOutlineMail } from "react-icons/ai"
import {BsInstagram, BsWhatsapp} from "react-icons/bs"
import {RxTwitterLogo} from "react-icons/rx"


const Footer = () => {
    return (
        <>
            <div className='text-white max-w-[1340px] flex justify-center items-center mx-auto bottom-0'>
            <div className='p-2 gap-4 grid sm:grid-cols-2'>
                <div className='gap-6 flex flex-col mx-auto  items-center'>
                        <h2 className='font-bold md:text-xl sm:text-lg text-sm'>Get connected with us on social networks:</h2>
                    <div className='text-[2.2rem] flex  gap-4'>
                        <AiOutlineMail />
                        <AiOutlineFacebook />
                        <RxTwitterLogo />
                        <BsInstagram />
                        <BsWhatsapp />
                    </div>
                </div>

                    <div className='gap-4 flex flex-col mx-auto items-center sm:px-6 px-3'>
                        <h2 className='font-bold md:text-xl sm:text-lg text-sm'>About us</h2>
                            <p>Welcome to YouTube Thumbnail Downloader, the ultimate tool for creators who need quick and easy access to high-quality YouTube thumbnails. We understand how important it is to have eye-catching thumbnails for your videos, which is why we've created a simple and user-friendly platform to help you download them in just a few clicks.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer

