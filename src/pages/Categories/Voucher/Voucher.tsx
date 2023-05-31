import classNames from 'classnames/bind';
import styles from './Voucher.module.scss';
import img from '../../../assets/images/freeship.png';

const cx = classNames.bind(styles);

function Voucher() {
    const handleCloseVoucher = () => {
        const mask: HTMLElement | null = document.getElementById('mask');
        const voucher: HTMLElement | null = document.getElementById('voucher');

        if (mask) {
            mask.style.visibility = 'hidden';
        }
        if (voucher) {
            voucher.style.transform = 'translate(-50%, -50%) scale(0)';
        }
    };

    return (
        <div className={cx('voucher')}>
            <div id="mask" className={cx('mask')}></div>
            <div id="voucher" className={cx('contents')}>
                <div className={cx('header')}>
                    <h3>Petshop Vouchers</h3>
                    <div className={cx('search-vouchers')}>
                        <span>Mã voucher: </span>
                        <input type="text" placeholder="Aa..." />
                        <button>ÁP DỤNG</button>
                    </div>
                </div>
                <div className={cx('vouchers')}>
                    <div className={cx('voucher-item')}>
                        <div className={cx('wraper-info')}>
                            <div className={cx('preview_img')}>
                                <img src={img} alt="voucher images" />
                            </div>
                            <div className={cx('info-voucher')}>
                                <p>Name voucher</p>
                                <p>Condition voucher</p>
                                <p className={cx('danger')}>50% - Tối đa 30k</p>
                                <p className={cx('deadline')}>Sắp hết hạn: còn 3 ngày</p>
                            </div>
                        </div>
                        <div className={cx('checked-input')}>
                            <input type="radio" />
                        </div>
                    </div>
                    <div className={cx('voucher-item')}>
                        <div className={cx('wraper-info')}>
                            <div className={cx('preview_img')}>
                                <img src={img} alt="voucher images" />
                            </div>
                            <div className={cx('info-voucher')}>
                                <p>Name voucher</p>
                                <p>Condition voucher</p>
                                <p className={cx('danger')}>50% - Tối đa 30k</p>
                                <p className={cx('deadline')}>Sắp hết hạn: còn 3 ngày</p>
                            </div>
                        </div>
                        <div className={cx('checked-input')}>
                            <input type="radio" />
                        </div>
                    </div>
                    <div className={cx('voucher-item')}>
                        <div className={cx('wraper-info')}>
                            <div className={cx('preview_img')}>
                                <img src={img} alt="voucher images" />
                            </div>
                            <div className={cx('info-voucher')}>
                                <p>Name voucher</p>
                                <p>Condition voucher</p>
                                <p className={cx('danger')}>50% - Tối đa 30k</p>
                                <p className={cx('deadline')}>Sắp hết hạn: còn 3 ngày</p>
                            </div>
                        </div>
                        <div className={cx('checked-input')}>
                            <input type="radio" />
                        </div>
                    </div>
                    <div className={cx('voucher-item')}>
                        <div className={cx('wraper-info')}>
                            <div className={cx('preview_img')}>
                                <img src={img} alt="voucher images" />
                            </div>
                            <div className={cx('info-voucher')}>
                                <p>Name voucher</p>
                                <p>Condition voucher</p>
                                <p className={cx('danger')}>50% - Tối đa 30k</p>
                                <p className={cx('deadline')}>Sắp hết hạn: còn 3 ngày</p>
                            </div>
                        </div>
                        <div className={cx('checked-input')}>
                            <input type="radio" />
                        </div>
                    </div>
                    <div className={cx('voucher-item')}>
                        <div className={cx('wraper-info')}>
                            <div className={cx('preview_img')}>
                                <img src={img} alt="voucher images" />
                            </div>
                            <div className={cx('info-voucher')}>
                                <p>Name voucher</p>
                                <p>Condition voucher</p>
                                <p className={cx('danger')}>50% - Tối đa 30k</p>
                                <p className={cx('deadline')}>Sắp hết hạn: còn 3 ngày</p>
                            </div>
                        </div>
                        <div className={cx('checked-input')}>
                            <input type="radio" />
                        </div>
                    </div>
                </div>
                <div className={cx('footer')}>
                    <button onClick={handleCloseVoucher}>TRỞ LẠI</button>
                    <button className={cx('primary')}>OK</button>
                </div>
            </div>
        </div>
    );
}

export default Voucher;
