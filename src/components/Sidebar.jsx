import React from 'react';
import { sidebarItemData } from './sidebarItemData';
import '../sass/main.scss';

const Sidebar = ({ toggleClassName, classNameLinks}) => {
    return (
        <>
            <div className={toggleClassName}>
                <div className="sidebar-nav-container">
                    <div className='side-nav-item'>
                        <a className={classNameLinks} href="/">
                            <div className="side-nav-item-icon">
                                <img src="/images/icons/home.svg" alt="" />
                            </div>
                            <div className="side-nav-item-name">
                                <p>Home</p>
                            </div>
                        </a>
                    </div>
                    <div className="side-nav-item">
                        <a className={classNameLinks} href="/">
                            <div className="side-nav-item-icon">
                                <img src="/images/icons/terminal-outlined.svg" alt="" />
                            </div>
                            <div className="side-nav-item-name">
                                <p>Astro Live Terminal</p>
                            </div>
                        </a>
                    </div>
                    <div className="side-nav-item">
                        <a className={classNameLinks} href="/">
                            <div className="side-nav-item-icon">
                                <img src="/images/icons/dashboard-outlined.svg" alt="" />
                            </div>
                            <div className="side-nav-item-name">
                                <p>Creators Dashboard</p>
                            </div>
                        </a>
                    </div>
                    <div className="side-nav-item">
                        <a className={classNameLinks} href="/">
                            <div className="side-nav-item-icon">
                                <img src="/images/icons/playlist.svg" alt="" />
                            </div>
                            <div className="side-nav-item-name">
                                <p>Playlist</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>


            {/* <div className={toggleActive}>
                <div className="sidebar-nav-container">
                    <div className="side-nav-item">
                        {sidebarItemData.map((item, index) => {
                            return (
                                <a key={index} href={item.path}>
                                    <div className="side-nav-item-icon">
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <div className="side-nav-item-name">
                                        <p>{item.title}</p>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Sidebar;