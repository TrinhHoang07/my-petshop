import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProfileNoti.module.scss';
import { LayoutProfile } from '../../components/Layout/LayoutProfile';
import NotiItem from './NotiItem';
import { IoArrowBack } from 'react-icons/io5';

const cx = classNames.bind(styles);

function ProfileNoti() {
    const [active, setActive] = useState(1);

    return (
        <LayoutProfile>
            <div className={cx('profile-noti')}>
                <div className={cx('my-noti')}>
                    <div className={cx('header')}>
                        <p className={cx('heading')}>
                            <span className={cx('back-btn-profile')}>
                                <IoArrowBack />
                            </span>
                            <span>Thông Báo Của Bạn</span>
                        </p>
                    </div>
                    <div className={cx('contents')}>
                        <div className={cx('options')}>
                            <button
                                onClick={() => setActive(1)}
                                style={{
                                    color: active === 1 ? '#247ef3' : '',
                                    backgroundColor: active === 1 ? '#e7f3ff' : '',
                                }}
                            >
                                Tất cả
                            </button>
                            <button
                                onClick={() => setActive(2)}
                                style={{
                                    color: active === 2 ? '#247ef3' : '',
                                    backgroundColor: active === 2 ? '#e7f3ff' : '',
                                }}
                            >
                                Chưa đọc
                            </button>
                        </div>
                        <div className={cx('noti-container')}>
                            <div className={cx('noti-new')}>
                                <h3>Mới</h3>
                                <div>
                                    {[1, 2, 3].map((item) => (
                                        <NotiItem key={item} />
                                    ))}
                                </div>
                            </div>
                            <div className={cx('noti-new')}>
                                <h3>Trước đó</h3>
                                <div>
                                    {[1, 2, 3].map((item) => (
                                        <NotiItem key={item} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutProfile>
    );
}

export default ProfileNoti;
