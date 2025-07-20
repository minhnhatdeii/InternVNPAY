// WatchLayout.jsx
import React from 'react';
import SideBar from '../../components/layout/SideBar/SideBar';
import WatchDisplay from './WatchDisplay';

const WatchPage = ({ isSidebarOpen}) => (
  <div className="main_layout">
    <SideBar isOpen={isSidebarOpen} isComponent={false} />
    <div className="main_layout_watch">
      <WatchDisplay/>
    </div>
  </div>
);

export default WatchPage;
