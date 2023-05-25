import classNames from 'classnames/bind';
import styles from './Categories.module.scss';
import { useSessionContext } from '../../context/SessionContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useLayoutEffect, useState } from 'react';
import routesConfig from '../../config/routes';
// import img from '../../assets/images/logo-petshop.jpg';
import user from '../../assets/images/meoww.jpg';
import pro from '../../assets/images/cat_item_3.jpg';
import { MdOutlineDiscount } from 'react-icons/md';

const cx = classNames.bind(styles);

function Categories() {
    const [values] = useSessionContext();
    const [quantity, setQuantity] = useState<number>(1);
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
            navigate(routesConfig.login, {
                state: {
                    redirect: `${routesConfig.categories}`,
                },
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values]);

    return (
        <div className={cx('categories')}>
            <div className={cx('header')}>
                <div className={cx('info')}>
                    <div className={cx('logo')}>
                        {/* <div className={cx('avatar')}>
                            <img src={img} alt="logo" />
                        </div> */}
                        <h3 className={cx('name-petshop')}>Petshop</h3>
                    </div>
                    <div className={cx('line')}></div>
                    <p className={cx('cart-name')}>Giỏ hàng</p>
                </div>
                <div className={cx('user')}>
                    <div className={cx('preview')}>
                        <img src={user} alt="user" />
                    </div>
                    <h3 className={cx('user-name')}>hoangtrinh</h3>
                </div>
            </div>
            <div className={cx('carts-list')}>
                <div className={cx('wrapper-carts')}>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className={cx('cart-item')}>
                            <div className={cx('input-product-wrap')}>
                                <input type="checkbox" name="check-cart" />
                                <div className={cx('info-item')}>
                                    <div className={cx('preview-product')}>
                                        <img src={pro} alt="preview product" />
                                    </div>
                                    <p className={cx('name-item-cart')}>
                                        Name products Name products Name products Name products
                                    </p>
                                </div>
                            </div>
                            <p className={cx('color-product')}>Màu sắc: Trắng tuyết</p>
                            <p className={cx('item-price')}>₫1.995.000</p>
                            <div className={cx('count-item')}>
                                <p
                                    onClick={() => {
                                        setQuantity((prev) => {
                                            const quantity = prev - 1;
                                            if (quantity <= 0) {
                                                return 1;
                                            } else {
                                                return quantity;
                                            }
                                        });
                                    }}
                                    className={cx('p_1')}
                                >
                                    -
                                </p>
                                <p className={cx('p_2')}>{quantity}</p>
                                <p
                                    onClick={() => {
                                        setQuantity((prev) => prev + 1);
                                    }}
                                    className={cx('p_3')}
                                >
                                    +
                                </p>
                            </div>
                            <p className={cx('last-price')}>₫1.995.000</p>
                            <p className={cx('remove-item')}>Xóa</p>
                        </div>
                    ))}
                </div>
                <div className={cx('footer')}>
                    <div className={cx('voucher')}>
                        <div className={cx('empty')}></div>
                        <div className={cx('info-voucher')}>
                            <div className={cx('icon')}>
                                <MdOutlineDiscount size={'2rem'} />
                                <span>Petshop Voucher</span>
                            </div>
                            <p className={cx('add-voucher')}>Chọn Hoặc Nhập Mã</p>
                        </div>
                    </div>
                    <div className={cx('actions-footer')}>
                        <div className={cx('all-remove')}>
                            <div className={cx('select-all')}>
                                <input type="checkbox" name="remove-all" id="all-del" />
                                <label htmlFor="all-del">Chọn Tất Cả (5)</label>
                            </div>
                            <p className={cx('deleted-all')}>Xóa</p>
                        </div>
                        <div className={cx('buy-all')}>
                            <p className={cx('total-buy')}>
                                Tổng thanh toán (5 sản phẩm): <span>₫0</span>
                            </p>
                            <button className={cx('btn-buy')}>Mua Hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;
