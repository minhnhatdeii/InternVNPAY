
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
  const [screen, setScreen] = useState("HomePage");
  const [showSidebar, setShowSidebar] = useState(true);
  const [hideSideBar, setHideSidebar] = useState(false);
  const [resizeHeader, setResizeHeader] = useState(true);
  
  const handleChangeScreen = (newScreen) => {
    console.log(newScreen);
      setScreen(newScreen);
    };
  

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth > 1200);
    };
    const handleHidenSideBar = () => {
      setHideSidebar(window.innerWidth < 800)
    }
    const handleResizeHeader = () => {
      setResizeHeader(window.innerWidth < 800)
    }
    handleResize(); 
    handleHidenSideBar();
    handleResizeHeader();
    
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleHidenSideBar);
    window.addEventListener("resize", handleResizeHeader);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleHidenSideBar);
      window.removeEventListener("resize", handleResizeHeader)
    };
  }, []);
  return (
    <div className="app">
        <Header toggleSideBar={() => setSidebarOpen(!isSidebarOpen)} onNavigate={handleChangeScreen} currentScreen={screen}/>
        {screen === "HomePage" && 
        <div className="main_layout">
          <SideBar isOpen={isSidebarOpen} isExpand={showSidebar} isHiden={hideSideBar} setOpen={setSidebarOpen}/>
          <div className="home-content">
            <CategoryBar isExpand={isSidebarOpen}/>
            <div className="home-content-video">
                <HomePage onNavigate={handleChangeScreen}/> 
            </div>
          </div>
        </div>
        }
        {screen === "WatchPage"  &&
          <div className="main_layout_watch">
            <WatchPage />
          </div>
        }
    </div>
  );
}

export default App;