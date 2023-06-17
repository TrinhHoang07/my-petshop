import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProfileBanks.module.scss';
import { LayoutProfile } from '../../components/Layout/LayoutProfile';
import { IoAdd } from 'react-icons/io5';
import FormAdCredit from './FormAddCredit';
import FormAdBank from './FormAddBank';

const cx = classNames.bind(styles);

function ProfileBanks() {
    const [isVisibleCredit, setIsVisibleCredit] = useState(false);
    const [isVisibleBank, setIsVisibleBank] = useState(false);

    return (
        <LayoutProfile>
            <div className={cx('profile-bank')}>
                <div className={cx('credit_bebit-card')}>
                    <FormAdCredit visible={isVisibleCredit} setIsVisible={setIsVisibleCredit} />
                    <FormAdBank visible={isVisibleBank} setIsVisible={setIsVisibleBank} />
                    <div className={cx('header')}>
                        <p className={cx('heading')}>Thẻ Tín Dụng/Ghi Nợ</p>
                        <p onClick={() => setIsVisibleCredit(true)} className={cx('btn-credit')}>
                            <IoAdd />
                            Thêm Thẻ Mới
                        </p>
                    </div>
                    <div className={cx('contents')}>
                        <p className={cx('detail-no-credit')}>Bạn chưa liên kết thẻ.</p>
                    </div>
                </div>
                <div className={cx('my-bank')}>
                    <div className={cx('header')}>
                        <p className={cx('heading')}>Tài Khoản Ngân Hàng Của Tôi</p>
                        <p onClick={() => setIsVisibleBank(true)} className={cx('btn-credit')}>
                            <IoAdd />
                            Thêm Tài Khoản Ngân Hàng
                        </p>
                    </div>
                    <div className={cx('contents')}>
                        <p className={cx('detail-no-credit')}>Bạn chưa có tài khoản ngân hàng.</p>
                    </div>
                </div>
            </div>
        </LayoutProfile>
    );
}

export default ProfileBanks;
