
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import WatchPage from '../pages/WatchPage/WatchPage';


const AppRoutes = ({ isSidebarOpen }) => (
  <Routes>
    <Route
        path="/"
        element={ 
            <HomePage isSidebarOpen={isSidebarOpen}/>
        }
        />

        <Route
        path="/watch/:videoId"
        element={
            <WatchPage isSidebarOpen = {isSidebarOpen}/>
        }
    />
  </Routes>
);

export default AppRoutes;
