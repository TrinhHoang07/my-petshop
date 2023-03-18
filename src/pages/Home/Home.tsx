import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div
            style={{
                height: '500px',
            }}
        >
            Home Page
        </div>
    );
}

export default Home;
