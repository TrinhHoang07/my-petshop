import classNames from 'classnames/bind';
import styles from './Carts.module.scss';
import routesConfig from '../../../../../config/routes';
import img from '../../../../../assets/images/cat_item_2.jpg';
import { Button } from '../../../../Button';

const cx = classNames.bind(styles);

function Carts() {
    return (
        <div id="carts-list-small" className={cx('carts')}>
            <h3 className={cx('heading')}>Sản phẩm mới thêm</h3>
            <div className={cx('contents')}>
                <div className={cx('cart-item')}>
                    <div className={cx('preview')}>
                        <img src={img} alt="preview images" />
                    </div>
                    <h6 className={cx('name-item')}>Mèo anh lông ngắn cute Mèo anh lông ngắn cute</h6>
                    <p className={cx('price-item')}>30.000.000đ</p>
                </div>
                <div className={cx('cart-item')}>
                    <div className={cx('preview')}>
                        <img src={img} alt="preview images" />
                    </div>
                    <h6 className={cx('name-item')}>Mèo anh lông ngắn cute Mèo anh lông ngắn cute</h6>
                    <p className={cx('price-item')}>30.000.000đ</p>
                </div>
                <div className={cx('cart-item')}>
                    <div className={cx('preview')}>
                        <img src={img} alt="preview images" />
                    </div>
                    <h6 className={cx('name-item')}>Mèo anh lông ngắn cute Mèo anh lông ngắn cute</h6>
                    <p className={cx('price-item')}>30.000.000đ</p>
                </div>
            </div>
            <div className={cx('footer-cart')}>
                <p>3 thêm hàng vào giỏ</p>
                <Button to={routesConfig.categories} small={'true'}>
                    Xem giỏ hàng
                </Button>
            </div>
        </div>
    );
}

export default Carts;
