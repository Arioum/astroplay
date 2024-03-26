import Image from 'next/image';
import '../sass/main.scss';

const videoDuration = `2:34`;
const videoTitle = `Coding a responsive webpage from start to finish`;
const videoCreator = `Kevin Powell`;
const videoViews = `156K views`;
const uplaodDate = `2 months ago`;

const VideoCard = () => {
  return (
    <div className='card'>
      <div className='video-preview'>
        <Image src='/thumbnail.png' alt='' width='300' height='100' />
        <div className='video-duration'>{videoDuration}</div>
      </div>
      <div className='video-details'>
        <div className='video-profile-picture'>
          <Image src='/icons/profile.svg' width='40' height='40' alt='avatar' />
        </div>
        <div className='video-info'>
          <div className='video-title'>{videoTitle}</div>
          <div className='video-profile-name'>{videoCreator}</div>
          <div className='view-data'>
            <div className='video-views'>{videoViews}</div>
            <div className='video-uploaded-date'>{uplaodDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
