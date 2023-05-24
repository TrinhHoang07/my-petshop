import { Link } from 'react-router-dom';
import styles from './UseFul.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
type TProps = {
    to?: string;
    img: any;
    heading: string;
    description: string;
};

function UseFulItem(props: TProps) {
    return (
        <Link to={props.to ?? '/'} className={cx('wrapper-useful-item')}>
            <div className={cx('avatar')}>
                <img src={props.img} alt="preview avatar" />
            </div>
            <div className={cx('description')}>
                <h3 className={cx('heading-item')}>{props.heading}</h3>
                <p className={cx('content-description')}>{props.description}</p>
                <Link className={cx('link-useful')} to="">
                    XEM THÊM
                </Link>
            </div>
        </Link>
    );
}

export default UseFulItem;
