import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Modal from 'react-modal';
import '../sass/main.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#202020',
    zIndex: '3',
  },
  overlay: {
    backgroundColor: '#000000b2',
    zIndex: '4',
  },
};

const LoginModal = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [login, setLogin] = useState(false);

  function handleModel() {
    setIsModelOpen(!isModelOpen);
  }

  function handleAuthOptionTab() {
    setLogin(!login);
  }

  return (
    <div className='btn-login'>
      <button
        onClick={handleModel}
        className='text-[--color-secondary] text-[1.2rem] font-[500] bg-transparent border-0 cursor-pointer'
      >
        Sign In or Register
      </button>
      <div className='modal-bg'>
        <Modal
          isOpen={isModelOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={handleModel}
          style={customStyles}
          contentLabel='Example Modal'
        >
          <div className='p-[1rem_2rem_0] flex flex-col gap-[3em]'>
            <div className='flex justify-between'>
              <div className='flex'>
                <div className='text-[2rem] text-[--color-secondary] font-[500] mr-[.8em]'>
                  Join
                </div>
                <Image
                  src='/astroPlayLogo.svg'
                  alt='AstroPlay'
                  width={120}
                  height={10}
                />
              </div>
              <button className='btn-close' onClick={handleModel}>
                <Image
                  src='/icons/close.svg'
                  alt='close'
                  width={15}
                  height={15}
                />
              </button>
            </div>
            <div className='signin-container'>
              <div className=''>
                <div className='btn-option'>
                  <div className={!login ? 'lognav' : 'lognav active'}>
                    <button
                      className='btn-lognav'
                      onClick={handleAuthOptionTab}
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className={login ? 'lognav' : 'lognav active'}>
                    <button
                      className='btn-lognav'
                      onClick={handleAuthOptionTab}
                    >
                      Log In
                    </button>
                  </div>
                </div>
                <hr className='hr-nav' />
              </div>
              <div className='input-fields-container'>
                {!login ? (
                  <>
                    <input
                      type='text'
                      name='userName'
                      id=''
                      placeholder='User Name'
                    />
                    <input
                      type='email'
                      name='userEmail'
                      id=''
                      placeholder='Email'
                    />
                    <input
                      type='password'
                      name='userPassword'
                      id=''
                      placeholder='Password'
                    />
                    <input
                      type='password'
                      name='confirmUserPassword'
                      id=''
                      required
                      placeholder='Confirm Password'
                    />
                  </>
                ) : (
                  <>
                    <input
                      type='text'
                      name='userName'
                      id=''
                      placeholder='User Name'
                    />
                    <input
                      type='email'
                      name='userEmail'
                      id=''
                      placeholder='Email'
                    />
                    <input
                      type='password'
                      name='userPassword'
                      id=''
                      placeholder='Password'
                    />
                  </>
                )}
              </div>
              <span
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: '1.2rem',
                }}
              >
                OR
              </span>

              <div className='gmail-signin'>
                <Link
                  href='/'
                  className='text-[--color-secondary] text-[1.3rem] flex gap-4'
                >
                  <Image
                    src='/icons/gmail.svg'
                    alt='icon'
                    width={20}
                    height={20}
                  />
                  <span>Continue with Gmail</span>
                </Link>
              </div>
            </div>
            <div className='login-redirect-container'>
              <hr className='hr-nav' />
              <div className='login-redirect'>
                Already have an account?
                <a href='/'>Login</a>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default LoginModal;
