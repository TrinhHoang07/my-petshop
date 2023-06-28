import classNames from 'classnames/bind';
import styles from './ProfileVouchers.module.scss';
import { LayoutProfile } from '../../components/Layout/LayoutProfile';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ProfileVouchers() {
    const [searchText, setSearchText] = useState<string>('');

    return (
        <LayoutProfile>
            <div className={cx('profile-voucher')}>
                <div className={cx('all-vouchers')}>
                    <div className={cx('header')}>
                        <p className={cx('heading')}>Kho Vouchers</p>
                    </div>
                    <div className={cx('contents')}>
                        <div className={cx('searching')}>
                            <span>Mã Voucher</span>
                            <div className={cx('input-wrapper')}>
                                <input
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    type="text"
                                    placeholder="Nhập mã voucher tại đây"
                                />
                                <AiFillCloseCircle
                                    onClick={() => setSearchText('')}
                                    style={{
                                        margin: '0 8px',
                                        color: '#333',
                                        cursor: 'pointer',
                                        visibility: !!searchText ? 'visible' : 'hidden',
                                    }}
                                />
                            </div>
                            <button
                                style={{
                                    opacity: !!searchText ? 1 : 0.3,
                                }}
                            >
                                Lưu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutProfile>
    );
}

export default ProfileVouchers;
