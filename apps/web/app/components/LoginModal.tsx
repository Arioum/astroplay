import { useState } from 'react';
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
    borderRadius: '6px',
    backgroundColor: '#202020',
    zIndex: '5',
  },
  overlay: {
    backgroundImage: '#202020',
  },
};

const LoginModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [select, setSelect] = useState(false);

  function selectSignUp() {
    setSelect(true);
  }

  function selectLogin() {
    setSelect(false);
  }

  return (
    <div className='btn-login'>
      <button onClick={openModal}>Sign In or Register</button>
      <div className='modal-bg'>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'
        >
          <div className='modal-container'>
            <div className='modal-header'>
              <div className='signup-prompt'>
                <div className='sign-up'>Join</div>
                <Image
                  src='/astroPlayLogo.svg'
                  alt='AstroPlay'
                  width={160}
                  height={10}
                />
              </div>
              <button className='btn-close' onClick={closeModal}>
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
                  <div className={!select ? 'lognav' : 'lognav active'}>
                    <button className='btn-lognav' onClick={selectSignUp}>
                      Sign Up
                    </button>
                  </div>
                  <div className={select ? 'lognav' : 'lognav active'}>
                    <button className='btn-lognav' onClick={selectLogin}>
                      Log In
                    </button>
                  </div>
                </div>
                <hr className='hr-nav' />
              </div>
              <div className='input-fields-container'>
                {!select ? (
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
                <a href='/' className='social-login-button'>
                  <div className='social-icon'>
                    <Image
                      src='/icons/gmail.svg'
                      alt='icon'
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className='gmail-login-text'>Continue with Gmail</div>
                </a>
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
