import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Accessories.module.scss';
import { LayoutProducts } from '../../components/Layout/LayoutProducts';
import { CardItemZoomIn } from '../../components/CardItemZoomIn';
import img from '../../assets/images/accessories_1.jpg';
import { useSetRecoilState } from 'recoil';
import { filterItem } from '../../store';

const cx = classNames.bind(styles);

function Accessories() {
    const [value, setValue] = useState<[number, number]>([0, 100]);

    const setFilterItem = useSetRecoilState(filterItem);

    useEffect(() => {
        document.title = 'Phụ kiện | Petshop chất lượng số 1 Việt Nam!';
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
        setFilterItem('');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <LayoutProducts title="PHỤ KIỆN" value={value} dataProducts={[1, 2, 3, 4, 5]}>
                <>
                    <div className={cx('accessories-item')}>
                        <CardItemZoomIn
                            name="Dây dắt Ferplast Ergofluo 2.5cm/120cm"
                            price="500000đ"
                            title="PHỤ KIỆN"
                            src={img}
                        />
                    </div>
                    <div className={cx('accessories-item')}>
                        <CardItemZoomIn
                            name="Dây dắt Ferplast Ergofluo 2.5cm/120cm"
                            price="500000đ"
                            title="PHỤ KIỆN"
                            src={img}
                        />
                    </div>
                    <div className={cx('accessories-item')}>
                        <CardItemZoomIn
                            name="Dây dắt Ferplast Ergofluo 2.5cm/120cm"
                            price="500000đ"
                            title="PHỤ KIỆN"
                            src={img}
                        />
                    </div>
                    <div className={cx('accessories-item')}>
                        <CardItemZoomIn
                            name="Dây dắt Ferplast Ergofluo 2.5cm/120cm"
                            price="500000đ"
                            title="PHỤ KIỆN"
                            src={img}
                        />
                    </div>
                    <div className={cx('accessories-item')}>
                        <CardItemZoomIn
                            name="Dây dắt Ferplast Ergofluo 2.5cm/120cm"
                            price="500000đ"
                            title="PHỤ KIỆN"
                            src={img}
                        />
                    </div>
                    <div className={cx('accessories-item')}>
                        <CardItemZoomIn
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
