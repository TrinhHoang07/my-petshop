import classNames from 'classnames/bind';
import styles from './LayoutDetailProduct.module.scss';
import { SuggestProducts } from '../components/SuggestProducts';
import { NavBarNewsPage } from '../components/NavBarNewsPage';

const cx = classNames.bind(styles);

type TProps = {
    children: React.ReactNode;
};

function LayoutDetailProduct(props: TProps) {
    return (
        <div className={cx('layout-detail-product')}>
            <div className={cx('contents')}>
                <div className={cx('nav-bar')}>
                    <SuggestProducts data={[1, 2, 3, 4, 5]} />
                    <NavBarNewsPage />
                </div>
                <div className={cx('detail')}>
                    <div>
                        {/* Galleria Prime React */}
                        <div className={cx('slider')}>slider</div>
                        <div className={cx('info')}>
                            <div className={cx('info-header')}>
                                <h5 className={cx('title')}>title</h5>
                                <h3 className={cx('name-pro')}>Name Product</h3>
                            </div>
                            <span className={cx('line')} />
                            <div className={cx('info-content')}>
                                <p className={cx('price')}>price</p>
                                <p className={cx('description')}>description</p>
                            </div>
                            <div className={cx('info-actions')}>
                                <div>counter</div>
                                <div>button</div>
                            </div>
                            <div className={cx('line-hint')}></div>
                            <p className={cx('note')}>Danh muc ...</p>
                        </div>
                    </div>
                    {/* TabView Prime React*/}
                    <div>des, rate, protect</div>
                    <div>similar</div>
                </div>
            </div>
        </div>
    );
}

export default LayoutDetailProduct;
