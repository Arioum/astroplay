import Image from 'next/image';
import LoginModal from './LoginModal';

import '../sass/main.scss';

const isLoggedIn = false;
let isNotifications = true;
let userName = 'Amogh';

const Navbar = ({ sidebarToggle }) => {
  return (
    <nav className='navbar navbar-top'>
      <div className='left-container'>
        <div className='btn-toggle-sidebar'>
          <button onClick={sidebarToggle}>
            <Image src='/sidebar-toggle.svg' alt='' height={40} width={40} />
          </button>
        </div>
        <div className='logo'>
          <Image src='/astroPlaylogo.svg' alt='logo' height={40} width={40} />
        </div>
      </div>
      <div className='search-container'>
        <div className='search-container-box'>
          <form action='' className='form-search field-search'>
            <input
              type='search'
              placeholder='Find anything new today...'
              id='searchField'
            />
            <button type='submit'>
              <Image
                src='/icons/search.svg'
                alt='searchButton'
                width={40}
                height={40}
              />
            </button>
          </form>
        </div>
        <div className=''>
          <form action='' className='voice-search field-search'>
            <button type='submit'>
              <Image
                src='/icons/microphone.svg'
                alt=''
                height={20}
                width={20}
              />
            </button>
          </form>
        </div>
      </div>
      <div className='right-container'>
        <div className='upload-video-button spacing'>
          <Image src='/icons/upload-video.svg' alt='' height={20} width={20} />
        </div>
        <div className='notifications-button spacing'>
          <div className='notification-bell'>
            <Image
              src='/icons/notification.svg'
              alt=''
              height={20}
              width={20}
            />
          </div>
          {isNotifications && <div className='notification-ping'></div>}
        </div>
        <div className='profile-container spacing'>
          <div className='account-login-info'>
            {isLoggedIn === true ? (
              <>
                <strong>Welcome, {userName}</strong>
                <a href='/'>View Account settings</a>
              </>
            ) : (
              <>
                <LoginModal />
              </>
            )}
          </div>
          <div className='account-profile-avatar'>
            <Image src='/icons/profile.svg' alt='' height={20} width={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
