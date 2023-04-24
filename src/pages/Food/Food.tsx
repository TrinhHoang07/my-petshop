import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Food.module.scss';
import { LayoutProducts } from '../../components/Layout/LayoutProducts';
import { CardItem } from '../../components/CardItem';
import img from '../../assets/images/food_item_1.jpg';

const cx = classNames.bind(styles);

function Food() {
    const [value, setValue] = useState<[number, number]>([17000, 500000]);
    const handleChangeValue = (value: [number, number]) => {
        setValue(value);
    };

    useEffect(() => {
        document.title = 'Đồ ăn | Petshop chất lượng số 1 Việt Nam!';
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
    }, []);
    return (
        <div>
            <LayoutProducts title="ĐỒ ĂN" value={value} onChange={handleChangeValue} dataProducts={[1, 2, 3, 4, 5]}>
                <>
                    <div className={cx('food-item')}>
                        <CardItem name="Bánh thưởng hình bóng AFP Krazy" price="80000đ" title="ĐỒ ĂN" src={img} />
                    </div>
                    <div className={cx('food-item')}>
                        <CardItem name="Bánh thưởng hình bóng AFP Krazy" price="80000đ" title="ĐỒ ĂN" src={img} />
                    </div>
                    <div className={cx('food-item')}>
                        <CardItem name="Bánh thưởng hình bóng AFP Krazy" price="80000đ" title="ĐỒ ĂN" src={img} />
                    </div>
                    <div className={cx('food-item')}>
                        <CardItem name="Bánh thưởng hình bóng AFP Krazy" price="80000đ" title="ĐỒ ĂN" src={img} />
                    </div>
                    <div className={cx('food-item')}>
                        <CardItem name="Bánh thưởng hình bóng AFP Krazy" price="80000đ" title="ĐỒ ĂN" src={img} />
                    </div>
                    <div className={cx('food-item')}>
                        <CardItem name="Bánh thưởng hình bóng AFP Krazy" price="80000đ" title="ĐỒ ĂN" src={img} />
                    </div>
                </>
            </LayoutProducts>
        </div>
    );
}

export default Food;
