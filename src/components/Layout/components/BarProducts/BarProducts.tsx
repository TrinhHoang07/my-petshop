import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './BarProducts.module.scss';
import Categories from './Categories';
import Filter from './Filter';
import SuggestProducts from './SuggestProducts';

const cx = classNames.bind(styles);

type TProps = {
    value: [number, number];
    onChange: Function;
    dataProducts: any[];
};

function BarProducts(props: TProps) {
    return (
        <div className={cx('bar-products')}>
            <Categories />
            <Filter value={props.value} onChange={props.onChange} />
            <SuggestProducts data={props.dataProducts} />
        </div>
    );
}

export default BarProducts;
