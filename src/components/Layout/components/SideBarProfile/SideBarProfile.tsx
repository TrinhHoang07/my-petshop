import classNames from 'classnames/bind';
import styles from './SideBarProfile.module.scss';
import { Link } from 'react-router-dom';
import { AiOutlineEdit, AiOutlineUser } from 'react-icons/ai';
import { CiViewList } from 'react-icons/ci';
import { IoMdNotificationsOutline } from 'react-icons/io';
import img from '../../../../assets/images/meoww.jpg';
import { MdOutlineDiscount } from 'react-icons/md';

const cx = classNames.bind(styles);

function SideBarProfile() {
    return (
        <div className={cx('side-bar-profile')}>
            <div className={cx('header')}>
                <div className={cx('avatar')}>
                    <img src={img} alt="avatar-user" />
                </div>
                <div className={cx('info-user')}>
                    <h3 className={cx('user-name')}>Name user</h3>
                    <Link to={''}>
                        <AiOutlineEdit />
                        <span>Sửa hồ sơ</span>
                    </Link>
                </div>
            </div>
            <div className={cx('options')}>
                <div className={cx('private-info')}>
                    <Link to={''} className={cx('title-info-private')}>
                        <AiOutlineUser size={'2rem'} style={{ color: '#3067be' }} />
                        <span>Tài khoản của tôi</span>
                    </Link>
                    <Link className={cx('child-not-icon')} to={''}>
                        Hồ Sơ
                    </Link>
                    <Link className={cx('child-not-icon')} to={''}>
                        Ngân Hàng
                    </Link>
                    <Link className={cx('child-not-icon')} to={''}>
                        Địa Chỉ
                    </Link>
                    <Link className={cx('child-not-icon')} to={''}>
                        Đổi Mật Khẩu
                    </Link>
                </div>
                <div className={cx('more-actions')}>
                    <Link to={''} className={cx('title-info-private')}>
                        <CiViewList size={'2rem'} style={{ color: '#3067be' }} />
                        <span>Đơn Mua</span>
                    </Link>
                    <Link to={''} className={cx('title-info-private')}>
                        <IoMdNotificationsOutline style={{ color: '#f46b4e' }} size={'2rem'} />
                        <span>Thông Báo</span>
                    </Link>
                    <Link to={''} className={cx('title-info-private')}>
                        <MdOutlineDiscount size={'2rem'} style={{ color: 'orange' }} />
                        <span>Petshop Vouchers</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SideBarProfile;
