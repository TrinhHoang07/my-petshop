import classNames from 'classnames/bind';
import styles from './Description.module.scss';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

type TProps = {
    logo: any;
    heading: string;
    description: string;
    path: string;
};

function DescriptionItem(props: TProps) {
    return (
        <div className={cx('description-item')}>
            <div className={cx('logo')}>
                <img src={props.logo} alt="logo" />
            </div>
            <h3 className={cx('heading-description-item')}>{props.heading}</h3>
            <p className={cx('description-p')}>{props.description}</p>
            <Link to={props.path}>
                <div className={cx('btn')}>
                    <Button small={'true'}>XEM THÊM</Button>
                </div>
            </Link>
        </div>
    );
}

export default DescriptionItem;
