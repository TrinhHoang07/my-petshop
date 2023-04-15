import classNames from 'classnames/bind';
import styles from './BarProducts.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Categories() {
    return (
        <div className={cx('categories')}>
            <h6 className={cx('heading-menu')}>DANH MỤC SẢN PHẨM</h6>
            <div className={cx('menu')}>
                <Link className={cx('menu-item')} to={''}>
                    Chó cảnh
                </Link>
                <div className={cx('line-bar')}></div>
                <Link className={cx('menu-item')} to={''}>
                    Mèo cảnh
                </Link>
            </div>
        </div>
    );
}

export default Categories;
