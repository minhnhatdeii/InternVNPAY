import "../styles/SideBar.css"


function SideBar ({isOpen}){
    
    return (
        <div className={`sidebar ${(isOpen ? ("open") : ("collapsed"))}`}>
            {isOpen ? ( 
                <div className="sidebar.open">
                    <div className="sidebar_item">
                    <img src="/assets/images/2_trangchu.png" alt="Home" />
                    <span>Trang chủ</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_short.png" alt="Shorts" />
                        <span>Shorts</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_kenhdangky.png" alt="Subscription" />
                        <span>Kênh đăng ký</span>
                    </div>
                    <hr/>
                    <div className="sidebar_item">
                        <span className="me_sidebar">Bạn</span>
                        <span className="me_sidebar">{'>'}</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_videodaxem.png" alt="image" />
                        <span>Video đã xem</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_danhsachphat.png" alt="Shorts" />
                        <span>Danh sách phát</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_videocuaban.png" alt="Subscription" />
                        <span>Video của bạn</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_xemsau.png" alt="Shorts" />
                        <span>Xem sau</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_videodathich.png" alt="Subscription" />
                        <span>Video đã thích</span>
                    </div>
                    <hr/>
                    {/* Kenh dang ky */}
                    <span className="title_sidebar">Kênh đăng ký</span>
                    <div className="sidebar_item">
                        <img className="ava_sidebar" src="/assets/images/cr7.jpg" alt="image" />
                        <span>UR Cristiano</span>
                    </div>
                    <div className="sidebar_item">
                        <img className="ava_sidebar" src="/assets/images/mtp.jpg" alt="image" />
                        <span>Sơn Tùng M-TP Official</span>
                    </div>
                    <div className="sidebar_item">
                        <img className="ava_sidebar" src="/assets/images/mrbeast.jpg" alt="image" />
                        <span>MrBeast</span>
                    </div>
                    <div className="sidebar_item">
                        <img className="ava_sidebar" src="/assets/images/mixi.jpg" alt="image" />
                        <span>Mixi Gaming</span>
                    </div>
                    <div className="sidebar_item">
                        <img className="ava_sidebar" src="/assets/images/speed.jpg" alt="image" />
                        <span>IShowSpeed</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_more_icon.png" alt="img" />
                        <span>Thêm</span>
                    </div>
                    <hr/>
                    <span className="title_sidebar">Khám phá</span>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_thinhhanh.png" alt="image" />
                        <span>Thịnh hành</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_amnhac.png" alt="image" />
                        <span>Âm nhạc</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_trochoi.png" alt="image" />
                        <span>Trò chơi</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_mail.png" alt="image" />
                        <span>Tin tức</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_thethao.png" alt="image" />
                        <span>Thể thao</span>
                    </div>
                    <hr/>
                    <span className="title_sidebar">Dịch vụ khác của YouTube</span>
                    <div className="sidebar_item">
                        <img src="/assets/images/1_youtube_logo.png" alt="image" />
                        <span>YouTube Premium</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_youtubestudio.png" alt="image" />
                        <span>YouTube Studio</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_youtubemusic.png" alt="image" />
                        <span>YouTube Music</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_youtubekids.png" alt="image" />
                        <span>YouTube Kids</span>
                    </div>
                    <hr/>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_caidat.png" alt="image" />
                        <span>Cài đặt</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_nhatkybaocao.png" alt="image" />
                        <span>Nhật ký báo cáo</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_trogiup.png" alt="image" />
                        <span>Trợ giúp</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_guiykienphanhoi.png" alt="image" />
                        <span>Gửi ý kiến phản hồi</span>
                    </div>
                    <hr/>
                    <div class="footer-links">
                        <a href="https://about.youtube/">Giới thiệu</a>
                        <a href="https://blog.youtube/">Báo chí</a>
                        <a href="https://www.youtube.com/howyoutubeworks/copyright/">Bản quyền</a>
                        <br/>
                        <a href="https://www.youtube.com/t/contact_us/">Liên hệ với chúng tôi</a>
                        <br/>
                        <a href="https://www.youtube.com/creators/">Người sáng tạo</a>
                        <a href="https://www.youtube.com/ads/">Quảng cáo</a>
                        <br/>
                        <a href="https://developers.google.com/youtube?hl=vi">Nhà phát triển</a>
                        <br/><br/>
                        <a href="https://www.youtube.com/t/terms">Điều khoản</a>
                        <a href="https://policies.google.com/privacy?hl=vi">Quyền riêng tư</a>
                        <br/>
                        <a href="https://www.youtube.com/howyoutubeworks/our-policies/">Chính sách và an toàn</a>
                        <br/>
                        <a href="https://www.youtube.com/howyoutubeworks/?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen">Cách YouTube hoạt động</a>
                        <br/>
                        <a href="https://www.youtube.com/new">Thử các tính năng mới</a>
                        <br/><br/>
                        <span>© 2025 Google LLC</span>
                    </div>
                </div>
            ) : (
                <div className="sidebar.collapse">
                    <div className="sidebar_item_collapse">
                        <img src="/assets/images/2_trangchu.png" alt="image" />
                        <span>Trang chủ</span>
                    </div>
                    <div className="sidebar_item_collapse">
                        <img src="/assets/images/2_short.png" alt="image" />
                        <span>Shorts</span>
                    </div>
                    <div className="sidebar_item_collapse">
                        <img src="/assets/images/2_kenhdangky.png" alt="image" />
                        <span>Kênh đăng ký</span>
                    </div>
                    <div className="sidebar_item_collapse">
                        <img src="/assets/images/2_user.png" alt="image" />
                        <span>Bạn</span>
                    </div>
                </div>
            )}
        </div>
    );
    
}
export default SideBar;