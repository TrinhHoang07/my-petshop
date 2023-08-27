import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { useEffect } from 'react';
import { LayoutProfile } from '../../components/Layout/LayoutProfile';
import { Dropdown } from 'primereact/dropdown';
import { HiMenu } from 'react-icons/hi';
import { useSetRecoilState } from 'recoil';
import { isMenuMobile } from '../../store';
import { useSessionContext } from '../../context/SessionContext';

const cx = classNames.bind(styles);

function Profile() {
    const setState = useSetRecoilState(isMenuMobile);
    const [values] = useSessionContext();
    const [day, setDay] = useState<{ day: string }>();
    const [month, setMonth] = useState<{ month: string }>();
    const [year, setYear] = useState<{ year: string }>();

    const days = [
        { day: '01' },
        { day: '02' },
        { day: '03' },
        { day: '04' },
        { day: '05' },
        { day: '06' },
        { day: '07' },
        { day: '08' },
        { day: '09' },
        { day: '10' },
        { day: '11' },
        { day: '12' },
        { day: '13' },
        { day: '14' },
        { day: '15' },
        { day: '16' },
        { day: '17' },
        { day: '18' },
        { day: '19' },
        { day: '20' },
        { day: '21' },
        { day: '22' },
        { day: '23' },
        { day: '24' },
        { day: '25' },
        { day: '26' },
        { day: '27' },
        { day: '28' },
        { day: '29' },
        { day: '30' },
        { day: '31' },
    ];

    const months = [
        { month: '01' },
        { month: '02' },
        { month: '03' },
        { month: '04' },
        { month: '05' },
        { month: '06' },
        { month: '07' },
        { month: '08' },
        { month: '09' },
        { month: ' 10' },
        { month: ' 11' },
        { month: ' 12' },
    ];

    const years = [
        { year: '2023' },
        { year: '2022' },
        { year: '2021' },
        { year: '2020' },
        { year: '2019' },
        { year: '2018' },
        { year: '2017' },
        { year: '2016' },
        { year: '2015' },
        { year: '2014' },
        { year: '2013' },
        { year: '2012' },
        { year: '2011' },
        { year: '2010' },
        { year: '2009' },
        { year: '2008' },
        { year: '2007' },
        { year: '2006' },
        { year: '2005' },
        { year: '2004' },
        { year: '2003' },
        { year: '2002' },
        { year: '2001' },
        { year: '2000' },
        { year: '1999' },
        { year: '1998' },
        { year: '1997' },
        { year: '1996' },
        { year: '1995' },
        { year: '1994' },
        { year: '1993' },
    ];

    useEffect(() => {
        document.title = 'Trang chủ | Petshop chất lượng số 1 Việt Nam!';
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
    }, []);

    useEffect(() => {
        if (values.user?.birthdate) {
            setDay({
                day: values.user.birthdate.split('/')[0],
            });
            setMonth({
                month: values.user.birthdate.split('/')[1],
            });
            setYear({
                year: values.user.birthdate.split('/')[2],
            });
        }
    }, [values]);

    return (
        <LayoutProfile>
            <div className={cx('profile')}>
                <div className={cx('header')}>
                    <h3 className={cx('title')}>
                        <div className={cx('profile-into-back')}>
                            <span
                                onClick={() => {
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
                                <input defaultValue={values.user?.name} type="text" id="name" placeholder="Aa..." />
                            </div>
                            <div className={cx('form-item')}>
                                <label htmlFor="mail">Email</label>
                                <input defaultValue={values.user?.email} type="text" id="mail" placeholder="Aa..." />
                            </div>
                            <div className={cx('form-item')}>
                                <label htmlFor="phone">Số điện thoại</label>
                                <input defaultValue={values.user?.phone} type="text" id="phone" placeholder="Aa..." />
                            </div>
                            <div className={cx('form-item')}>
                                <span>Giới tính</span>
                                <div className={cx('gender-container')}>
                                    <div className={cx('gender-item')}>
                                        <input
                                            defaultChecked={values.user?.gender?.toLowerCase() === 'male'}
                                            type="radio"
                                            id="male"
                                            name="gender"
                                        />
                                        <label htmlFor="male">Nam</label>
                                    </div>
                                    <div className={cx('gender-item')}>
                                        <input
                                            defaultChecked={values.user?.gender?.toLowerCase() === 'female'}
                                            type="radio"
                                            id="female"
                                            name="gender"
                                        />
                                        <label htmlFor="female">Nữ</label>
                                    </div>
                                    <div className={cx('gender-item')}>
                                        <input
                                            defaultChecked={values.user?.gender?.toLowerCase() === 'other'}
                                            type="radio"
                                            id="other"
                                            name="gender"
                                        />
                                        <label htmlFor="other">Khác</label>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('form-item')}>
                                <span>Ngày sinh</span>
                                <div className={cx('birth-container')}>
                                    <div className={cx('birth-item')}>
                                        <Dropdown
                                            value={day}
                                            onChange={(e) => {
                                                console.log(e.value);
                                                setDay(e.value);
                                            }}
                                            options={days}
                                            optionLabel="day"
                                            placeholder="Ngày"
                                            className="w-full md:w-14rem"
                                        />
                                    </div>
                                    <div className={cx('birth-item')}>
                                        <Dropdown
                                            value={month}
                                            onChange={(e) => setMonth(e.value)}
                                            options={months}
                                            optionLabel="month"
                                            placeholder="Tháng"
                                            className="w-full md:w-14rem"
                                        />
                                    </div>
                                    <div className={cx('birth-item')}>
                                        <Dropdown
                                            value={year}
                                            onChange={(e) => setYear(e.value)}
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
                            <img src={values.user?.avatar} alt="prev view avatar" />
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
