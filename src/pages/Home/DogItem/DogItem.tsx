import { Title } from '../../../components/Title';
import styles from './DogItem.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../assets/images/dog_home_logo.png';
import img_1 from '../../../assets/images/dog_item_1.jpg';
import img_2 from '../../../assets/images/dog_item_2.jpg';
import img_3 from '../../../assets/images/dog_item_3.jpg';
import img_4 from '../../../assets/images/dog_item_4.jpg';
import { Button } from '../../../components/Button';
import { CardItem } from '../../../components/Layout/components/CardItem';

const cx = classNames.bind(styles);

function DogItem() {
    return (
        <div className={cx('wraper-dogitem')}>
            <Title logo={logo} title="Chó Cảnh" />
            <div className={cx('list-cards')}>
                <CardItem title="CHÓ CẢNH" name="Chó American Eskimo" src={img_1} price="14,000,000đ" />
                <CardItem title="CHÓ CẢNH" name="Chó American Eskimo" src={img_2} price="14,000,000đ" />
                <CardItem title="CHÓ CẢNH" name="Chó American Eskimo" src={img_3} price="14,000,000đ" />
                <CardItem title="CHÓ CẢNH" name="Chó American Eskimo" src={img_4} price="14,000,000đ" />
                <CardItem title="CHÓ CẢNH" name="Chó American Eskimo" src={img_1} price="14,000,000đ" />
                <CardItem title="CHÓ CẢNH" name="Chó American Eskimo" src={img_2} price="14,000,000đ" />
                <CardItem title="CHÓ CẢNH" name="Chó American Eskimo" src={img_3} price="14,000,000đ" />
                <CardItem title="CHÓ CẢNH" name="Chó American Eskimo" src={img_4} price="14,000,000đ" />
            </div>
            <div className={cx('btn-more')}>
                <Button medium={'true'}>XEM THÊM</Button>
            </div>
        </div>
    );
}

export default DogItem;
