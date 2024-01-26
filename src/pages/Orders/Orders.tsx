import classNames from 'classnames/bind';
import styles from './Orders.module.scss';
import { TiLocation } from 'react-icons/ti';
import image from '../../assets/images/success-pay.png';
import imagefail from '../../assets/images/fail-pay.png';
import { Button } from '../../components/Button';
import { RiCoupon3Fill } from 'react-icons/ri';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { BiDetail } from 'react-icons/bi';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { orderItems } from '../../store';
import { useConfirmToast } from '../../context/ConfirmAndToastContext';
import { ApiService } from '../../axios/ApiService';
import { useSessionContext } from '../../context/SessionContext';
import { useNavigate } from 'react-router-dom';
import { Address, TData, T_AddOrder, T_Payment, T_ProfileAddress } from '../../models';
import routesConfig from '../../config/routes';
import { formatVND } from '../../Helper';
import { AddressScreen } from '../../components/Layout/components/Address';

const cx = classNames.bind(styles);

// const VNP_TMNCODE = 'B1QK6DWP';
// const VNP_HASHSECRET = 'EBORDBWITKXNTPPEKGIBHTURKFPILLUI';
// const VNP_URL = 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html';
// const VNP_API = 'https://sandbox.vnpayment.vn/merchant_webapi/api/transaction';
// const VNP_RETURNURL = 'http://localhost:3000/carts/orders';

function Orders() {
    const [data, setData] = useRecoilState(orderItems);
    const message = useConfirmToast();
    const apiService = new ApiService();
    const [values] = useSessionContext();
    const navigate = useNavigate();
    const [init, setInit] = useState<boolean>(false);
    const [isChangeAddress, setIsChangeAddress] = useState<boolean>(false);
    const [statePay, setStatePay] = useState<string>('');
    const [vouchers, setVouchers] = useState<{
        ship: number;
        shop: number;
    }>({
        shop: 100000,
        ship: 0,
    });
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [addressChoose, setAddressChoose] = useState<Address>();

    const timer = useRef<any>();

    useEffect(() => {
        apiService.address
            .getAddressesById((values.user?.id as number).toString(), values.user?.token ?? '')
            .then((res: T_ProfileAddress) => {
                if (res.message === 'success') {
                    setAddresses(res.data);

                    if (res.data.length > 0) {
                        setAddressChoose(res.data[0]);
                    }
                }
            })
            .catch((err) => console.error(err));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

    const totalPay = useMemo(() => {
        if (totalMoney?.price) {
            return totalMoney.price - totalMoney.length * vouchers.ship - totalMoney.length * vouchers.shop;
        }

        return 0;
    }, [totalMoney, vouchers]);

    useEffect(() => {
        setInit(true);

        return () => {
            init && setData([]);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [init]);

    useEffect(() => {
        if (data.length <= 0) {
            navigate(routesConfig.categories);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const handleGetPaymentById = (res: { url: string; id: number }) => {
        apiService.payments
            .getPaymentById(`${res.id}`, values.user?.token ?? '')
            .then((res: T_Payment) => {
                if (res.message === 'success' && res.data.state === '00') {
                    setStatePay('success');
                    message?.toast?.current?.show({
                        severity: 'success',
                        summary: 'Thành công',
                        detail: 'Thanh toán thành công!',
                        life: 4500,
                    });
                    clearInterval(timer.current);
                } else if (res.message === 'success' && res.data.state === '03') {
                    setStatePay('error');
                    message?.toast?.current?.show({
                        severity: 'error',
                        summary: 'Có lỗi',
                        detail: 'Thanh toán thất bại!',
                        life: 4500,
                    });
                    clearInterval(timer.current);
                } else if (res.message === 'success' && res.data.state === '97') {
                    setStatePay('checksumfail');
                    message?.toast?.current?.show({
                        severity: 'error',
                        summary: 'Có lỗi',
                        detail: 'Thanh toán thất bại, chữ ký không hợp lệ!',
                        life: 4500,
                    });
                    clearInterval(timer.current);
                }
            })
            .catch((_) => {
                setStatePay('error');
            });

        // axios
        //     .get(`http://localhost:3009/payment/order/${res.data.id}`)
        //     .then((res: T_Payment) => {
        //         if (res.data.message === 'success' && res.data.data.state === '00') {
        //             setStatePay('success');
        //             message?.toast?.current?.show({
        //                 severity: 'success',
        //                 summary: 'Thành công',
        //                 detail: 'Thanh toán thành công!',
        //                 life: 4500,
        //             });
        //             clearInterval(timer.current);
        //         } else if (res.data.message === 'success' && res.data.data.state === '03') {
        //             setStatePay('error');
        //             message?.toast?.current?.show({
        //                 severity: 'error',
        //                 summary: 'Có lỗi',
        //                 detail: 'Thanh toán thất bại!',
        //                 life: 4500,
        //             });
        //             clearInterval(timer.current);
        //         } else if (res.data.message === 'success' && res.data.data.state === '97') {
        //             setStatePay('checksumfail');
        //             message?.toast?.current?.show({
        //                 severity: 'error',
        //                 summary: 'Có lỗi',
        //                 detail: 'Thanh toán thất bại, chữ ký không hợp lệ!',
        //                 life: 4500,
        //             });
        //             clearInterval(timer.current);
        //         }
        //     })
        //     .catch(() => setStatePay('error'));
    };

    // const handleTestApi = async () => {
    //     const date = new Date();
    //     const createDate = moment(date).format('YYYYMMDDHHmmss');
    //     const tmnCode = VNP_TMNCODE;
    //     const secretKey = VNP_HASHSECRET;
    //     let vnpUrl = VNP_URL;
    //     const returnUrl = VNP_RETURNURL;
    //     const orderId = moment(date).format('DDHHmmss');
    //     const amount = 1000000;
    //     // const bankCode = data.bankCode;
    //     const currCode = 'VND';
    //     let vnp_Params: any = {};
    //     vnp_Params['vnp_Version'] = '2.1.0';
    //     vnp_Params['vnp_Command'] = 'pay';
    //     vnp_Params['vnp_TmnCode'] = tmnCode;
    //     vnp_Params['vnp_Locale'] = 'vn';
    //     vnp_Params['vnp_CurrCode'] = currCode;
    //     vnp_Params['vnp_TxnRef'] = orderId;
    //     vnp_Params['vnp_OrderInfo'] = 'Noi dung thanh toan';
    //     vnp_Params['vnp_OrderType'] = 'other';
    //     vnp_Params['vnp_Amount'] = amount * 100;
    //     vnp_Params['vnp_ReturnUrl'] = returnUrl;
    //     vnp_Params['vnp_IpAddr'] = await publicIpv4();
    //     vnp_Params['vnp_CreateDate'] = createDate;

    //     // if (bankCode !== null && bankCode !== '') {
    //     //     vnp_Params['vnp_BankCode'] = bankCode;
    //     // }

    //     vnp_Params = sortObject(vnp_Params);
    //     const signData = querystring.stringify(vnp_Params, { encode: false });
    //     const hmac = CryptoJS.HmacSHA512(signData, secretKey).toString();
    //     // const signed = hmac.toString(new Buffer(signData, 'utf-8')).digest('hex');
    //     vnp_Params['vnp_SecureHash'] = hmac;
    //     vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });

    //     setUrl(vnpUrl);
    // };

    // let sumQuery = querystring.parse(window.location.search);
    // if (JSON.stringify(sumQuery) !== JSON.stringify({})) {
    //     const secureHash = sumQuery['vnp_SecureHash'];
    //     delete sumQuery['vnp_SecureHash'];
    //     delete sumQuery['vnp_SecureHashType'];
    //     sumQuery = sortObject(sumQuery);

    //     // const tmnCode = VNP_TMNCODE;
    //     const secretKey = VNP_HASHSECRET;
    //     const signData = querystring.stringify(sumQuery, { encode: false });
    //     const hmac = CryptoJS.HmacSHA512(signData, secretKey).toString();
    //     // const signed = hmac.update(new Buffer(signData, 'utf-8')).digest('hex');

    //     if (secureHash === hmac) {
    //         if (sumQuery['vnp_ResponseCode'] === '00') {
    //             console.log('success');
    //         } else {
    //             console.log('error');
    //         }
    //     } else {
    //         console.log('checksum error');
    //     }
    // }

    const handleOrders = () => {
        if (data.length > 0) {
            setStatePay('paying');

            // chưa handle mua nhiều mặt hàng một lúc
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
                        return apiService.payments
                            .addPayment(
                                {
                                    state: '99',
                                    order_id: res.data.id,
                                },
                                values.user?.token ?? '',
                            )
                            .then((res: T_Payment) => {
                                if (res.message === 'success') {
                                    return res;
                                }
                            })

                            .catch((err) => console.error(err));
                    }
                })
                .then((res) => {
                    return apiService.payments
                        .createVNPAY(
                            {
                                amount: 1000000,
                                pay_id: res?.data.id,
                                // bankCode: 'VNPAYQR',
                                orderInfo: 'Test thanh toan VN PAY QR',
                            },
                            values.user?.token ?? '',
                        )
                        .then((res: { url: string; id: number }) => {
                            if (res.url) {
                                window.open(res.url);

                                timer.current = setInterval(() => {
                                    handleGetPaymentById(res);
                                }, 1500);
                            }
                        })
                        .catch((err) => {
                            console.log('error VNPAY: ' + err);
                        });
                })
                .catch((err) => {
                    console.error(err);
                    message?.toast?.current?.show({
                        severity: 'error',
                        summary: 'Thất bại',
                        detail: 'Đã xảy ra lỗi, vui lòng thử lại!',
                        life: 3000,
                    });
                });
        } else {
            message?.toast?.current?.show({
                severity: 'error',
                summary: 'Có lỗi',
                detail: 'Vui lòng chọn sản phẩm cần mua!',
                life: 3000,
            });
        }
    };

    return (
        <div className={cx('orders')}>
            <AddressScreen
                data={addresses}
                open={isChangeAddress}
                setOpen={setIsChangeAddress}
                setChoose={setAddressChoose}
                choose={addressChoose}
            />
            {!!statePay && (
                <div className={cx('fixed-payment')}>
                    <div className={cx('wrapper-payment')}>
                        {statePay !== 'success' && statePay !== 'error' && statePay !== 'checksumfail' && (
                            <span className={cx('loader')}></span>
                        )}
                        <div className={cx('image-pay-success')}>
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            {statePay === 'success' && <img src={image} alt="success image" />}
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            {statePay === 'error' && <img src={imagefail} alt="fail image" />}
                        </div>
                        <p>
                            {statePay === 'success'
                                ? 'Thanh toán thành công'
                                : statePay === 'error'
                                ? 'Thanh toán thất bại'
                                : statePay === 'checksumfail'
                                ? 'Thanh toán thất bại, chữ ký không hợp lệ'
                                : 'Đang tiến hành thanh toán...'}
                        </p>
                        <div className={cx('group-button-pay')}>
                            {statePay === 'success' && (
                                <>
                                    <Button to={routesConfig.profile_buy}>Đến đơn mua</Button>
                                    <Button to={routesConfig.home}>Về trang chủ</Button>
                                </>
                            )}
                            {statePay === 'error' && <Button to={routesConfig.categories}>Quay lại giỏ hàng</Button>}
                        </div>
                    </div>
                </div>
            )}
            <div className={cx('address')}>
                <div className={cx('heading')}>
                    <span>
                        <TiLocation />
                    </span>
                    <div className={cx('detail-info')}>
                        <h5 style={{ fontWeight: 'bold' }}>Địa chỉ nhận hàng</h5>
                        {addresses.length > 0 ? (
                            <div className="detail-info">
                                <h5 style={{ margin: '4px 0' }}>
                                    {addressChoose?.full_name} | {addressChoose?.phone_number}
                                </h5>
                                <p>
                                    {addressChoose?.detail_address}, {addressChoose?.main_address}
                                </p>
                            </div>
                        ) : (
                            <div className="detail-info">
                                <p>Bạn chưa có địa chỉ, vui lòng thêm địa chỉ!</p>
                            </div>
                        )}
                    </div>
                </div>
                <Button onClick={() => setIsChangeAddress(true)} medium={'true'}>
                    Thay đổi địa chỉ
                </Button>
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
                    <p style={{ color: '#000' }}>Phí giao hàng: {formatVND.format(vouchers.ship)}</p>
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
                    <p>Voucher của shop</p>
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
                        <p>Giảm giá của Shop</p>
                        <p>{formatVND.format((totalMoney?.length ?? 1) * vouchers.shop)}</p>
                    </div>
                    <div className={cx('item-pay')}>
                        <p>Tổng tiền phí vận chuyển</p>
                        <p>{formatVND.format(vouchers.ship)}</p>
                    </div>
                    <div className={cx('item-pay')}>
                        <p>Giảm giá phí vận chuyển</p>
                        <p>{formatVND.format(vouchers.ship)}</p>
                    </div>
                    <div className={cx('item-total')}>
                        <p>Tổng thanh toán</p>
                        <p>{formatVND.format(totalPay)}</p>
                    </div>
                </div>
            </div>
            <div className={cx('buy-submit')}>
                <div className={cx('buys-container')}>
                    <div className={cx('info-total')}>
                        <p>Tổng thanh toán</p>
                        <h6>{formatVND.format(totalPay)}</h6>
                    </div>
                    <button onClick={handleOrders}>{!!statePay ? 'Đang thanh toán...' : 'Đặt hàng'}</button>
                </div>
            </div>
        </div>
    );
}

export default Orders;
