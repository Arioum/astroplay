'use client';
import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './layouts/HomeView';

import './sass/main.scss';

export default function Page(): JSX.Element {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const toggle = () => setToggleSidebar(!toggleSidebar);

  return (
    <>
      <Header sidebarToggle={toggle} />
      <main className='relative top-[60px] flex'>
        <Sidebar
          toggleClassName={toggleSidebar ? 'sidebar' : 'sidebar active'}
          classNameLinks={toggleSidebar ? '' : 'active'}
        />
        <Home />
      </main>
    </>
  );
}
