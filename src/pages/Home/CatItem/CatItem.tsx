import styles from './CatItem.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../assets/images/cat_home_logo.png';
import img_1 from '../../../assets/images/cat_item_1.jpg';
import img_2 from '../../../assets/images/cat_item_2.jpg';
import img_3 from '../../../assets/images/cat_item_3.jpg';
import img_4 from '../../../assets/images/cat_item_4.jpg';
import { Title } from '../../../components/Title';
import { CardItem } from '../../../components/Layout/components/CardItem';
import { Button } from '../../../components/Button';

const cx = classNames.bind(styles);

function CatItem() {
    return (
        <div className={cx('wraper-catitem')}>
            <Title logo={logo} title="Mèo Cảnh" />
            <div className={cx('list-cards')}>
                <CardItem title="MÈO CẢNH" name="Mèo Anh Lông Dài" src={img_1} price="14,000,000đ" />
                <CardItem title="MÈO CẢNH" name="Chó American Eskimo" src={img_2} price="14,000,000đ" />
                <CardItem title="MÈO CẢNH" name="Mèo Anh Lông Ngắn" src={img_3} price="14,000,000đ" />
                <CardItem title="MÈO CẢNH" name="Chó American Eskimo" src={img_4} price="14,000,000đ" />
                <CardItem title="MÈO CẢNH" name="Chó American Eskimo" src={img_1} price="14,000,000đ" />
                <CardItem title="MÈO CẢNH" name="Chó American Eskimo" src={img_2} price="14,000,000đ" />
                <CardItem title="MÈO CẢNH" name="Chó American Eskimo" src={img_3} price="14,000,000đ" />
                <CardItem title="MÈO CẢNH" name="Chó American Eskimo" src={img_4} price="14,000,000đ" />
            </div>
            <div className={cx('btn-more')}>
                <Button medium={'true'}>XEM THÊM</Button>
            </div>
        </div>
    );
}

export default CatItem;
