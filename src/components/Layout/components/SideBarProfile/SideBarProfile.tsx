import classNames from 'classnames/bind';
import styles from './SideBarProfile.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineEdit, AiOutlineUser } from 'react-icons/ai';
import { CiViewList } from 'react-icons/ci';
import { IoMdNotificationsOutline } from 'react-icons/io';
import img from '../../../../assets/images/meoww.jpg';
import { MdOutlineDiscount } from 'react-icons/md';
import routesConfig from '../../../../config/routes';

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
                    <Link to={routesConfig.profile}>
                        <AiOutlineEdit />
                        <span>Sửa hồ sơ</span>
                    </Link>
                </div>
            </div>
            <div className={cx('options')}>
                <div className={cx('private-info')}>
                    <Link to={routesConfig.profile} className={cx('title-info-private')}>
                        <AiOutlineUser size={'2rem'} style={{ color: '#3067be' }} />
                        <span>Tài khoản của tôi</span>
                    </Link>
                    <NavLink
                        className={(nav) => cx('child-not-icon', { active: nav.isActive })}
                        to={routesConfig.profile}
                    >
                        Hồ Sơ
                    </NavLink>
                    <NavLink
                        className={(nav) => cx('child-not-icon', { active: nav.isActive })}
                        to={routesConfig.profile_bank}
                    >
                        Ngân Hàng
                    </NavLink>
                    <NavLink
                        className={(nav) => cx('child-not-icon', { active: nav.isActive })}
                        to={routesConfig.profile_address}
                    >
                        Địa Chỉ
                    </NavLink>
                    <NavLink
                        className={(nav) => cx('child-not-icon', { active: nav.isActive })}
                        to={routesConfig.profile_change_password}
                    >
                        Đổi Mật Khẩu
                    </NavLink>
                </div>
                <div className={cx('more-actions')}>
                    <NavLink
                        to={routesConfig.profile_buy}
                        className={(nav) => cx('title-info-private', { active: nav.isActive })}
                    >
                        <CiViewList size={'2rem'} style={{ color: '#3067be' }} />
                        <span>Đơn Mua</span>
                    </NavLink>
                    <NavLink
                        to={routesConfig.profile_noti}
                        className={(nav) => cx('title-info-private', { active: nav.isActive })}
                    >
                        <IoMdNotificationsOutline style={{ color: '#f46b4e' }} size={'2rem'} />
                        <span>Thông Báo</span>
                    </NavLink>
                    <NavLink
                        to={routesConfig.profile_voucher}
                        className={(nav) => cx('title-info-private', { active: nav.isActive })}
                    >
                        <MdOutlineDiscount size={'2rem'} style={{ color: 'orange' }} />
                        <span>Petshop Vouchers</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default SideBarProfile;
