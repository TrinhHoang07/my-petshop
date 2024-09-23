import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProfileBuys.module.scss';
import { ApiService } from '../../axios/ApiService';
import { Orders } from '../../models';
import { IoClose } from 'react-icons/io5';
import { useSessionContext } from '../../context/SessionContext';
import { formatVND, getNameFromStatus } from '../../Helper';
import { useConfirmToast } from '../../context/ConfirmAndToastContext';
import { confirmDialog } from 'primereact/confirmdialog';
import { Divider } from 'primereact/divider';

const cx = classNames.bind(styles);

type _T_Props = {
    productId: number;
    setProductId: (value: number) => void;
    setData: (data: any) => void;
};

function FormDetailProduct(props: _T_Props) {
    const [data, setData] = useState<Orders>();
    const apiService = new ApiService();
    const [values] = useSessionContext();
    const message = useConfirmToast();

    useEffect(() => {
        if (props.productId !== 0) {
            apiService.orders
                .getOrder(props.productId.toString(), values.user?.token ?? '')
                .then((res: { message: string; statusCode: number; data: Orders }) => {
                    if (res.message === 'success') {
                        setData(res.data);
                    }
                })
                .catch((err) => {
                    console.error('Error: ', err);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.productId]);

    const handleCancelOrder = () => {
        confirmDialog({
            message: 'Bạn có chắc chắn muốn hủy đơn hàng không?',
            position: 'top',
            header: 'Hủy đơn hàng',
            acceptLabel: 'Đồng ý',
            rejectLabel: 'Hủy bỏ',
            icon: 'pi pi-exclamation-triangle',
            accept() {
                if (data && data?.orders_id !== 0) {
                    apiService.orders
                        .updateStatus(data.orders_id.toString(), { status: 'cancel' }, values.user?.token ?? '')
                        .then((res) => {
                            if (res.message === 'success') {
                                props.setData((prev: any) => {
                                    const dataZ = [...prev];
                                    const item = dataZ.find((item) => item.orders_id === data.orders_id);
                                    const index = dataZ.findIndex((item) => item.orders_id === data.orders_id);

                                    if (item && index !== -1) {
                                        dataZ[index] = { ...item, orders_status: 'cancel' };
                                    }
                                    return dataZ;
                                });
                                message?.toast?.current?.show({
                                    severity: 'success',
                                    summary: 'Thành công',
                                    detail: 'Hủy đơn hàng thành công!',
                                    life: 3000,
                                });
                                // handle logic update status

                                props.setProductId(0);
                            }
                        })
                        .catch((err) => {
                            message?.toast?.current?.show({
                                severity: 'error',
                                summary: 'Thất bại',
                                detail: 'Hủy đơn hàng thất bại ' + err.message,
                                life: 3000,
                            });
                        });
                }
            },
        });
    };

    console.log('data detail: ', data);
    return (
        <>
            {data && (
                <>
                    <div
                        className={cx('mask')}
                        style={{
                            visibility: props.productId !== 0 && !!props.productId ? 'visible' : 'hidden',
                        }}
                    ></div>
                    <div
                        className={cx('form-products')}
                        style={{
                            transform:
                                props.productId !== 0 && !!props.productId
                                    ? 'translateX(-50%) scale(1)'
                                    : 'translateX(-50%) scale(0)',
                        }}
                    >
                        <div className={cx('header-form-detail')}>
                            <h3 className={cx('heading')}>Chi tiết sản phẩm</h3>
                            <span onClick={() => props.setProductId(0)} className={cx('close-icon')}>
                                <IoClose />
                            </span>
                        </div>
                        <Divider align="center">
                            <h5 style={{ fontSize: '20px', fontWeight: '500' }}>Thông tin khách hàng</h5>
                        </Divider>
                        <div style={{ marginBottom: '32px' }}>
                            <p>
                                <strong>Họ tên:</strong> {data?.address_full_name}
                            </p>
                            <p>
                                <strong>SĐT:</strong> {data?.address_phone_number}
                            </p>
                            <p>
                                <strong>Địa chỉ:</strong> {data?.address_main} {data.address_detail}
                            </p>
                        </div>
                        <Divider align="center">
                            <h5 style={{ fontSize: '20px', fontWeight: '500' }}>Thông tin sản phẩm</h5>
                        </Divider>
                        <div className={cx('detail-product')}>
                            <div className={cx('detail-image')}>
                                <img src={data?.product_preview_url} alt={data?.product_name} />
                            </div>
                            <div className={cx('detail-infos')}>
                                <h3 className={cx('detail-name')}>{data?.product_name}</h3>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: data.product_description,
                                    }}
                                ></div>
                                <p>
                                    <strong>Số lượng:</strong> {data?.orders_quantity}
                                </p>
                                <p>
                                    {' '}
                                    <strong>Đơn giá:</strong> {formatVND.format(data?.orders_price)}
                                </p>
                                <p>
                                    {' '}
                                    <strong>Thành tiền:</strong>{' '}
                                    {formatVND.format(data?.orders_quantity * data.orders_price)}
                                </p>
                                <button>{getNameFromStatus(data.orders_status)}</button>
                            </div>
                        </div>
                        <div className={cx('footer-detail')}>
                            <button onClick={handleCancelOrder} className={cx('cancel-btn')}>
                                Hủy đơn hàng
                            </button>
                            <button onClick={() => props.setProductId(0)}>Đóng</button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default FormDetailProduct;
