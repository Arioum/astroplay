import Image from 'next/image';
import Link from 'next/link';
import IconButton from '@repo/ui/icon-button';
import LoginModal from './LoginModal';

const isLoggedIn = false;
let isNotifications = true;
let userName = 'Amogh';

const Header = ({ sidebarToggle }: { sidebarToggle: () => void }) => {
  return (
    <header className='fixed w-[100%] bg-[#1c1c1c] h-[60px] flex items-center justify-between p-[2rem] z-[4]'>
      <div className='flex items-center'>
        <button
          onClick={sidebarToggle}
          className='cursor-pointer active:bg-[#2c2c2c] w-[30px] h-[30px] flex justify-center items-center mr-[2em] border-0 rounded-[10px]'
        >
          <Image
            src='/sidebar-toggle.svg'
            alt=''
            height={40}
            width={40}
            className='w-[20px] flex justify-start items-center'
          />
        </button>
        <Image src='/astroPlaylogo.svg' alt='logo' height={40} width={140} />
      </div>
      <div className='flex items-center gap-[1em]'>
        <form className='w-[500px] h-[40px] p-[0_5px_0_5px] bg-[#3d3d3d] flex items-center rounded-[8px]'>
          <input
            type='search'
            placeholder='Search'
            id='searchField'
            className='bg-transparent w-[100%] h-[100%] border-0 outline-0 flex-1 text-[#fff] text-[1.6rem] m-[0_1em]'
          />
          <IconButton className='bg-[--color-secondary] w-[30px] h-[30px] rounded-[5px] outline-0 border-0 focus:outline-[1px] focus:outline-[--color-secondary]'>
            <Image
              src='/icons/search.svg'
              alt='searchButton'
              width={30}
              height={30}
            />
          </IconButton>
        </form>
        <button
          type='submit'
          className='bg-[#3d3d3d] w-[40px] h-[40px] rounded-[8px] flex items-center justify-center outline-0 border-0 focus:outline-[1px] focus:outline-offset-[-2px] focus:outline-[--color-secondary]'
        >
          <Image src='/icons/microphone.svg' alt='' height={20} width={20} />
        </button>
      </div>
      <div className='flex items-center gap-4'>
        <IconButton className='w-[40px] h-[40px] flex items-center justify-center'>
          <Image src='/icons/upload-video.svg' alt='' height={20} width={24} />
        </IconButton>
        <IconButton className='w-[40px] h-[40px] relative flex items-center justify-center'>
          <Image src='/icons/notification.svg' alt='' height={20} width={18} />
          {isNotifications && (
            <div className='absolute top-[10px] right-[8px] w-[10px] h-[10px] rounded-[10px] outline outline-[3px] outline-[#1c1c1c] bg-[#99ff25]'></div>
          )}
        </IconButton>
        <div className='flex items-center'>
          <div className='text-[#fff] flex flex-col m-[0_1em]'>
            {isLoggedIn ? (
              <>
                <strong className='text-[1.2rem]'>Welcome, {userName}</strong>
                <Link
                  href='/'
                  className='text-[--color-secondary] text-[1.2rem]'
                >
                  View Account settings
                </Link>
              </>
            ) : (
              <LoginModal />
            )}
          </div>
          <Image src='/icons/profile.svg' alt='pfp' height={30} width={30} />
        </div>
      </div>
    </header>
  );
};

export default Header;
