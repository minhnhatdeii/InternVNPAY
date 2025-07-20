import React from 'react';
import SideBar from '../../components/layout/SideBar/SideBar';
import CategoryBar from '../../components/layout/CategoryBar/CategoryBar';
import HomeDisplay from './HomeDisplay';

const HomePage = ({ isSidebarOpen}) => (
  <div className="main_layout">
    <SideBar isOpen={isSidebarOpen} isComponent={true} />
    <div className="home-content">
      <CategoryBar isExpand={isSidebarOpen} />
      <div className="home-content-video">
        <HomeDisplay />
      </div>
    </div>
  </div>
);

export default HomePage;