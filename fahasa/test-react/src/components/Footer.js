import "../styles/Footer.css"

export default function Footer() {
    return (
        <div class="Footer">
            <div class="footer-header">
                <div class="footer-header-title">
                    <span class="fa fa-envelope-o"></span>
                    <span class="footer-header-text">ĐĂNG KÝ NHẬN BẢN TIN</span>
                </div>

                <div class="email-input-wrapper">
                    <input class="email-input" type="text" placeholder="Nhập địa chỉ email của bạn"></input>
                    <button class="email-submit">Đăng ký</button>
                </div>
            </div>
            <div class="footer-body">
                <div class="footer-body-left">
                    <div class="footer-body-left-container">
                        <div class="logo-big">
                            <img src="https://fahasa.com/skin/frontend/ma_vanese/fahasa/images/logo.png" alt=""></img>
                        </div>
                        <div class="information">
                            <div class="address">Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM<br></br>
                                Công Ty Cổ Phần Phát Hành Sách TP HCM - FAHASA<br />
                                60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam
                            </div>
                            <div class="notice">
                                Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. <br></br>
                                KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống
                                Fahasa
                                trên toàn quốc.
                            </div>
                        </div>
                        <div class="verifed-img">
                            <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/logo-bo-cong-thuong-da-thong-bao1.png"
                                alt="" class="bo-cong-thuong-img" />
                        </div>
                        <div class="social-media-icon">
                            <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/footer/Facebook-on.png"
                                alt="" class="facebook-icon" />
                            <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/Insta-on.png"
                                alt="" class="insta-icon" />
                            <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/Youtube-on.png"
                                alt="" class="youtube-icon" />
                            <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/tumblr-on.png"
                                alt="" class="tumblr-icon" />
                            <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/twitter-on.png"
                                alt="" class="twitter-icon" />
                            <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/pinterest-on.png"
                                alt="" class="pinterest-icon" />
                        </div>
                        <div class="online-store-img">
                            <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/android1.png" alt=""
                                class="play-store-img store-img" />
                            <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/appstore1.png" alt=""
                                class="app-store-img store-img" />
                        </div>
                    </div>
                </div>
                <div class="footer-body-right">
                    <div class="footer-menu">
                        <div class="footer-menu-col1">
                            <span class="fmenu-heading">DỊCH VỤ</span>
                            <div class="fmenu-content">
                                Điều khoản dịch vụ<br />
                                Chính sách bảo mật thông tin cá nhân<br />
                                Chính sách bảo mật thanh toán<br />
                                Giới thiệu Fahasa<br />
                                Hệ thống trung tâm - nhà sách
                            </div>
                        </div>
                        <div class="footer-menu-col2">
                            <span class="fmenu-heading">HỖ TRỢ</span>
                            <div class="fmenu-content">
                                Chính sách đổi - trả - hoàn tiền<br />
                                Chính sách bảo hành - bồi hoàn<br />
                                Chính sách vận chuyển<br />
                                Chính sách khách sỉ<br />
                                Phương thức thanh toán và xuất HĐ
                            </div>
                        </div>
                        <div class="footer-menu-col3">
                            <span class="fmenu-heading">TÀI KHOẢN CỦA TÔI</span>
                            <div class="fmenu-content">
                                Đăng nhập/Tạo mới tài khoản<br />
                                Thay đổi địa chỉ khách hàng<br />
                                Chi tiết tài khoản<br />
                                Lịch sử mua hàng<br />
                            </div>
                        </div>
                    </div>
                    <div class="footer-contact">
                        <div class="contact-title fmenu-heading">LIÊN HỆ</div>
                        <div class="contact-infor">
                            <div class="contact-address">
                                <span class="fa fa-map-marker"></span>
                                <span>60-62 Lê Lợi, Q 1, TP.HCM</span>
                            </div>
                            <div class="contact-mail">
                                <span class="fa fa-envelope"></span>
                                <span>cskh@fahasa.com.vn</span>
                            </div>
                            <div class="contact-number">
                                <span class="fa fa-phone"></span>
                                <span>1900636467</span>
                            </div>
                        </div>
                    </div>
                    <div class="footer-sponsor">
                        <div class="sponsor-img-container">
                            <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/vnpost1.png" alt="" style={{ width: 100 + 'px' }} />
                        </div>
                        <div class="sponsor-img-container">
                            <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/ahamove_logo3.png" alt="" width="160px" />
                        </div>
                        <div class="sponsor-img-container">
                            <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/icon_giao_hang_nhanh1.png" alt=""
                                width="150px" />
                        </div>
                        <div class="sponsor-img-container">
                            <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/icon_snappy1.png" alt="" width="150px" />
                        </div>
                        <div class="sponsor-img-container">
                            <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/Logo_ninjavan.png" alt="" width="150px" />
                        </div>
                        <div class="sponsor-img-container">
                            <img style={{ maxWidth: 120 + 'px' }}
                                src="https://cdn0.fahasa.com/media//wysiwyg/Logo-NCC/vnpay_logo.png" alt="" />
                        </div>
                        <div class="sponsor-img-container">
                            <img style={{ maxWidth: 120 + 'px' }}
                                src="https://cdn0.fahasa.com/media//wysiwyg/Logo-NCC/ZaloPay-logo-130x83.png" alt="" />
                        </div>
                        <div class="sponsor-img-container">
                            <img style={{ height: 50 + 'px' }}
                                src="https://cdn0.fahasa.com/media//wysiwyg/Logo-NCC/momopay.png" alt="" />
                        </div>
                        <div class="sponsor-img-container">
                            <img style={{ height: 44 + 'px' }}
                                src="https://cdn0.fahasa.com/media//wysiwyg/Logo-NCC/shopeepay_logo.png" alt="" />
                        </div>
                        <div class="sponsor-img-container">
                            <img style={{ height: 65 + 'px' }}
                                src="https://cdn0.fahasa.com/media//wysiwyg/Logo-NCC/logo_moca_120.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-certificate">
                Giấy chứng nhận Đăng ký Kinh doanh số 0304132047 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày
                20/12/2005, đăng ký thay đổi lần thứ 10, ngày 20/05/2022.
            </div>
        </div>
    )
}