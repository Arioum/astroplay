import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Home from '../pages/Home';

import '../sass/main.scss';

const Primary = () => {
    const [toggleSidebar, setToggleSidebar] = useState(true);
    const toggle = () => setToggleSidebar(!toggleSidebar);
    return (
        <div>
            <Navbar sidebarToggle={toggle} />
            <div className="flex">
                <Sidebar
                    toggleClassName={toggleSidebar ? 'sidebar' : 'sidebar active'}
                    classNameLinks={toggleSidebar ? '' : 'active'}
                />
                <Home />
            </div>
        </div>
    )
}

export default Primary