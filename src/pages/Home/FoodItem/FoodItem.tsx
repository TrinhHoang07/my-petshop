import { Title } from '../../../components/Title';
import styles from './FoodItem.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../assets/images/food_home_logo.png';
import img_1 from '../../../assets/images/food_item_1.jpg';
import img_2 from '../../../assets/images/food_item_2.jpg';
import img_3 from '../../../assets/images/food_item_3.jpg';
import img_4 from '../../../assets/images/food_item_4.jpg';
import { Button } from '../../../components/Button';
import { CardItemFlip } from '../../../components/CardItemFlip';
import routesConfig from '../../../config/routes';

const cx = classNames.bind(styles);

function FoodItem() {
    return (
        <div className={cx('wraper-fooditem')}>
            <Title logo={logo} title="Đồ Ăn" />
            <div className={cx('list-cards')}>
                <CardItemFlip
                    to={'product/food/1'}
                    title="ĐỒ ĂN"
                    name="O’fresh – CAT CARE 7.2kg"
                    src={img_1}
                    price="14,000,000đ"
                />
                <CardItemFlip
                    to={'product/food/2'}
                    title="ĐỒ ĂN"
                    name="Thức ăn cho mèo Cat’s Eye túi 7kg"
                    src={img_2}
                    price="14,000,000đ"
                />
                <CardItemFlip
                    to={'product/food/3'}
                    title="ĐỒ ĂN"
                    name="Snack Sleeky Chews Original"
                    src={img_3}
                    price="14,000,000đ"
                />
                <CardItemFlip
                    to={'product/food/4'}
                    title="ĐỒ ĂN"
                    name="SY – Bánh thưởng Steamed bread"
                    src={img_4}
                    price="14,000,000đ"
                />
                <CardItemFlip
                    to={'product/food/5'}
                    title="ĐỒ ĂN"
                    name="O’fresh – CAT CARE 7.2kg"
                    src={img_1}
                    price="14,000,000đ"
                />
                <CardItemFlip
                    to={'product/food/6'}
                    title="ĐỒ ĂN"
                    name="Thức ăn cho mèo Cat’s Eye túi 7kg"
                    src={img_2}
                    price="14,000,000đ"
                />
                <CardItemFlip
                    to={'product/food/7'}
                    title="ĐỒ ĂN"
                    name="Snack Sleeky Chews Original"
                    src={img_3}
                    price="14,000,000đ"
                />
                <CardItemFlip
                    to={'product/food/8'}
                    title="ĐỒ ĂN"
                    name="SY – Bánh thưởng Steamed bread"
                    src={img_4}
                    price="14,000,000đ"
                />
            </div>
            <div className={cx('btn-more')}>
                <Button to={routesConfig.food} medium={'true'}>
                    XEM THÊM
                </Button>
            </div>
        </div>
    );
}

export default FoodItem;
