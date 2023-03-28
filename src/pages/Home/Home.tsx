import classNames from 'classnames/bind';
import { Flash } from './Flash';
import styles from './Home.module.scss';
import Sliders from './Slider/Sliders';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('sliders')}>
            <Sliders />
            <Flash />
        </div>
    );
}

export default Home;
