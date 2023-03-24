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
        <div className=' sm:py-12 py-8 flex flex-col items-center justify-center h-[600px]'>
          <h1 className='max-w-[1240px] px-2 mb-4 md:text-5xl sm:text-4xl text-2xl font-extrabold mx-auto text-white'>
            YouTube Thumbnail downloader
          </h1>

          <p>
            Free, Fast and Easy Image Downloader - Download Your Favorite Images
            Now!
          </p>
          <div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='p-3 lg:w-[40rem] md:w-[32rem] sm:w-[28rem] w-[18rem] border-2 rounded-md text-black outline-none border-none'
              type='text'
              name='search'
              placeholder='Paste YouTube video URL'
            />
            <button
              onClick={extractVideoId}
              className='bg-[#FF2E00] hover:bg-[#eb360d] ml-2 p-3 w-[200px] rounded-lg my-6 text-black font-bold'
            >
              Search
            </button>
          </div>
          {error && <div className='text-3xl text-[#DE1B55] '>{error}</div>}
          <div className=' mx-auto max-w-[1240px] sm:mt-4 md:mt-12 '>
            <DownloadSection ytimage={ytimage} />
          </div>

          <div className='mt-52 flex items-center justify-center gap-10'>
            <div className='flex flex-col items-center justify-center'>
              <AiOutlineCloudDownload
                color='FF2E00'
                size={50}
              />
              <p className='text-xl'>High-speed downloading</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <AiOutlineSmile
                color='FF2E00'
                size={50}
              />
              <p className='text-xl'>No registration required</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <AiOutlineUnlock
                color='FF2E00'
                size={50}
              />
              <p className='text-xl'>Secure downloading</p>
            </div>
          </div>
        </div>
      </section>
      <section
        id='about'
        className=''
      >
        <div className='flex p-24 items-center justify-around'>
          <div className='flex flex-col gap-5 w-[50%]'>
            <h1 className='text-4xl font-extrabold'>High-speed downloading</h1>
            <p>
              Experience lightning fast downloading with our High-Speed Download
              feature. Say goodbye to long wait times and slow downloads. With
              our state-of-the-art technology, you can download your favorite
              images in no time, allowing you to save time and get more done.
              Say hello to a seamless and efficient downloading experience,
              every time.
            </p>
          </div>

          <AiOutlineCloudDownload
            color='FF2E00'
            size={200}
          />
        </div>

        <div className='flex p-24 items-center justify-between bg-[#FF2E00]'>
          <AiOutlineSmile
            color='ffffff'
            size={200}
          />

          <div className='flex flex-col gap-5 text-white w-[50%]'>
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

        <div className='flex p-24 items-center justify-around '>
          <div className='flex flex-col gap-5 w-[50%]'>
            <h1 className='text-4xl font-extrabold'>Secure Downloading</h1>
            <p>
              Your security is our top priority. With our Secure Download
              feature, you can be assured that your downloading experience is
              safe and secure. Our website is protected with the latest security
              protocols, ensuring that your personal information and downloaded
              images are protected from any malicious attacks. Enjoy a
              worry-free downloading experience with our secure platform.
            </p>
          </div>

          <AiOutlineUnlock
            color='FF2E00'
            size={200}
          />
        </div>
      </section>

      <section id='dmca'>
        <div className='bg-black text-white px-40 py-10'>
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
      </section>
    </>
  );
}
