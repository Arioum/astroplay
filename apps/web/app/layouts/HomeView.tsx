import VideoCard from '@repo/ui/VideoCard';

export default function Home() {
  return (
    <main className='bg-[#0B0B0B] w-[100%] flex max-h-[calc(100vh-60px)]'>
      <div className=''>
        <div className='m-[4em] flex flex-wrap gap-[2em]'>
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
