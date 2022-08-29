import React from 'react';
import LoginModal from './LoginModal';

import '../sass/main.scss';

const isLoggedIn = false;
let isNotifications = true;
let userName = 'Amogh';

const Navbar = ({ sidebarToggle }) => {
    return (
        <>
            <div className="navbar navbar-top">
                <div className="left-container">
                    <div className="btn-toggle-sidebar">
                        <button onClick={sidebarToggle}>
                            <img src="/images/sidebar-toggle.svg" alt="" />
                        </button>
                    </div>
                    <div className="logo">
                        <img src="/images/astroPlaylogo.svg" alt="logo" />
                    </div>
                </div>
                <div className="search-container">
                    <div className="search-container-box">
                        <form action="" className="form-search field-search">
                            <input type="search" placeholder="Find anything new today..." id="searchField" />
                            <button type="submit">
                                <img src="/images/icons/search.svg" alt="searchButton" />
                            </button>
                        </form>
                    </div>
                    <div className="">
                        <form action="" className="voice-search field-search">
                            <button type="submit">
                                <img src="/images/icons/microphone.svg" alt="" />
                            </button>
                        </form>
                    </div>
                </div>
                <div className="right-container">
                    <div className="upload-video-button spacing">
                        <img src="/images/icons/upload-video.svg" alt="" />
                    </div>
                    <div className="notifications-button spacing">
                        <div className="notification-bell"><img src="/images/icons/notification.svg" alt="" /></div>
                        {isNotifications && <div className="notification-ping"></div>}
                    </div>
                    <div className="profile-container spacing">
                        <div className="account-login-info">
                            {
                                isLoggedIn === true ? (
                                    <>
                                        <strong>Welcome, {userName}</strong>
                                        <a href="/">View Account settings</a>
                                       
                                    </>
                                ) : (
                                    <>
                                        <LoginModal />
                                    </>
                                )
                            }
                        </div>
                        <div className="account-profile-avatar">
                            <img src="/images/icons/profile.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar;