import classNames from 'classnames/bind';
import styles from './BarProducts.module.scss';
import img from '../../../../assets/images/meoww.jpg';

const cx = classNames.bind(styles);

type TProps = {
    data: any[];
};

function SuggestProducts(props: TProps) {
    return (
        <div className={cx('suggest-pro')}>
            <h6 className={cx('heading-menu')}>SẢN PHẨM</h6>
            <div className={cx('wrapper-suggest')}>
                {props.data.map(() => (
                    <>
                        <div className={cx('suggest-item')}>
                            <div className={cx('preview-suggest')}>
                                <img src={img} alt="preview product" />
                            </div>
                            <div className={cx('suggest-info')}>
                                <h6 className={cx('heading-suggest')}>Name product</h6>
                                <p className={cx('price-suggest-item')}>300000đ</p>
                            </div>
                        </div>
                        {/* <div className={cx('line-suggest')}></div> */}
                    </>
                ))}
            </div>
        </div>
    );
}

export default SuggestProducts;
