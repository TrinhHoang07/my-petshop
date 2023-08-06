import { Link } from 'react-router-dom';
import styles from './CardItem.module.scss';
import classNames from 'classnames/bind';
import { formatMoney } from '../../Helper';

const cx = classNames.bind(styles);

type TProps = {
    to?: string;
    src: any;
    title: string;
    name: string;
    price: string;
    flash?: string;
};

function CardItem(props: TProps) {
    return (
        <Link className={cx('link-detail')} to={props.to ?? '/'}>
            <div className={cx('detail-dog')}>
                <div data-aos="fade-left">
                    <div className={cx('wrap')}>
                        <div className={cx('preview')}>
                            <img src={props.src} alt="preview dog" />
                        </div>
                        <div className={cx('info')}>
                            <p className={cx('title')}>{props.title}</p>
                            <h3 className={cx('name-dog')}>{props.name}</h3>
                            <p className={cx('price')}>{formatMoney(props.price)}đ</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CardItem;
