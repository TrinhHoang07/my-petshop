import classNames from 'classnames/bind';
import styles from './LayoutProfile.module.scss';
import { useEffect } from 'react';
import { SideBarProfile } from '../components/SideBarProfile';

const cx = classNames.bind(styles);

type TProps = {
    children: React.ReactNode;
};

function LayoutProfile(props: TProps) {
    useEffect(() => {
        document.title = 'Cá nhân | Petshop chất lượng số 1 Việt Nam!';
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
    }, []);

    return (
        <div className={cx('layout-detail-product')}>
            <div className={cx('contents')}>
                <div className={cx('nav-bar')}>
                    <SideBarProfile />
                </div>
                <div className={cx('detail')}>
                    <div className={cx('detail-wrapper')}>{props.children}</div>
                </div>
            </div>
        </div>
    );
}

export default LayoutProfile;
