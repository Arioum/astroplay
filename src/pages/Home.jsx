import React from 'react';
import VideoCard from '../components/VideoCard';
import '../sass/main.scss';

const Home = () => {
  return (
    <div className="homepage">
      <div className="home-container">
        <div className="header">
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
        </div>
      </div>
    </div>
  )
}

export default Home