import "./SideBar.css"
import { useTranslation } from 'react-i18next';

function SideBar ({isOpen, isComponent}){
    const { t, i18n } = useTranslation();
    return (
        <div className={`sidebar ${isOpen ? "open" : "collapsed"}
        ${!isComponent ? "is-component" : ""}`}>
            {isOpen ? ( 
                <div className="sidebar.open">
                    <div className="sidebar_item">
                    <img src="/assets/images/2_trangchu.png" alt="Home" />
                    <span>{t('home')}</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_short.png" alt="Shorts" />
                        <span>{t('shorts')}</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_kenhdangky.png" alt="Subscription" />
                        <span>{t('subscriptions')}</span>
                    </div>
                    <hr/>
                    <div className="sidebar_item">
                        <span className="me_sidebar">{t('you')}</span>
                        <span className="me_sidebar">{'>'}</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_videodaxem.png" alt="image" />
                        <span>{t('history')}</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_danhsachphat.png" alt="Shorts" />
                        <span>{t('playlists')}</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_videocuaban.png" alt="Subscription" />
                        <span>{t('your videos')}</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_xemsau.png" alt="Shorts" />
                        <span>{t('watch later')}</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_videodathich.png" alt="Subscription" />
                        <span>{t('liked videos')}</span>
                    </div>
                    <hr/>
                    {/* Kenh dang ky */}
                    <span className="title_sidebar">{t('subscriptions')}</span>
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
                        <span>{t('show more')}</span>
                    </div>
                    <hr/>
                    <span className="title_sidebar">{t('explore')}</span>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_thinhhanh.png" alt="image" />
                        <span>{t('trending')}</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_amnhac.png" alt="image" />
                        <span>{t('music')}</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_trochoi.png" alt="image" />
                        <span>{t('gaming')}</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_mail.png" alt="image" />
                        <span>{t('news')}</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_thethao.png" alt="image" />
                        <span>{t('sports')}</span>
                    </div>
                    <hr/>
                    <span className="title_sidebar">Dịch vụ khác của YouTube</span>
                    <div className="sidebar_item">
                        <img src="/assets/images/1_youtube_logo.png" alt="image" />
                        <span>{t('youtube premium')}</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_youtubestudio.png" alt="image" />
                        <span>{t('youtube studio')}</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_youtubemusic.png" alt="image" />
                        <span>{t('youtube music')}</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_youtubekids.png" alt="image" />
                        <span>{t('youtube kids')}</span>
                    </div>
                    <hr/>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_caidat.png" alt="image" />
                        <span>{t('settings')}</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_nhatkybaocao.png" alt="image" />
                        <span>{t('report history')}</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_trogiup.png" alt="image" />
                        <span>{t('help')}</span>
                    </div>
                    <div className="sidebar_item">
                        <img src="/assets/images/2_guiykienphanhoi.png" alt="image" />
                        <span>{t('send feedback')}</span>
                    </div>
                    <hr/>
                    <div className="footer-links">
                        <a href="https://about.youtube/">{t('about')}</a>
                        <a href="https://blog.youtube/">{t('press')}</a>
                        <a href="https://www.youtube.com/howyoutubeworks/copyright/">{t('copyright')}</a>
                        <br/>
                        <a href="https://www.youtube.com/t/contact_us/">{t('contact us')}</a>
                        <br/>
                        <a href="https://www.youtube.com/creators/">{t('creators')}</a>
                        <a href="https://www.youtube.com/ads/">{t('advertise')}</a>
                        <br/>
                        <a href="https://developers.google.com/youtube?hl=vi">{t('developers')}</a>
                        <br/><br/>
                        <a href="https://www.youtube.com/t/terms">{t('terms')}</a>
                        <a href="https://policies.google.com/privacy?hl=vi">{t('privacy')}</a>
                        <br/>
                        <a href="https://www.youtube.com/howyoutubeworks/our-policies/">{t('policy & safety')}</a>
                        <br/>
                        <a href="https://www.youtube.com/howyoutubeworks/?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen">{t('how youtube works')}</a>
                        <br/>
                        <a href="https://www.youtube.com/new">{t('test new features')}</a>
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