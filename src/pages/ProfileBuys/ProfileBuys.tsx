import classNames from 'classnames/bind';
import styles from './ProfileBuys.module.scss';
import { LayoutProfile } from '../../components/Layout/LayoutProfile';
import { TabView, TabPanel } from 'primereact/tabview';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import { useSetRecoilState } from 'recoil';
import { isMenuMobile } from '../../store';

const cx = classNames.bind(styles);

function ProfileBuys() {
    const setState = useSetRecoilState(isMenuMobile);

    return (
        <LayoutProfile>
            <div className={cx('profile-buys')}>
                <div>
                    <span onClick={() => setState(true)} className={cx('back-btn-profile')}>
                        <HiMenu />
                    </span>
                </div>
                <TabView>
                    <TabPanel header="Tất Cả">
                        <div className={cx('buys-search')}>
                            <span>
                                <AiOutlineSearch className={cx('icon-search')} size={'2.2rem'} />
                                <input type="text" placeholder="Tìm kiếm đơn hàng..." />
                            </span>
                        </div>
                    </TabPanel>
                    <TabPanel header="Đang Giao">
                        <h1>Processing...</h1>
                    </TabPanel>
                    <TabPanel header="Hoàn Thành">
                        <h1>Processing...</h1>
                    </TabPanel>
                    <TabPanel header="Đã Hủy">
                        <h1>Processing...</h1>
                    </TabPanel>
                    <TabPanel header="Hoàn Tiền">
                        <h1>Processing...</h1>
                    </TabPanel>
                </TabView>
            </div>
        </LayoutProfile>
    );
}

export default ProfileBuys;
