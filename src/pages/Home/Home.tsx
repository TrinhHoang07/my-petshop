import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Sliders from './Slider/Sliders';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('sliders')}>
            <Sliders />
        </div>
    );
}

export default Home;
