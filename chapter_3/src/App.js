import {Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import CategoryBar from "./components/CategoryBar";
import "./App.css";
import HomePage from "./pages/HomePage";
import VideoSuggestCard from "./components/SuggestCard";
import WatchPage from "./pages/WatchPage";


function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1235) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
      <div className="app">
        <Header toggleSideBar={() => setSidebarOpen(!isSidebarOpen)} />
        <Routes>
          <Route
            path="/"
            element={
              <div className="main_layout">
                <SideBar isOpen={isSidebarOpen} />
                <div className="home-content">
                  <CategoryBar isExpand={isSidebarOpen} />
                  <div className="home-content-video">
                    <HomePage />
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/watch/:videoId" element={
            <div className="main_layout_watch">
            <WatchPage />
            </div>
            } />
        </Routes>
      </div>
  );
}

export default App;