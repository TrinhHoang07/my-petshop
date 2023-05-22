import classNames from 'classnames/bind';
import styles from './Categories.module.scss';
import { useSessionContext } from '../../context/SessionContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';
import routesConfig from '../../config/routes';

const cx = classNames.bind(styles);

function Categories() {
    const [values] = useSessionContext();
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
        <div className={cx('categories')}>
            <h1>Categories of {values.user?.name}</h1>
        </div>
    );
}

export default Categories;
