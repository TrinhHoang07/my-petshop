import classNames from 'classnames/bind';
import styles from './Orders.module.scss';
import { TiLocation } from 'react-icons/ti';
import { Button } from '../../components/Button';
import { RiCoupon3Fill } from 'react-icons/ri';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { BiDetail } from 'react-icons/bi';
import { useEffect, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import { orderItems } from '../../store';
import { useConfirmToast } from '../../context/ConfirmAndToastContext';
import { ApiService } from '../../axios/ApiService';
import { useSessionContext } from '../../context/SessionContext';
import { useNavigate } from 'react-router-dom';
import { TData, T_AddOrder } from '../../models';
import routesConfig from '../../config/routes';
import { formatVND } from '../../Helper';

const cx = classNames.bind(styles);

function Orders() {
    const [data, setData] = useRecoilState(orderItems);
    const toast = useConfirmToast();
    const apiService = new ApiService();
    const [values] = useSessionContext();
    const navigate = useNavigate();
    const [init, setInit] = useState<boolean>(false);

    useEffect(() => {
        document.title = 'Mua sắm | Petshop chất lượng số 1 Việt Nam!';
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
    }, []);

    const totalMoney = useMemo(() => {
        if (data.length > 0) {
            const result = data.reduce((result, cur) => result + cur.lastPrice, 0);

            return {
                price: result,
                length: data.length,
            };
        }
    }, [data]);

    useEffect(() => {
        console.log('data: ', data);
        setInit(true);

        return () => {
            init && setData([]);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [init]);

    const handleOrders = () => {
        // handle BUY PRODUCTS (CALL API)
        if (data.length > 0) {
            const dataPost = {
                customer_id: values.user?.id,
                product_id: data[0].id,
                quantity: data[0].quantity,
                price: data[0].price,
            };

            console.log('orders: ', dataPost);

            apiService.orders
                .addOrder(dataPost, values.user?.token ?? '')
                .then((res: T_AddOrder) => {
                    if (res.message === 'success') {
                        toast.current?.show({
                            severity: 'success',
                            summary: 'Thành công',
                            detail: 'Đặt hàng thành công!',
                            life: 3000,
                        });

                        setTimeout(() => {
                            navigate(routesConfig.profile_buy);
                        }, 1500);
                    }
                })
                .catch((err) => {
                    console.error(err);
                    toast.current?.show({
                        severity: 'error',
                        summary: 'Thất bại',
                        detail: 'Đã xảy ra lỗi, vui lòng thử lại!',
                        life: 3000,
                    });
                });
        } else {
            toast.current?.show({
                severity: 'error',
                summary: 'Có lỗi',
                detail: 'Vui lòng chọn sản phẩm cần mua!',
                life: 3000,
            });
        }
    };

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
                    {data.length > 0 &&
                        data.map((item: TData) => (
                            <div key={item.id} className={cx('product-item')}>
                                <div className={cx('preview-product')}>
                                    <img src={item.previewUrl} alt={item.name} />
                                </div>
                                <div className={cx('info-product')}>
                                    <h3>{item.name}</h3>
                                    <p>Phân loại: {item.color ?? 'Không có'}</p>
                                    <p>Số lượng: x{item.quantity}</p>
                                    <p>Giá : {formatVND.format(item.price)}</p>
                                    <p>Thành tiền : {formatVND.format(item.lastPrice)}</p>
                                </div>
                            </div>
                        ))}
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
                <h3>Tống số tiền ({totalMoney?.length} sản phẩm): </h3>
                <p>{formatVND.format(totalMoney?.price ?? 0)}</p>
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
                        <p>{formatVND.format(totalMoney?.price ?? 0)}</p>
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
                    <button onClick={handleOrders}>Đặt hàng</button>
                </div>
            </div>
        </div>
    );
}

export default Orders;
