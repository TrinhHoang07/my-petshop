import classNames from 'classnames/bind';
import styles from './SuggestProducts.module.scss';
import { useEffect, useState } from 'react';
import { formatMoney } from '../../../../Helper';

const cx = classNames.bind(styles);

function SuggestProducts() {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        fetch(`http://localhost:3009/products/random`)
            .then((res) => res.json())
            .then((data) => {
                console.log('data suggested: ', data);

                setData(data.data);
            })
            .catch((err) => console.log('err: ', err));
    }, []);

    return (
        <div className={cx('suggest-pro')}>
            <h6 className={cx('heading-menu')}>SẢN PHẨM</h6>
            <div className={cx('wrapper-suggest')}>
                {data.length > 0 &&
                    data.map((item: any) => (
                        <div key={item.id}>
                            <div className={cx('suggest-item')}>
                                <div className={cx('preview-suggest')}>
                                    <img src={item.preview_url} alt="preview product" />
                                </div>
                                <div className={cx('suggest-info')}>
                                    <h6 className={cx('heading-suggest')}>{item.name}</h6>
                                    <p className={cx('price-suggest-item')}>{formatMoney(item.price)}đ</p>
                                </div>
                            </div>
                            {/* <div className={cx('line-suggest')}></div> */}
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default SuggestProducts;
