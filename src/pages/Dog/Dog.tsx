import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Dog.module.scss';
import { LayoutProducts } from '../../components/Layout/LayoutProducts';

const cx = classNames.bind(styles);

function Dog() {
    const [value, setValue] = useState<[number, number]>([17000, 500000]);
    const handleChangeValue = (value: [number, number]) => {
        setValue(value);
    };
    return (
        <div>
            <LayoutProducts title="CHÓ CẢNH" value={value} onChange={handleChangeValue} dataProducts={[1, 2, 3, 4, 5]}>
                <h1>hello</h1>
            </LayoutProducts>
        </div>
    );
}

export default Dog;
