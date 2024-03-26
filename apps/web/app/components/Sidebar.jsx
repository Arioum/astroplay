import Image from 'next/image';
import { sidebarItemData } from './sidebarItemData';
import '../sass/main.scss';

const Sidebar = ({ toggleClassName, classNameLinks }) => {
  return (
    <>
      <div className={toggleClassName}>
        <div className='sidebar-nav-container'>
          <div className='side-nav-item'>
            <a className={classNameLinks} href='/'>
              <div className='side-nav-item-icon'>
                <Image src='/icons/home.svg' alt='' width={20} height={20} />
              </div>
              <div className='side-nav-item-name'>
                <p>Home</p>
              </div>
            </a>
          </div>
          <div className='side-nav-item'>
            <a className={classNameLinks} href='/'>
              <div className='side-nav-item-icon'>
                <Image
                  src='/icons/terminal-outlined.svg'
                  alt=''
                  width={20}
                  height={20}
                />
              </div>
              <div className='side-nav-item-name'>
                <p>Astro Live Terminal</p>
              </div>
            </a>
          </div>
          <div className='side-nav-item'>
            <a className={classNameLinks} href='/'>
              <div className='side-nav-item-icon'>
                <Image
                  src='/icons/dashboard-outlined.svg'
                  alt=''
                  width={20}
                  height={20}
                />
              </div>
              <div className='side-nav-item-name'>
                <p>Creators Dashboard</p>
              </div>
            </a>
          </div>
          <div className='side-nav-item'>
            <a className={classNameLinks} href='/'>
              <div className='side-nav-item-icon'>
                <Image
                  src='/icons/playlist.svg'
                  alt=''
                  width={20}
                  height={20}
                />
              </div>
              <div className='side-nav-item-name'>
                <p>Playlist</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
