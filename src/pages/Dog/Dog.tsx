import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Dog.module.scss';
import { LayoutProducts } from '../../components/Layout/LayoutProducts';
import img from '../../assets/images/dog_item_1.jpg';
import { CardItem } from '../../components/CardItem';

const cx = classNames.bind(styles);

function Dog() {
    const [value, setValue] = useState<[number, number]>([17000, 500000]);
    const handleChangeValue = (value: [number, number]) => {
        setValue(value);
    };

    useEffect(() => {
        document.title = 'Chó cảnh | Petshop chất lượng số 1 Việt Nam!';
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
    }, []);

    return (
        <div>
            <LayoutProducts title="CHÓ CẢNH" value={value} onChange={handleChangeValue} dataProducts={[1, 2, 3, 4, 5]}>
                <>
                    <div className={cx('dog-item')}>
                        <CardItem name="Chó Alaska" price="11000000đ" title="CHÓ CẢNH" src={img} />
                    </div>
                    <div className={cx('dog-item')}>
                        <CardItem name="Chó Alaska" price="11000000đ" title="CHÓ CẢNH" src={img} />
                    </div>
                    <div className={cx('dog-item')}>
                        <CardItem name="Chó Alaska" price="11000000đ" title="CHÓ CẢNH" src={img} />
                    </div>
                    <div className={cx('dog-item')}>
                        <CardItem name="Chó Alaska" price="11000000đ" title="CHÓ CẢNH" src={img} />
                    </div>
                    <div className={cx('dog-item')}>
                        <CardItem name="Chó Alaska" price="11000000đ" title="CHÓ CẢNH" src={img} />
                    </div>
                    <div className={cx('dog-item')}>
                        <CardItem name="Chó Alaska" price="11000000đ" title="CHÓ CẢNH" src={img} />
                    </div>
                </>
            </LayoutProducts>
        </div>
    );
}

export default Dog;
