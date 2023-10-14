import styles from './CatItem.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../assets/images/cat_home_logo.png';
// import beyeu from '../../../assets/images/beyeu.jpg';
import { Title } from '../../../components/Title';
import { CardItemZoomInLeft } from '../../../components/CardItemZoomInLeft';
import { Button } from '../../../components/Button';
import routesConfig from '../../../config/routes';
import useDataInHome, { _T_DataItemHome } from '../../../hooks/useDataInHome';

const cx = classNames.bind(styles);

function CatItem() {
    const data = useDataInHome('http://localhost:3009/products/products/home?limit=8&type=cat');

    return (
        <div className={cx('wraper-catitem')}>
            <Title logo={logo} title="Mèo Cảnh" />
            <div className={cx('list-cards')}>
                {data.map((item: _T_DataItemHome) => (
                    <CardItemZoomInLeft
                        key={item.id}
                        to={`product/cat/${item.id}`}
                        title="MÈO CẢNH"
                        name={item.name}
                        src={item.previewUrl}
                        price={item.price}
                    />
                ))}
            </div>
            <div className={cx('btn-more')}>
                <Button to={routesConfig.cat} medium={'true'}>
                    XEM THÊM
                </Button>
            </div>
        </div>
    );
}

export default CatItem;
