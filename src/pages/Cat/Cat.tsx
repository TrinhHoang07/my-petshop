import classNames from 'classnames/bind';
import styles from './Cat.module.scss';
import { useState, useEffect } from 'react';
import { LayoutProducts } from '../../components/Layout/LayoutProducts';
import { CardItem } from '../../components/CardItem';
import img from '../../assets/images/cat_item_1.jpg';

const cx = classNames.bind(styles);

function Cat() {
    const [value, setValue] = useState<[number, number]>([17000, 500000]);
    const handleChangeValue = (value: [number, number]) => {
        setValue(value);
    };

    useEffect(() => {
        document.title = 'Mèo cảnh | Petshop chất lượng số 1 Việt Nam!';
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
    }, []);

    return (
        <div>
            <LayoutProducts title="MÈO CẢNH" value={value} onChange={handleChangeValue} dataProducts={[1, 2, 3, 4, 5]}>
                <>
                    <div className={cx('cat-item')}>
                        <CardItem name="Mèo Anh Lông Dài" price="8000000đ" title="MÈO CẢNH" src={img} />
                    </div>
                    <div className={cx('cat-item')}>
                        <CardItem name="Mèo Anh Lông Dài" price="8000000đ" title="MÈO CẢNH" src={img} />
                    </div>
                    <div className={cx('cat-item')}>
                        <CardItem name="Mèo Anh Lông Dài" price="8000000đ" title="MÈO CẢNH" src={img} />
                    </div>
                    <div className={cx('cat-item')}>
                        <CardItem name="Mèo Anh Lông Dài" price="8000000đ" title="MÈO CẢNH" src={img} />
                    </div>
                    <div className={cx('cat-item')}>
                        <CardItem name="Mèo Anh Lông Dài" price="8000000đ" title="MÈO CẢNH" src={img} />
                    </div>
                    <div className={cx('cat-item')}>
                        <CardItem name="Mèo Anh Lông Dài" price="8000000đ" title="MÈO CẢNH" src={img} />
                    </div>
                </>
            </LayoutProducts>
        </div>
    );
}

export default Cat;
