import classNames from 'classnames/bind';
import styles from './NavProducts.module.scss';
import { Dropdown } from 'primereact/dropdown';

const cx = classNames.bind(styles);

type TProps = {
    title: string;
    subTitle?: string;
};

function NavProducts(props: TProps) {
    const cities = [
        { name: 'Phổ biến' },
        { name: 'Điểm đánh giá' },
        { name: 'Mới về' },
        { name: 'Giá thấp đến cao' },
        { name: 'Giá cao đến thấp' },
    ];

    return (
        <div className={cx('nav-products')}>
            <h3 className={cx('heading-nav')}>
                <span>TRANG CHỦ /</span> {props.title} {props.subTitle ? '/ ' + props.subTitle : ''}
            </h3>
            <div className={cx('filters')}>
                <span className={cx('filter-title')}>Sắp xếp: </span>
                <Dropdown
                    className={cx('drop-down-filter')}
                    placeholder="Mặc định"
                    options={cities}
                    optionLabel="name"
                    style={{ color: 'red !important' }}
                />
            </div>
        </div>
    );
}

export default NavProducts;
