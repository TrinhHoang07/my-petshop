import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Accessories.module.scss';
import { LayoutProducts } from '../../components/Layout/LayoutProducts';
import { CardItem } from '../../components/CardItem';
import img from '../../assets/images/accessories_1.jpg';

const cx = classNames.bind(styles);

function Accessories() {
    const [value, setValue] = useState<[number, number]>([17000, 500000]);
    const handleChangeValue = (value: [number, number]) => {
        setValue(value);
    };

    useEffect(() => {
        document.title = 'Phụ kiện | Petshop chất lượng số 1 Việt Nam!';
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
    }, []);

    return (
        <div>
            <LayoutProducts title="PHỤ KIỆN" value={value} onChange={handleChangeValue} dataProducts={[1, 2, 3, 4, 5]}>
                <>
                    <div className={cx('accessories-item')}>
                        <CardItem
                            name="Dây dắt Ferplast Ergofluo 2.5cm/120cm"
                            price="500000đ"
                            title="PHỤ KIỆN"
                            src={img}
                        />
                    </div>
                    <div className={cx('accessories-item')}>
                        <CardItem
                            name="Dây dắt Ferplast Ergofluo 2.5cm/120cm"
                            price="500000đ"
                            title="PHỤ KIỆN"
                            src={img}
                        />
                    </div>
                    <div className={cx('accessories-item')}>
                        <CardItem
                            name="Dây dắt Ferplast Ergofluo 2.5cm/120cm"
                            price="500000đ"
                            title="PHỤ KIỆN"
                            src={img}
                        />
                    </div>
                    <div className={cx('accessories-item')}>
                        <CardItem
                            name="Dây dắt Ferplast Ergofluo 2.5cm/120cm"
                            price="500000đ"
                            title="PHỤ KIỆN"
                            src={img}
                        />
                    </div>
                    <div className={cx('accessories-item')}>
                        <CardItem
                            name="Dây dắt Ferplast Ergofluo 2.5cm/120cm"
                            price="500000đ"
                            title="PHỤ KIỆN"
                            src={img}
                        />
                    </div>
                    <div className={cx('accessories-item')}>
                        <CardItem
                            name="Dây dắt Ferplast Ergofluo 2.5cm/120cm"
                            price="500000đ"
                            title="PHỤ KIỆN"
                            src={img}
                        />
                    </div>
                </>
            </LayoutProducts>
        </div>
    );
}

export default Accessories;
