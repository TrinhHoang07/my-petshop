import classNames from 'classnames/bind';
import styles from './News.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
type TProps = {
    logo: any;
    title: string;
    description: string;
    id: number;
};

function NewItem(props: TProps) {
    return (
        <div className={cx('new-item')}>
            <div className={cx('wrapper-item')}>
                <Link to={`/news/detail/${props.id}`}>
                    <div className={cx('item-thumb')}>
                        <img src={props.logo} alt="thumbnail" />
                    </div>
                </Link>
                <div className={cx('item-info')}>
                    <Link
                        style={{
                            textDecoration: 'none',
                            color: '#333',
                        }}
                        to={`/news/detail/${props.id}`}
                    >
                        <h3 className={cx('heading-title')}>{props.title}</h3>
                    </Link>
                    <p className={cx('item-description')}>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default NewItem;
