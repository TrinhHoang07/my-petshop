import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import { LayoutDetailProduct } from '../../components/Layout/LayoutDetailProduct';

const cx = classNames.bind(styles);

function Detail() {
    return (
        <LayoutDetailProduct>
            <h1>hello</h1>
        </LayoutDetailProduct>
    );
}

export default Detail;
