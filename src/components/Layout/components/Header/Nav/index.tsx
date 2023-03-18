import routesConfig from '../../../../../config/routes';
import Item from './Item';
import classNames from 'classnames/bind';
import styles from '../Header.module.scss';

const cx = classNames.bind(styles);

type TData = {
    id: number;
    name: string;
    path: string;
};

function Nav() {
    const data: TData[] = [
        {
            id: 1,
            name: 'Giới thiệu',
            path: routesConfig.description,
        },
        {
            id: 2,
            name: 'Chó cảnh',
            path: routesConfig.dog,
        },
        {
            id: 3,
            name: 'Mèo cảnh',
            path: routesConfig.cat,
        },
        {
            id: 4,
            name: 'Đồ ăn',
            path: routesConfig.food,
        },
        {
            id: 5,
            name: 'Phụ kiện',
            path: routesConfig.accessories,
        },
        {
            id: 6,
            name: 'Tin tức',
            path: routesConfig.news,
        },
        {
            id: 7,
            name: 'Liên hệ',
            path: routesConfig.contact,
        },
    ];

    return (
        <div className={cx('header-nav')}>
            {data.map((item: TData) => (
                <Item key={item.id} name={item.name} to={item.path} />
            ))}
        </div>
    );
}

export default Nav;
