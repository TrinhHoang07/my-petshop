import classNames from 'classnames/bind';
import styles from './ProfileChangePassword.module.scss';
import { LayoutProfile } from '../../components/Layout/LayoutProfile';
import FormChangePass from './FormChangePass';
import { IoArrowBack } from 'react-icons/io5';

const cx = classNames.bind(styles);

function ProfileChangePassword() {
    return (
        <LayoutProfile>
            <div className={cx('profile-changepass')}>
                <div className={cx('my-pass')}>
                    <div className={cx('header')}>
                        <p className={cx('heading')}>
                            <span className={cx('back-btn-profile')}>
                                <IoArrowBack />
                            </span>
                            <span>Thay Đổi Mật Khẩu</span>
                        </p>
                    </div>
                    <div className={cx('contents')}>
                        <FormChangePass />
                    </div>
                </div>
            </div>
        </LayoutProfile>
    );
}

export default ProfileChangePassword;
