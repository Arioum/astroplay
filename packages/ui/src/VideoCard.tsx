const videoDuration = `2:34`;
const videoTitle = `Coding a responsive webpage from start to finish`;
const videoCreator = `Kevin Powell`;
const videoViews = `156K views`;
const uploadDate = `2 months ago`;

const VideoCard = () => {
  return (
    <div className='w-[300px] h-[285px] inline-block'>
      <div className='relative flex rounded-[10px] overflow-hidden'>
        <img src='/thumbnail.png' alt='' width='300' height='100' />
        <div className='absolute bottom-2 right-2 bg-[#000000ce] text-[#fff] text-[1.2rem] font-[600] p-[0.2em_0.6em] rounded-[5px]'>
          {videoDuration}
        </div>
      </div>
      <div className='pt-[0.8em] flex'>
        <div className='mr-[1em]'>
          <img src='/icons/profile.svg' width='35' height='35' alt='avatar' />
        </div>
        <div className='text-[#fff] text-[1.5rem] font-[600]'>
          <div className='max-w-[250px]'>{videoTitle}</div>
          <div className='text-[#c0c0c0] text-[1.4rem] m-[.3em_0_0] font-[600]'>
            {videoCreator}
          </div>
          <div className='flex text-[1.3rem] font-[400] text-[#c0c0c0] gap-3'>
            <div>{videoViews}</div>
            <span>•</span>
            <div>{uploadDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

{
  /* <div className='w-[300px] h-[285px] inline-block'>
      <div className='relative flex rounded-[10px] overflow-hidden'>
        <img src='/thumbnail.png' alt='' width='300' height='100' />
        <div className='absolute bottom-2 right-2 bg-[#000000ce] text-[#fff] text-[1.2rem] font-[600] p-[0.2em_0.6em] rounded-[5px]'>
          {videoDuration}
        </div>
      </div>
      <div className='pt-[0.6em] flex flex-col gap-4'>
        <div className='text-[1.5rem] font-[600] text-[#fff]'>{videoTitle}</div>
        <div className='flex items-center'>
          <div className='mr-[1em]'>
            <img src='/icons/profile.svg' width='30' height='30' alt='avatar' />
          </div>
          <div className='flex flex-col'>
            <div className='flex text-[1.2rem] font-[400] text-[#c0c0c0] gap-6'>
              <div>{videoViews}</div>
              <div>{uploadDate}</div>
            </div>
            <div className='text-[#c0c0c0] text-[1.4rem] font-[500]'>
              {videoCreator}
            </div>
          </div>
        </div>
      </div>
    </div> */
}
