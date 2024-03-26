import VideoCard from '../components/VideoCard';
import '../sass/main.scss';

export default function Home(): JSX.Element {
  return (
    <main className='homepage'>
      <div className='home-container'>
        <div className='header'>
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </main>
  );
}
