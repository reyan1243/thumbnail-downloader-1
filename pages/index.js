import { useState } from 'react';
import { DownloadSection } from '../components/DownloadSection';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import {
  AiOutlineCloudDownload,
  AiOutlineUnlock,
  AiOutlineSmile,
} from 'react-icons/ai';

export default function Home() {
  const [search, setSearch] = useState('');
  const [ytimage, setYtimage] = useState(null);
  const [error, setError] = useState(null);

  const extractVideoId = () => {
    const youtubeRegex =
      /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/;
    const idRegex = /v=([^&]+)/;
    const idRegex2 = /([^&]+)/;

    if (!youtubeRegex.test(search)) {
      setError('ID not valid');

      return null;
    }

    if (search.match(idRegex)) {
      const videoId = search.match(idRegex);
      if (!videoId || videoId.length < 2) {
        setError('ID not valid');
        return null;
      }
      console.log(videoId[1]);
      setYtimage(`https://img.youtube.com/vi/${videoId[1]}/mqdefault.jpg`);

      return videoId[1];
    }
    if (search.match(idRegex2)) {
      const videoId = search.match(idRegex2);
      if (!videoId || videoId.length < 2) {
        setError('ID not valid');
        return null;
      }

      let videoId2 = videoId[1].replace('https://youtu.be/', '');

      setYtimage(`https://img.youtube.com/vi/${videoId2}/mqdefault.jpg`);

      return videoId2;
    }
  };

  return (
    <>
      {/* Home */}
      <section
        className='home w-full text-white'
        id='home'
      >
        <NavBar />
        <div className={ytimage === null ? "sm:py-32 py-4 flex flex-col items-center justify-center mx-auto" :"sm:py-12 py-3 flex flex-col items-center justify-center mx-auto"}>
          <h1 className='max-w-[1240px] px-2 mb-4 ld:text-5xl md:text-4xl sm:3xl text-2xl sm:mx-auto ml-6 font-extrabold text-center text-white'>
            YouTube Thumbnail downloader
          </h1>
          
          <div className='flex sm:flex-row flex-col items-center text-center'>
          <p className='px-4'>
            Free, Fast and Easy Image Downloader 
          </p>
          <p className='sm:block hidden'>-</p>
          <p className='px-4'>
            Download Your Favorite Images
            Now!
          </p>
          </div>

          <div className='text-white max-w-[1240px] flex flex-col sm:flex-row items-center justify-center mx-auto sm:py-2 py-1 px-4'>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='p-3 lg:w-[40rem] md:w-[32rem] sm:w-[25rem] w-[17rem] border-2 rounded-md text-black outline-none border-none'
              type='text'
              name='search'
              placeholder='Paste YouTube video URL'
            />
            <button
              onClick={extractVideoId}
              className='bg-[#FF2E00] hover:bg-[#eb360d] ml-2 p-3 w-[200px] rounded-lg sm:my-6 my-4 text-black font-bold'
            >
              Search
            </button>
          </div>

          {/* {error && <div className='text-3xl text-[#DE1B55] '>{error}</div>} */}

          <div className=' mx-auto max-w-[1240px]  sm:mt-2 md:mt-12 mt-[0.2rem]'>
            <DownloadSection ytimage={ytimage} />
          </div>

          
          {ytimage === null?
            <div className='w-full  md:mt-[4rem] lg:mt-[6.5rem] sm:mt-[8rem] mt-[8.8rem]'>
          <div className='max-w-[1240px] mx-auto sm:text-xl text-sm font-bold md:text-2xl flex items-center justify-center  sm:gap-10 gap-2 px-1 '>
              <div className='grid grid-rows-2 text-center  items-center justify-center'>
              <AiOutlineCloudDownload
                color='FF2E00'
                className='flex mx-auto'
                size={50}
              />
              <p >High-speed downloading</p>
            </div>

                <div className='grid grid-rows-2 text-center items-center justify-center'>
              <AiOutlineSmile
                color='FF2E00'
                className='flex mx-auto'
                size={50}
              />
              <p>No registration required</p>
            </div>

                <div className='grid grid-rows-2 text-center items-center justify-center'>
              <AiOutlineUnlock
                color='FF2E00'
                    className='flex mx-auto'
                size={50}
              />
              <p>Secure downloading</p>
            </div>
          </div>
          </div>

          :
          <></>
          }

        </div>
      </section>
      <section
        id='about'
        className=''
      >
        <div className='w-full '>
          <div className='max-w-[1240px] mx-auto justify-center items-center sm:grid sm:grid-cols-3 py-20 px-12'>
            <div className='mx-auto p-4 col-span-2 flex flex-col justify-center items-center'>
              <h1 className=' sm:text-4xl text-3xl font-extrabold'>High-speed downloading</h1>
              <p>
                Experience lightning fast downloading with our High-Speed Download
                feature. Say goodbye to long wait times and slow downloads. With
                our state-of-the-art technology, you can download your favorite
                images in no time, allowing you to save time and get more done.
                Say hello to a seamless and efficient downloading experience,
                every time.
              </p>
            </div>
            <div className='text-[10rem] flex items-center justify-center'>
            <AiOutlineCloudDownload
              color='FF2E00'
            />
            </div>

          </div>
        </div>

        <div className='w-full bg-[#FF2E00]'>
            <div className='max-w-[1240px] mx-auto justify-center items-center sm:grid sm:grid-cols-3 py-28 px-16'>
            <div className='text-[10rem] flex justify-center items-center'>
                <AiOutlineSmile
                color='ffffff'
                />
              </div>

            <div className='mx-auto p-4 col-span-2 flex flex-col justify-center items-center text-white'>
                <h1 className='text-4xl font-extrabold'>
                  No-Registration Required
                </h1>
                <p>
                  Say goodbye to the hassle of registering for an account just to
                  download images. Our website is designed to provide an effortless
                  and convenient experience to our users. With our 'No Registration
                  Required' feature, you can directly download images without any
                  added steps. Simply search, preview and download - it's that easy!
                </p>
              </div>
            </div>
        </div>

        <div className='w-full'>
        <div className='max-w-[1240px] mx-auto justify-center items-center sm:grid sm:grid-cols-3 py-20 px-16'>
            <div className='mx-auto p-4 col-span-2 flex flex-col justify-center items-center'>
              <h1 className='sm:text-4xl text-3xl font-extrabold'>Secure Downloading</h1>
            <p>
              Your security is our top priority. With our Secure Download
              feature, you can be assured that your downloading experience is
              safe and secure. Our website is protected with the latest security
              protocols, ensuring that your personal information and downloaded
              images are protected from any malicious attacks. Enjoy a
              worry-free downloading experience with our secure platform.
            </p>
          </div>

            <div className='text-[10rem] flex justify-center items-center'>
          <AiOutlineUnlock
            color='FF2E00'
            />
          </div>
        </div>
        </div>
      </section>

      <section id='dmca'>
        <div className='w-full bg-black text-white'>
          <div className='max-w-[1240px] mx-auto justify-center items-center px-16 py-10'>
          <h1 className='text-5xl font-bold text-center'>DMCA</h1>
          <p className='my-5'>
            You are solely responsible for the data (e.g. URLs) that you send to
            the Youtube Thumbnail image service. Please be aware that illegal
            exchanges of recordings and protected works, as well as hacking, can
            harm artistic creation. It is also important to respect the laws
            regarding intellectual and artistic property, as failure to do so
            can lead to legal action.
          </p>

          <p className='my-5'>
            The Youtube Thumbnail image service is intended for personal use
            (i.e. "fair use") to download Youtube video thumbnails. Any further
            use of the downloaded content, including making it publicly
            accessible or using it for commercial purposes, must be agreed upon
            with the holder of the respective content's rights. You are fully
            responsible for all actions related to the data transmitted by the
            Youtube Thumbnail image service. The service provider only acts as a
            technical service provider and does not grant any rights to the
            contents.
          </p>

          <p className='my-5'>
            It is your responsibility to ensure the legitimacy of your use of
            the Youtube Thumbnail image service. The legality of using this
            service may vary depending on the laws of your country. The service
            provider is not liable for any permissibility issues related to
            downloading content through the service.
          </p>

          <p className='my-5'>
            The Youtube Thumbnail image service is a free service and does not
            offer any guarantees of any kind. The service provider reserves the
            right to change or discontinue any of the services at any time.
            Legal proceedings, if applicable, shall take place in the
            appropriate venue. If you have any issues, please contact the
            service provider.
          </p>
        </div>
        </div>
      </section>
    </>
  );
}
