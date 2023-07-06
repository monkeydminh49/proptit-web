import '../styles/Header.css'

function Advertisement() {
    const adImg = "https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2023/Fahasasalethu3_Bo1_header_1263x60.jpg"
    return (
        <div className="fahasa-sale-ad">
            <img src={adImg} alt=""
                className="fahasa-sale-img"></img>
        </div>
    )
}

function Navigation() {
    return (
        <div className="nav-wrapper">
            <div className="logo cursor-pointer">
                <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/logo.png" alt=""></img>
            </div>
            <div className="menu-icon cursor-pointer">
                <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_menu.svg" alt="" srcset=""></img>
                <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/icon_seemore_gray.svg" alt=""></img>
            </div>
            <div className="dropdown-content" style={{ display: 'none' }}>
                <div className="menu-content-wrapper">
                    <div className="list-title">
                        <div className="list-title-heading">Danh mục sản phẩm</div>
                        <div className="vertical-menu">
                            <div className="title">
                                <span className="title-text">Sách Trong Nước</span>
                            </div>
                            <div className="title">
                                <span className="title-text">FOREIGN BOOKS</span>
                            </div>
                            <div className="title">
                                <span className="title-text">VPP - Dụng Cụ Học Sinh</span>
                            </div>
                            <div className="title">
                                <span className="title-text">Đồ Chơi</span>
                            </div>
                            <div className="title">
                                <span className="title-text">Làm đẹp - Sức khỏe</span>
                            </div>
                            <div className="title">
                                <span className="title-text">Hành Trang Đến Trường</span>
                            </div>
                            <div className="title">
                                <span className="title-text">VPP - DCHS Theo Thương Hiệu</span>
                            </div>
                            <div className="title">
                                <span className="title-text">Đồ Chơi Theo Thương Hiệu</span>
                            </div>
                            <div className="title">
                                <span className="title-text">Bách Hóa Online - Lưu Niệm</span>
                            </div>
                        </div>
                    </div>
                    <div className="menu-content">
                        <div className="menu-content-item menu-content-item2">
                            <div className="menu-title">
                                <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/category/ico_foreignbooks.svg"
                                    alt="" className="menu-title-icon"></img>
                                <div className="menu-title-text">FOREIGN BOOKS</div>
                            </div>
                            <div className="menu-grid">
                                <div className="menu-grid-item">
                                    <div className="grid-item-title">FICTION</div>
                                    <div className="">
                                        <a href="./contemporary-fiction/" style={{ textDecoration: null }}
                                            className="grid-item-content">Contemporary Fiction</a>
                                    </div>
                                    <div className="grid-item-content">Romance</div>
                                    <div className="grid-item-content">Fantasy</div>
                                    <div className="grid-item-content">Classics</div>
                                    <div className="grid-item-view-all">
                                        <a href="./" style={{ textDecoration: null }}>Xem tất cả</a>
                                    </div>
                                </div>
                                <div className="menu-grid-item">
                                    <div className="grid-item-title">BUSINESS & MANAGEMENT</div>
                                    <div className="grid-item-content">Business & Management</div>
                                    <div className="grid-item-content">Economics</div>
                                    <div className="grid-item-content">Fantasy</div>
                                    <div className="grid-item-view-all">
                                        <a href="./" style={{ textDecoration: null }}>Xem tất cả</a>
                                    </div>
                                </div>
                                <div className="menu-grid-item">
                                    <div className="grid-item-title">PERSONAL DEVELOPMENT</div>
                                    <div className="grid-item-content">Popular Psychology</div>
                                    <span className="grid-item-content">Advice On Careers & Achieving Success</span>
                                    <div className="grid-item-content">Personal Finance</div>
                                    <div className="grid-item-view-all">
                                        <a href="./" style={{ textDecoration: null }}>Xem tất cả</a>
                                    </div>
                                </div>
                                <div className="menu-grid-item">
                                    <div className="grid-item-title">FICTION</div>
                                    <div className="grid-item-content">Contemporary</div>
                                    <div className="grid-item-content">Romance</div>
                                    <div className="grid-item-content">Fantasy</div>
                                    <div className="grid-item-content">Classics</div>
                                </div>
                                <div className="menu-grid-item">
                                    <div className="grid-item-title">FICTION</div>
                                    <div className="grid-item-content">Contemporary</div>
                                    <div className="grid-item-content">Romance</div>
                                    <div className="grid-item-content">Fantasy</div>
                                    <div className="grid-item-content">Classics</div>
                                </div>
                                <div className="menu-grid-item">
                                    <div className="grid-item-title">FICTION</div>
                                    <div className="grid-item-content">Contemporary</div>
                                    <div className="grid-item-content">Romance</div>
                                    <div className="grid-item-content">Fantasy</div>
                                    <div className="grid-item-content">Classics</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="dropdown-cover" style={{ display: 'none' }}></div>
            <div className="search-bar-wrapper">
                <div className="search-bar">
                    <div className="search-area">
                        <input type="text" placeholder="Tìm kiếm sản phẩm mong muốn..."></input>
                    </div>
                    <div className="search-button cursor-pointer">
                        <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_search_white.svg"
                            alt=""></img>
                    </div>
                </div>
            </div>

            <div className="items-wrapper">
                <div className="items">
                    <div className="item cursor-pointer">
                        <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_noti_gray.svg"
                            alt=""></img>
                        <span className="item-text">Thông báo</span>
                    </div>
                    {/* <div className="dropdown-noti">
                                <div className="noti-heading">
                                    <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_noti_black.svg"
                                        alt="" className="noti-heading-icon">
                                        <span className="noti-heading-text">Thông báo</span>
                                </div>
                            </div>  */}

                    <div className="item cursor-pointer">
                        <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_cart_gray.svg"
                            alt=""></img>
                        <span className="item-text">Giỏ hàng</span>
                    </div>
                    <div className="item cursor-pointer">
                        <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_account_gray.svg"
                            alt=""></img>
                        <span className="item-text">Tài khoản</span>
                    </div>
                    <div className="language-changer cursor-pointer">
                        <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/default.svg" alt=""></img>
                        <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/icon_seemore_gray.svg"
                            alt=""></img>
                    </div>
                </div>
            </div>
        </div >
    )
}

function NavigationMobile() {
    return (
        <div className="nav-mobile-wrapper">
            <div className="logo-mobile">
                <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png" alt=""
                    className="logo-mobile-icon"></img>
            </div>
            <div className="search-bar-mobile-wrapper">
                <div className="mobile-menu">
                    <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_menu_white.svg" alt=""
                        className="mobile-menu-icon"></img>
                </div>
                <div className="mobile-search-input-wrapper">
                    <input type="text" placeholder="Tìm kiếm sản phẩm mong muốn..."></input>
                </div>
                <div className="mobile-cart">
                    <img src="https://cdn0.fahasa.com/skin/frontend/base/default/images/ico_shopping_cart_white.svg"
                        alt="" className="mobile-cart-icon"></img>
                </div>
                <div className="mobile-customer">
                    <img src="https://cdn0.fahasa.com/skin/frontend/base/default/images/ico_thongtintk.svg" alt=""
                        className="mobile-customer-icon"></img>
                </div>
            </div>
        </div>
    )
}

export default function Header() {
    return (
        <div className="Header">
            <Advertisement />
            <Navigation />
            <NavigationMobile />
        </div>
    )
}
