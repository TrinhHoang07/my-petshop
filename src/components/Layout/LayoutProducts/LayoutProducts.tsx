import classNames from 'classnames/bind';
import styles from './LayoutProducts.module.scss';
import { NavProducts } from '../components/NavProducts';

const cx = classNames.bind(styles);

function LayoutProducts() {
    return (
        <div className={cx('layout-products')}>
            <NavProducts title="MÈO CẢNH" />
        </div>
    );
}

export default LayoutProducts;
