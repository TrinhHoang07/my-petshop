import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProfileAddress.module.scss';
import { LayoutProfile } from '../../components/Layout/LayoutProfile';
import { IoAdd, IoArrowBack } from 'react-icons/io5';
import { AddressIcon } from '../../assets/svg';
import FormAddAddress from './FormAddAddress';

const cx = classNames.bind(styles);

function ProfileAddress() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <LayoutProfile>
            <div className={cx('profile-address')}>
                <div className={cx('my-address')}>
                    <FormAddAddress visible={isVisible} setIsVisible={setIsVisible} />
                    <div className={cx('header')}>
                        <p className={cx('heading')}>
                            <span className={cx('back-btn-profile')}>
                                <IoArrowBack />
                            </span>
                            <span>Địa Chỉ Của Tôi</span>
                        </p>
                        <p onClick={() => setIsVisible(true)} className={cx('btn-credit')}>
                            <IoAdd />
                            Thêm Địa Chỉ Mới
                        </p>
                    </div>
                    <div className={cx('contents')}>
                        <div className={cx('wrapper-icon-empty')}>
                            <div className={cx('address-icon')}>
                                <AddressIcon />
                                <p>Bạn chưa có địa chỉ!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutProfile>
    );
}

export default ProfileAddress;
