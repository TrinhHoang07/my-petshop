import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { useSessionContext } from '../../context/SessionContext';
import { useEffect, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import routesConfig from '../../config/routes';

const cx = classNames.bind(styles);

function Profile() {
    const [values, setValues] = useSessionContext();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Trang chủ | Petshop chất lượng số 1 Việt Nam!';
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
    }, []);

    useLayoutEffect(() => {
        if (!values.isAuth) {
            navigate(routesConfig.login);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values]);

    return (
        <div className={cx('profile')}>
            <h1>Xin chào {values.user?.name}</h1>
            <button
                onClick={() => {
                    setValues({
                        isAuth: false,
                        user: {},
                    });
                    localStorage.setItem('user', '');
                    navigate(routesConfig.home);
                }}
            >
                Log out
            </button>
        </div>
    );
}

export default Profile;
