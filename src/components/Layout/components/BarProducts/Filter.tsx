import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './BarProducts.module.scss';
import { Slider } from 'primereact/slider';
import { useRecoilState } from 'recoil';
import { filterItemByPrice } from '../../../../store';

const cx = classNames.bind(styles);

type TProps = {
    value: [number, number];
};

function Filter(props: TProps) {
    const [value, setValue] = useRecoilState<[number, number]>(filterItemByPrice);

    useEffect(() => {
        setValue(props.value);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (value: [number, number]) => {
        setValue(value);
    };
    return (
        <div className={cx('filter')}>
            <h6 className={cx('heading-menu')}>LỌC THEO GIÁ</h6>
            <div className={cx('wrapper-filter')}>
                <Slider
                    min={props.value[0]}
                    max={props.value[1]}
                    range
                    value={value}
                    onChange={(e) => handleChange(e.value as [number, number])}
                />
                <div className={cx('info-filter')}>
                    <button>Lọc</button>
                    <p>
                        Giá: {value[0]}đ - {value[1]}đ
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Filter;
