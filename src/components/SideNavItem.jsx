import React from 'react';
import '../sass/main.scss';


const SideNavItem = () => {
  return (
    <div className="sidebar-nav-container">
      {/* <div className={sidebar ? 'side-nav-item active' : 'side-nav-item'}> */}
        {/* <b></b>
          <b></b> */}
        <a className="active" href="/">
          <div className="side-nav-item-icon">
            <img src="/images/icons/home.svg" alt="" />
          </div>
          <div className="side-nav-item-name">
            <p>Home</p>
          </div>
        </a>
      </div>
      <div className="side-nav-item">
        <a className="active" href="/">
          <div className="side-nav-item-icon">
            <img src="/images/icons/terminal-outlined.svg" alt="" />
          </div>
          <div className="side-nav-item-name">
            <p>Astro Live Terminal</p>
          </div>
        </a>
      </div>
      <div className="side-nav-item">
        <a className="active" href="/">
          <div className="side-nav-item-icon">
            <img src="/images/icons/dashboard-outlined.svg" alt="" />
          </div>
          <div className="side-nav-item-name">
            <p>Creators Dashboard</p>
          </div>
        </a>
      </div>
      <div className="side-nav-item">
        <a className="active" href="/">
          <div className="side-nav-item-icon">
            <img src="/images/icons/playlist.svg" alt="" />
          </div>
          <div className="side-nav-item-name">
            <p>Playlist</p>
          </div>
        </a>

      </div>
    </div>
  )
}

export default SideNavItem