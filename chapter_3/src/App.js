import {Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import SideBar from "./components/layout/SideBar/SideBar";
import Header from "./components/layout/Header/Header";
import CategoryBar from "./components/layout/CategoryBar/CategoryBar";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import WatchPage from "./pages/WatchPage/WatchPage";

import AppRoutes from "./routes/routes";
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1235) {
        setSidebarOpen(false);
      } else {
        if (location.pathname === "/") {
          setSidebarOpen(true);
        } else {
          setSidebarOpen(false);
        }
      }
    };
    
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location.pathname]);

  return (
      <div className="app">
        <Header toggleSideBar={() => setSidebarOpen(!isSidebarOpen)} />
        <AppRoutes isSidebarOpen= {isSidebarOpen} />
      </div>
  );
}

export default App;