'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './home/page';

import './sass/main.scss';

export default function Page(): JSX.Element {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const toggle = () => setToggleSidebar(!toggleSidebar);

  return (
    <main className=''>
      <Navbar sidebarToggle={toggle} />
      <div className='flex'>
        <Sidebar
          toggleClassName={toggleSidebar ? 'sidebar' : 'sidebar active'}
          classNameLinks={toggleSidebar ? '' : 'active'}
        />
        <Home />
      </div>
    </main>
  );
}
