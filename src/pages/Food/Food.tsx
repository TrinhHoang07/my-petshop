import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Food.module.scss';
import { LayoutProducts } from '../../components/Layout/LayoutProducts';
import { CardItemFlip } from '../../components/CardItemFlip';
import img from '../../assets/images/food_item_1.jpg';
import { useSetRecoilState } from 'recoil';
import { filterItem } from '../../store';

const cx = classNames.bind(styles);

function Food() {
    const [value, setValue] = useState<[number, number]>([0, 100]);

    const setFilterItem = useSetRecoilState(filterItem);

    useEffect(() => {
        document.title = 'Đồ ăn | Petshop chất lượng số 1 Việt Nam!';
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
        setFilterItem('');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <LayoutProducts title="ĐỒ ĂN" value={value} dataProducts={[1, 2, 3, 4, 5]}>
                <>
                    <div className={cx('food-item')}>
                        <CardItemFlip name="Bánh thưởng hình bóng AFP Krazy" price="80000đ" title="ĐỒ ĂN" src={img} />
                    </div>
                    <div className={cx('food-item')}>
                        <CardItemFlip name="Bánh thưởng hình bóng AFP Krazy" price="80000đ" title="ĐỒ ĂN" src={img} />
                    </div>
                    <div className={cx('food-item')}>
                        <CardItemFlip name="Bánh thưởng hình bóng AFP Krazy" price="80000đ" title="ĐỒ ĂN" src={img} />
                    </div>
                    <div className={cx('food-item')}>
                        <CardItemFlip name="Bánh thưởng hình bóng AFP Krazy" price="80000đ" title="ĐỒ ĂN" src={img} />
                    </div>
                    <div className={cx('food-item')}>
                        <CardItemFlip name="Bánh thưởng hình bóng AFP Krazy" price="80000đ" title="ĐỒ ĂN" src={img} />
                    </div>
                    <div className={cx('food-item')}>
                        <CardItemFlip name="Bánh thưởng hình bóng AFP Krazy" price="80000đ" title="ĐỒ ĂN" src={img} />
                    </div>
                </>
            </LayoutProducts>
        </div>
    );
}

export default Food;
