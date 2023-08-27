import logo from '../../../../assets/images/logo-petshop.jpg';
import { BiSearch } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import routesConfig from '../../../../config/routes';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Menu from './Menu';
import { Search } from '../Search';
import { Carts } from './Carts';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [openSearch, setOpenSearch] = useState<boolean>(false);

    const handleOpenSearch = () => {
        setOpenSearch(true);
    };

    return (
        <div className={cx('header')}>
            <Menu />
            <Search open={openSearch} setOpen={setOpenSearch} />
            <div className={cx('logo-header')}>
                <Link className={cx('logo-to-home')} to={routesConfig.home}>
                    <img src={logo} alt="logo-shop" />
                </Link>
            </div>
            <Nav />
            <div className={cx('header-action')}>
                <span onClick={handleOpenSearch} className={cx('action-item', 'search-icon')}>
                    <BiSearch fontSize={'2.5rem'} />
                </span>
                <Link className={cx('action-item', 'user-icon')} to={routesConfig.profile}>
                    <FaUser fontSize={'2.5rem'} />
                </Link>
                <Carts />
            </div>
        </div>
    );
}

export default Header;
