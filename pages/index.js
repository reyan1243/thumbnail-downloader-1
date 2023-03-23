import Head from 'next/head';
// import axios from 'axios';
import { useState } from 'react';
import { DownloadSection } from '../components/DownloadSection'
import Footer  from '../components/Footer'
import NavBar from '../components/NavBar'


const API_KEY = "AIzaSyACPM0TZZr4L2pf4vtgceXtLJlwbQsDOF4"

export default function Home() {
  const [search, setSearch] = useState("")
  const [ytimage, setYtimage] = useState(null)

  const extractVideoId = () => {
    const youtubeRegex =
      /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/;
    const idRegex = /v=([^&]+)/;
    const idRegex2 = /([^&]+)/

    if (!youtubeRegex.test(search)) {
      console.log("regix not valid")

      return null;
    }

    if (search.match(idRegex)) {
      const videoId = search.match(idRegex);
      if (!videoId || videoId.length < 2) {
        console.log("id not valid")
        return null;
      }
      console.log(videoId[1])
      setYtimage(`https://img.youtube.com/vi/${videoId[1]}/mqdefault.jpg`)
      // console.log(ytimage)
      return videoId[1];
    }
    if (search.match(idRegex2)) {
      const videoId = search.match(idRegex2)
      if (!videoId || videoId.length < 2) {
        console.log("id not valid")
        return null;
      }
      console.log(videoId[1])
      let videoId2 = videoId[1].replace("https://youtu.be/", "")
      setYtimage(`https://img.youtube.com/vi/${videoId2}/mqdefault.jpg`)
      // console.log(ytimage)
      return videoId2;
    }

  };



  return (
    <div className='w-full text-white'>
      <NavBar/>
      <div className='sm:py-12 py-8'>
        <h1 className='max-w-[1240px] px-2 mb-4 md:text-5xl sm:text-4xl text-2xl font-extrabold flex justify-center items-center mx-auto text-white'>YouTube Thumbnail downloader</h1>

        <div className="text-white max-w-[1240px] flex flex-col sm:flex-row items-center justify-center mx-auto px-4">

          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            className='p-3 lg:w-[40rem] md:w-[32rem] sm:w-[28rem] w-[18rem] border-2 rounded-md text-white col-span-2'
            type="text"
            name="search"
            id=""
            placeholder='Copy Paste video URL here' />

          <button
            onClick={extractVideoId}
            className='bg-[#00df9a] w-[200px] rounded-md ml-4 my-6 px-6 py-3 text-black font-bold'>
            Search
          </button>

        </div>
        <div className='flex justify-center mx-auto max-w-[1240px] sm:mt-4 md:mt-12 '>
          <DownloadSection ytimage={ytimage} />
        </div>
      </div>
      <Footer/>
    </div>
  )
}
