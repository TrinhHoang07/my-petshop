import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { useEffect } from 'react';
import { LayoutProfile } from '../../components/Layout/LayoutProfile';
import { Dropdown } from 'primereact/dropdown';
import img from '../../assets/images/meoww.jpg';
import { HiMenu } from 'react-icons/hi';
import { useSetRecoilState } from 'recoil';
import { isMenuMobile } from '../../store';

const cx = classNames.bind(styles);

function Profile() {
    const setState = useSetRecoilState(isMenuMobile);

    const days = [
        { day: 1 },
        { day: 2 },
        { day: 3 },
        { day: 4 },
        { day: 5 },
        { day: 6 },
        { day: 7 },
        { day: 8 },
        { day: 9 },
        { day: 10 },
        { day: 11 },
        { day: 12 },
        { day: 13 },
        { day: 14 },
        { day: 15 },
        { day: 16 },
        { day: 17 },
        { day: 18 },
        { day: 19 },
        { day: 20 },
        { day: 21 },
        { day: 22 },
        { day: 23 },
        { day: 24 },
        { day: 25 },
        { day: 26 },
        { day: 27 },
        { day: 28 },
        { day: 29 },
        { day: 30 },
        { day: 31 },
    ];

    const months = [
        { month: 1 },
        { month: 2 },
        { month: 3 },
        { month: 4 },
        { month: 5 },
        { month: 6 },
        { month: 7 },
        { month: 8 },
        { month: 9 },
        { month: 10 },
        { month: 11 },
        { month: 12 },
    ];

    const years = [
        { year: 2023 },
        { year: 2022 },
        { year: 2021 },
        { year: 2020 },
        { year: 2019 },
        { year: 2018 },
        { year: 2017 },
        { year: 2016 },
        { year: 2015 },
        { year: 2014 },
        { year: 2013 },
        { year: 2012 },
        { year: 2011 },
        { year: 2010 },
        { year: 2009 },
        { year: 2008 },
        { year: 2007 },
        { year: 2006 },
        { year: 2005 },
        { year: 2004 },
        { year: 2003 },
        { year: 2002 },
        { year: 2001 },
        { year: 2000 },
        { year: 1999 },
        { year: 1998 },
        { year: 1997 },
        { year: 1996 },
        { year: 1995 },
        { year: 1994 },
        { year: 1993 },
    ];

    useEffect(() => {
        document.title = 'Trang chủ | Petshop chất lượng số 1 Việt Nam!';
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
    }, []);

    return (
        <LayoutProfile>
            <div className={cx('profile')}>
                <div className={cx('header')}>
                    <h3 className={cx('title')}>
                        <div className={cx('profile-into-back')}>
                            <span
                                onClick={() => {
                                    console.log(111);
                                    setState(true);
                                }}
                                className={cx('back-btn-profile')}
                            >
                                <HiMenu />
                            </span>
                            <span>Hồ Sơ Của Tôi</span>
                        </div>
                    </h3>
                    <p className={cx('sub-title')}>Quản lý thông tin hồ sơ để bảo mật tài khoản của bạn</p>
                </div>
                <div className={cx('contents')}>
                    <div className={cx('form-profile')}>
                        <form className={cx('form-container')}>
                            <div className={cx('form-item')}>
                                <label htmlFor="name">Tên đăng nhập</label>
                                <input type="text" id="name" placeholder="Aa..." />
                            </div>
                            <div className={cx('form-item')}>
                                <label htmlFor="mail">Email</label>
                                <input type="text" id="mail" placeholder="Aa..." />
                            </div>
                            <div className={cx('form-item')}>
                                <label htmlFor="phone">Số điện thoại</label>
                                <input type="text" id="phone" placeholder="Aa..." />
                            </div>
                            <div className={cx('form-item')}>
                                <span>Giới tính</span>
                                <div className={cx('gender-container')}>
                                    <div className={cx('gender-item')}>
                                        <input type="radio" id="male" name="gender" />
                                        <label htmlFor="male">Nam</label>
                                    </div>
                                    <div className={cx('gender-item')}>
                                        <input type="radio" id="female" name="gender" />
                                        <label htmlFor="female">Nữ</label>
                                    </div>
                                    <div className={cx('gender-item')}>
                                        <input type="radio" id="other" name="gender" />
                                        <label htmlFor="other">Khác</label>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('form-item')}>
                                <span>Ngày sinh</span>
                                <div className={cx('birth-container')}>
                                    <div className={cx('birth-item')}>
                                        <Dropdown
                                            options={days}
                                            optionLabel="day"
                                            placeholder="Ngày"
                                            className="w-full md:w-14rem"
                                        />
                                    </div>
                                    <div className={cx('birth-item')}>
                                        <Dropdown
                                            options={months}
                                            optionLabel="month"
                                            placeholder="Tháng"
                                            className="w-full md:w-14rem"
                                        />
                                    </div>
                                    <div className={cx('birth-item')}>
                                        <Dropdown
                                            options={years}
                                            optionLabel="year"
                                            placeholder="Năm"
                                            className="w-full md:w-14rem"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('btn-save')}>
                                <button>Lưu</button>
                            </div>
                        </form>
                    </div>
                    <div className={cx('preview-avatar')}>
                        <div className={cx('prev-avatar')}>
                            <img src={img} alt="prev view avatar" />
                        </div>
                        <div className={cx('change-avatar')}>
                            <label htmlFor="choose">Chọn Ảnh</label>
                            <input type="file" id="choose" />
                        </div>
                        <div className={cx('alert')}>
                            <p>Dụng lượng file tối đa 1 MB</p>
                            <p>Định dạng:.JPEG, .PNG</p>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutProfile>
    );
}

export default Profile;
