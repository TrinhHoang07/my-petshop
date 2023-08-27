import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Carts.module.scss';
import routesConfig from '../../../../../config/routes';
import { Button } from '../../../../Button';
import { useSessionContext } from '../../../../../context/SessionContext';
import { formatMoney } from '../../../../../Helper';

const cx = classNames.bind(styles);

function Carts() {
    const [values] = useSessionContext();
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        // fetch API

        if (values.isAuth) {
            fetch(`http://localhost:3009/carts/cart-by-customer/${values.user?.id}`, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + values.user?.token,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.message === 'success') {
                        console.log(data);
                        setData(data.data);
                    }
                })
                .catch((err) => console.error(err));
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id="carts-list-small" className={cx('carts')}>
            {values.isAuth ? (
                <>
                    <h3 className={cx('heading')}>Sản phẩm mới thêm</h3>
                    <div className={cx('contents')}>
                        {data.length > 0 ? (
                            data.slice(0, 3).map((item) => (
                                <div key={item.carts_id} className={cx('cart-item')}>
                                    <div className={cx('preview')}>
                                        <img src={item.product_preview_url} alt="preview images" />
                                    </div>
                                    <h6 className={cx('name-item')}>{item.product_name}</h6>
                                    <p className={cx('price-item')}>{formatMoney(item.product_price)}đ</p>
                                </div>
                            ))
                        ) : (
                            <h3 className={cx('heading')}>Giỏ hàng trống!</h3>
                        )}
                    </div>
                    <div className={cx('footer-cart')}>
                        <p>{data.length} thêm hàng vào giỏ</p>
                        <Button to={routesConfig.categories} small={'true'}>
                            Xem giỏ hàng
                        </Button>
                    </div>
                </>
            ) : (
                <div className={cx('preview-carts-nologin')}>
                    <h3 className={cx('heading')}>Bạn chưa đăng nhập, hãy đăng nhập để mua sản phẩm!</h3>
                    <Button to={routesConfig.login} small={'true'}>
                        Đăng nhập
                    </Button>
                </div>
            )}
        </div>
    );
}

export default Carts;
