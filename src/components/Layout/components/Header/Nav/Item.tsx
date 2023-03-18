import { Link } from 'react-router-dom';
import styles from '../Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type ItemProps = {
    name: string;
    to: string;
};

function Item(props: ItemProps) {
    return (
        <Link className={cx('item-link')} to={props.to}>
            {props.name}
        </Link>
    );
}

export default Item;
