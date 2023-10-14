import { Title } from '../../../components/Title';
import styles from './DogItem.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../assets/images/dog_home_logo.png';
import { Button } from '../../../components/Button';
import { CardItem } from '../../../components/CardItem';
import routesConfig from '../../../config/routes';
import useDataInHome, { _T_DataItemHome } from '../../../hooks/useDataInHome';

const cx = classNames.bind(styles);

function DogItem() {
    const data = useDataInHome('http://localhost:3009/products/products/home?limit=8&type=dog');

    return (
        <div className={cx('wraper-dogitem')}>
            <Title logo={logo} title="Chó Cảnh" />
            <div className={cx('list-cards')}>
                {data.map((item: _T_DataItemHome) => (
                    <CardItem
                        key={item.id}
                        to={`product/dog/${item.id}`}
                        title="CHÓ CẢNH"
                        name={item.name}
                        src={item.previewUrl}
                        price={item.price}
                    />
                ))}
            </div>
            <div className={cx('btn-more')}>
                <Button to={routesConfig.dog} medium={'true'}>
                    XEM THÊM
                </Button>
            </div>
        </div>
    );
}

export default DogItem;
