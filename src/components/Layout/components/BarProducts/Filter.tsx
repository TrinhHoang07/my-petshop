import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './BarProducts.module.scss';
import { Slider } from 'primereact/slider';

const cx = classNames.bind(styles);

type TProps = {
    value: [number, number];
    onChange: Function;
};

function Filter(props: TProps) {
    const [initialValue, setInitialValue] = useState<[number, number]>([0, 0]);

    useEffect(() => {
        setInitialValue(props.value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (value: [number, number]) => {
        props.onChange(value);
    };
    return (
        <div className={cx('filter')}>
            <h6 className={cx('heading-menu')}>LỌC THEO GIÁ</h6>
            <div className={cx('wrapper-filter')}>
                <Slider
                    min={initialValue[0]}
                    max={initialValue[1]}
                    range
                    value={props.value}
                    onChange={(e) => handleChange(e.value as [number, number])}
                />
                <div className={cx('info-filter')}>
                    <button>Lọc</button>
                    <p>
                        Giá: {props.value[0]}đ - {props.value[1]}đ
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Filter;
