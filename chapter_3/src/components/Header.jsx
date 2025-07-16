import "../styles/Header.css"
import { useNavigate } from "react-router-dom";

function Header({toggleSideBar}) {
    const navigate = useNavigate();

    return (
        <header className="header">
            {/* Left section */}
            <div className="left_section" >
                <button className="menu_button" onClick={toggleSideBar}>
                    <img className="menu_img" src="/assets/images/1_menu.png" alt="image"></img>
                </button>
                <button className="logo_icon" onClick={() => navigate("/")}>
                    <img className="logo_img" src="/assets/images/1_youtube_logo.png" alt="image"></img>
                    <div className="title_header">
                        <h1 className="title">YouTube</h1>
                        <span className="region">VN</span>
                    </div>
                </button>
            </div>
            {/* Search section */}
            <div className="center_section">
                <div className="search_container">
                    <input type="input" placeholder="Tìm Kiếm"/>
                    <div className="icon_search">
                        <button className="keyboard_button">
                            <img className="keyboard_img" src="/assets/images/1_keyboard.png"></img>
                        </button>
                        <button className="search_button">
                            <img className="search_img" src="/assets/images/1_search-icon.png"></img>
                        </button>
                    </div>
                    
                </div>
                <button className="micro_btn">
                        <img className="micro_img" src="/assets/images/1_audio.png"/>
                </button>
            </div>
            {/* Right section */}
            <div className="right_section">
                <button className="plus_btn"> 
                    <div className="plus_content">
                        <img className="plus_img" src="/assets/images/1_plus.png"/> 
                        <span>Tạo</span>
                    </div>
                </button>
                <button className="bell_btn">
                <img className="bell_img" src="/assets/images/1_notification.png" /></button>
                <img
                    src="https://i.pravatar.cc/40"
                    alt="Avatar"
                    className="avatar"
                />
            </div>
        </header>
    );
}

export default Header;