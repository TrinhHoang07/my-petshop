import classNames from 'classnames/bind';
import styles from './Orders.module.scss';
import { TiLocation } from 'react-icons/ti';
import { Button } from '../../components/Button';
import img from '../../assets/images/new_3.jpg';
import { RiCoupon3Fill } from 'react-icons/ri';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { BiDetail } from 'react-icons/bi';

const cx = classNames.bind(styles);

function Orders() {
    return (
        <div className={cx('orders')}>
            <div className={cx('address')}>
                <div className={cx('heading')}>
                    <span>
                        <TiLocation />
                    </span>
                    <div className={cx('detail-info')}>
                        <h5 style={{ fontWeight: 'bold' }}>Địa chỉ nhận hàng</h5>
                        <div className="detail-info">
                            <h5 style={{ margin: '4px 0' }}>Trịnh Hoàng | 0396254427</h5>
                            <p>11 Ngõ 132/66 Nguyên Xá, Minh Khai, Bắc Từ Liêm, Hà Nội</p>
                        </div>
                    </div>
                </div>
                <Button medium={'true'}>Thay đổi địa chỉ</Button>
            </div>
            <div className={cx('products')}>
                <h3 className={cx('heading')}>TrinhHoang Shop</h3>
                <div className={cx('product-container')}>
                    <div className={cx('product-item')}>
                        <div className={cx('preview-product')}>
                            <img src={img} alt="ten san pham" />
                        </div>
                        <div className={cx('info-product')}>
                            <h3>Tên sản phẩm OK</h3>
                            <p>Phân loại: (size, màu)</p>
                            <p>x5 (SL)</p>
                            <p>Giá : 100.000.000đ</p>
                        </div>
                    </div>
                    <div className={cx('product-item')}>
                        <div className={cx('preview-product')}>
                            <img src={img} alt="ten san pham" />
                        </div>
                        <div className={cx('info-product')}>
                            <h3>Tên sản phẩm: OK</h3>
                            <p>Phân loại: (size, màu)</p>
                            <p>x5 (SL)</p>
                            <p>Giá : 100.000.000đ</p>
                        </div>
                    </div>
                </div>
                <div className={cx('voucher-shop')}>
                    <div className={cx('heading')}>
                        <span>
                            <RiCoupon3Fill />
                        </span>
                        <p>Voucher của Shop</p>
                    </div>
                    <p className={cx('select-voucher')}>Chọn hoặc nhập mã</p>
                </div>
            </div>
            <div className={cx('shippp')}>
                <h3>Phương thức vận chuyển (Có thể thay đổi)</h3>
                <div className={cx('info-ship')}>
                    <div>
                        <h5>Phương thức vận chuyển: Nhanh</h5>
                        <p>Nhận hàng vào 22/2 - 25/2</p>
                        <p style={{ color: 'orange' }}>Option áp mã vận chuyển</p>
                    </div>
                    <p style={{ color: '#000' }}>Phí giao hàng: 1.000.000đ</p>
                    <Button small={'true'}>Thay đổi</Button>
                </div>
            </div>
            <div className={cx('total-money')}>
                <h3>Tống số tiền (1 sản phẩm): </h3>
                <p>2.000.000đ</p>
            </div>
            <div className={cx('voucher-shop')}>
                <div className={cx('heading')}>
                    <span>
                        <RiCoupon3Fill />
                    </span>
                    <p>Voucher Shopee</p>
                </div>
                <p className={cx('select-voucher')}>Chọn hoặc nhập mã</p>
            </div>
            <div className={cx('voucher-shop')}>
                <div className={cx('heading')}>
                    <span>
                        <AiOutlineDollarCircle />
                    </span>
                    <p>Phương thức thanh toán</p>
                </div>
                <p className={cx('select-voucher')}>Chọn phương thức</p>
            </div>
            <div className={cx('details-payments')}>
                <div className={cx('heading-pay')}>
                    <span>
                        <BiDetail />
                    </span>
                    <p>Chi tiết thanh toán</p>
                </div>
                <div className={cx('contents')}>
                    <div className={cx('item-pay')}>
                        <p>Tổng tiền hàng</p>
                        <p>80.000đ</p>
                    </div>
                    <div className={cx('item-pay')}>
                        <p>Giảm giá của Shopee</p>
                        <p>12.000đ</p>
                    </div>
                    <div className={cx('item-pay')}>
                        <p>Tổng tiền phí vận chuyển</p>
                        <p>30.000đ</p>
                    </div>
                    <div className={cx('item-pay')}>
                        <p>Giảm giá phí vận chuyển</p>
                        <p>30.000đ</p>
                    </div>
                    <div className={cx('item-total')}>
                        <p>Tổng thanh toán</p>
                        <p>68.000đ</p>
                    </div>
                </div>
            </div>
            <div className={cx('buy-submit')}>
                <div className={cx('buys-container')}>
                    <div className={cx('info-total')}>
                        <p>Tổng thanh toán</p>
                        <h6>68.000đ</h6>
                    </div>
                    <button>Đặt hàng</button>
                </div>
            </div>
        </div>
    );
}

export default Orders;