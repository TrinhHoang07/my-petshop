import logo from '../../../../assets/images/logo-petshop.jpg';
import { BiSearch } from 'react-icons/bi';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import routesConfig from '../../../../config/routes';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { IoMenu } from 'react-icons/io5';
import Menu from './Menu';

const cx = classNames.bind(styles);

function Header() {
    const count = 5;

    return (
        <div className={cx('header')}>
            <Menu />
            <div className={cx('logo-header')}>
                <Link className={cx('logo-to-home')} to={routesConfig.home}>
                    <img src={logo} alt="logo-shop" />
                </Link>
            </div>
            <Nav />
            <div className={cx('header-action')}>
                <span className={cx('action-item', 'search-icon')}>
                    <BiSearch fontSize={'2.5rem'} />
                </span>
                <Link className={cx('action-item', 'user-icon')} to={routesConfig.profile}>
                    <FaUser fontSize={'2.5rem'} />
                </Link>
                <Link className={cx('action-item', 'categories')} to={routesConfig.categories}>
                    <FaShoppingCart fontSize={'2.5rem'} />
                    {count > 0 && (
                        <div className={cx('count-item')}>
                            <span>{count >= 100 ? '99+' : count}</span>
                        </div>
                    )}
                </Link>
            </div>
        </div>
    );
}

export default Header;
