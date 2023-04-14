import classNames from 'classnames/bind';
import styles from './Dog.module.scss';
import { LayoutProducts } from '../../components/Layout/LayoutProducts';

const cx = classNames.bind(styles);

function Dog() {
    return (
        <div>
            <LayoutProducts />
            <h1>DOGS</h1>
        </div>
    );
}

export default Dog;
