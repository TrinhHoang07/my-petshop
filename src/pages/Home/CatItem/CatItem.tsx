import styles from './CatItem.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../assets/images/cat_home_logo.png';
import img_1 from '../../../assets/images/cat_item_1.jpg';
import img_2 from '../../../assets/images/cat_item_2.jpg';
import img_3 from '../../../assets/images/cat_item_3.jpg';
import img_4 from '../../../assets/images/cat_item_4.jpg';
import { Title } from '../../../components/Title';
import { CardItemZoomInLeft } from '../../../components/CardItemZoomInLeft';
import { Button } from '../../../components/Button';
import routesConfig from '../../../config/routes';

const cx = classNames.bind(styles);

function CatItem() {
    return (
        <div className={cx('wraper-catitem')}>
            <Title logo={logo} title="Mèo Cảnh" />
            <div className={cx('list-cards')}>
                <CardItemZoomInLeft
                    to={'product/cat/1'}
                    title="MÈO CẢNH"
                    name="Mèo Anh Lông Dài"
                    src={img_1}
                    price="14,000,000đ"
                />
                <CardItemZoomInLeft
                    to={'product/cat/2'}
                    title="MÈO CẢNH"
                    name="Chó American Eskimo"
                    src={img_2}
                    price="14,000,000đ"
                />
                <CardItemZoomInLeft
                    to={'product/cat/3'}
                    title="MÈO CẢNH"
                    name="Mèo Anh Lông Ngắn"
                    src={img_3}
                    price="14,000,000đ"
                />
                <CardItemZoomInLeft
                    to={'product/cat/4'}
                    title="MÈO CẢNH"
                    name="Chó American Eskimo"
                    src={img_4}
                    price="14,000,000đ"
                />
                <CardItemZoomInLeft
                    to={'product/cat/5'}
                    title="MÈO CẢNH"
                    name="Chó American Eskimo"
                    src={img_1}
                    price="14,000,000đ"
                />
                <CardItemZoomInLeft
                    to={'product/cat/6'}
                    title="MÈO CẢNH"
                    name="Chó American Eskimo"
                    src={img_2}
                    price="14,000,000đ"
                />
                <CardItemZoomInLeft
                    to={'product/cat/7'}
                    title="MÈO CẢNH"
                    name="Chó American Eskimo"
                    src={img_3}
                    price="14,000,000đ"
                />
                <CardItemZoomInLeft
                    to={'product/cat/8'}
                    title="MÈO CẢNH"
                    name="Chó American Eskimo"
                    src={img_4}
                    price="14,000,000đ"
                />
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
