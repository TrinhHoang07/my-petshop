import classNames from 'classnames/bind';
import styles from './ProfileBuys.module.scss';
import { LayoutProfile } from '../../components/Layout/LayoutProfile';
import { TabView, TabPanel } from 'primereact/tabview';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import { useSetRecoilState } from 'recoil';
import { isMenuMobile } from '../../store';
import { useEffect, useState } from 'react';
import { useSessionContext } from '../../context/SessionContext';
import { ApiService } from '../../axios/ApiService';
import { Button } from '../../components/Button';
import { Orders, T_Orders } from '../../models';
import { Loading } from '../../components/Loading';
import { getNameFromStatus } from '../../Helper';
import FormDetailProduct from './FormDetailProduct';

const cx = classNames.bind(styles);

function ProfileBuys() {
    const [data, setData] = useState<Orders[]>([]);
    const [idDetail, setIdDetail] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const setState = useSetRecoilState(isMenuMobile);
    const [values] = useSessionContext();
    const apiService = new ApiService();

    useEffect(() => {
        apiService.orders
            .getOrderById(`${values.user?.id}`, values.user?.token as string)
            .then((res: T_Orders) => {
                if (res.message === 'success') {
                    console.log('data Z: ', res.data);
                    setData(res.data);
                    setIsLoading(false);
                }
            })
            .catch((err) => console.error(err));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <LayoutProfile>
            <div className={cx('profile-buys')}>
                <FormDetailProduct productId={idDetail} setProductId={setIdDetail} setData={setData} />
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
                        <div className={cx('all-orders')}>
                            {!isLoading ? (
                                data && data.length > 0 ? (
                                    data.map((item: Orders) => (
                                        <div key={item.orders_id} className={cx('order-item')}>
                                            <div className={cx('wrapper-info')}>
                                                <div className={cx('order-preview')}>
                                                    <img src={item.product_preview_url} alt="order-item" />
                                                </div>
                                                <div className={cx('info-order')}>
                                                    <h3>{item.product_name}</h3>
                                                    <p>{item.product_color}</p>
                                                    <p>x{item.orders_quantity}</p>
                                                </div>
                                            </div>
                                            <p className={cx('price-item-order')}>
                                                Thành tiền: {item.orders_price * item.orders_quantity}đ
                                            </p>
                                            <p
                                                onClick={() => setIdDetail(item.orders_id)}
                                                className={cx('price-item-order', 'detail-item')}
                                            >
                                                Xem chi tiết
                                            </p>
                                            <p className={cx('price-item-order')}>
                                                Trạng thái: {getNameFromStatus(item.orders_status)}
                                            </p>
                                            <div className={cx('status-order-item')}>
                                                {item.orders_status === 'shipping' ? (
                                                    <Button small={'true'}>Đã nhận được hàng</Button>
                                                ) : (
                                                    <Button
                                                        disabled={
                                                            item.orders_status === 'processing' ||
                                                            item.orders_status === 'cancel'
                                                        }
                                                        small={'true'}
                                                    >
                                                        {item.orders_status === 'processing'
                                                            ? 'Đã nhận được hàng'
                                                            : 'Đã hủy'}
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className={cx('no-orders-mes')}>Bạn chưa có đơn hàng nào!</p>
                                )
                            ) : (
                                <Loading />
                            )}
                        </div>
                    </TabPanel>
                    <TabPanel header="Đang Giao">
                        <div className={cx('all-orders')}>
                            {!isLoading ? (
                                data && data.filter((item) => item.orders_status === 'shipping').length > 0 ? (
                                    data
                                        .filter((item) => item.orders_status === 'shipping')
                                        .map((item: Orders) => (
                                            <div key={item.orders_id} className={cx('order-item')}>
                                                <div className={cx('wrapper-info')}>
                                                    <div className={cx('order-preview')}>
                                                        <img src={item.product_preview_url} alt="order-item" />
                                                    </div>
                                                    <div className={cx('info-order')}>
                                                        <h3>{item.product_name}</h3>
                                                        <p>{item.product_color}</p>
                                                        <p>x{item.orders_quantity}</p>
                                                    </div>
                                                </div>
                                                <p className={cx('price-item-order')}>
                                                    Thành tiền: {item.orders_price * item.orders_quantity}đ
                                                </p>
                                                <p
                                                    onClick={() => setIdDetail(item.orders_id)}
                                                    className={cx('price-item-order', 'detail-item')}
                                                >
                                                    Xem chi tiết
                                                </p>
                                                <p className={cx('price-item-order')}>
                                                    Trạng thái: {getNameFromStatus(item.orders_status)}
                                                </p>
                                                <div className={cx('status-order-item')}>
                                                    {item.orders_status === 'shipping' ? (
                                                        <Button small={'true'}>Đã nhận được hàng</Button>
                                                    ) : (
                                                        <Button
                                                            disabled={
                                                                item.orders_status === 'processing' ||
                                                                item.orders_status === 'cancel'
                                                            }
                                                            small={'true'}
                                                        >
                                                            {item.orders_status === 'processing'
                                                                ? 'Đã nhận được hàng'
                                                                : 'Đã hủy'}
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        ))
                                ) : (
                                    <p className={cx('no-orders-mes')}>Bạn chưa có đơn hàng nào!</p>
                                )
                            ) : (
                                <Loading />
                            )}
                        </div>
                    </TabPanel>
                    <TabPanel header="Hoàn Thành">
                        <div className={cx('all-orders')}>
                            {!isLoading ? (
                                data && data.filter((item) => item.orders_status === 'finished').length > 0 ? (
                                    data
                                        .filter((item) => item.orders_status === 'finished')
                                        .map((item: Orders) => (
                                            <div key={item.orders_id} className={cx('order-item')}>
                                                <div className={cx('wrapper-info')}>
                                                    <div className={cx('order-preview')}>
                                                        <img src={item.product_preview_url} alt="order-item" />
                                                    </div>
                                                    <div className={cx('info-order')}>
                                                        <h3>{item.product_name}</h3>
                                                        <p>{item.product_color}</p>
                                                        <p>x{item.orders_quantity}</p>
                                                    </div>
                                                </div>
                                                <p className={cx('price-item-order')}>
                                                    Thành tiền: {item.orders_price * item.orders_quantity}đ
                                                </p>
                                                <p
                                                    onClick={() => setIdDetail(item.orders_id)}
                                                    className={cx('price-item-order', 'detail-item')}
                                                >
                                                    Xem chi tiết
                                                </p>
                                                <p className={cx('price-item-order')}>
                                                    Trạng thái: {getNameFromStatus(item.orders_status)}
                                                </p>
                                                <div className={cx('status-order-item')}>
                                                    {item.orders_status === 'shipping' ? (
                                                        <Button small={'true'}>Đã nhận được hàng</Button>
                                                    ) : (
                                                        <Button
                                                            disabled={
                                                                item.orders_status === 'processing' ||
                                                                item.orders_status === 'cancel'
                                                            }
                                                            small={'true'}
                                                        >
                                                            {item.orders_status === 'processing'
                                                                ? 'Đã nhận được hàng'
                                                                : 'Đã hủy'}
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        ))
                                ) : (
                                    <p className={cx('no-orders-mes')}>Bạn chưa có đơn hàng nào!</p>
                                )
                            ) : (
                                <Loading />
                            )}
                        </div>
                    </TabPanel>
                    <TabPanel header="Đã Hủy">
                        <div className={cx('all-orders')}>
                            {!isLoading ? (
                                data && data.filter((item) => item.orders_status === 'cancel').length > 0 ? (
                                    data
                                        .filter((item) => item.orders_status === 'cancel')
                                        .map((item: Orders) => (
                                            <div key={item.orders_id} className={cx('order-item')}>
                                                <div className={cx('wrapper-info')}>
                                                    <div className={cx('order-preview')}>
                                                        <img src={item.product_preview_url} alt="order-item" />
                                                    </div>
                                                    <div className={cx('info-order')}>
                                                        <h3>{item.product_name}</h3>
                                                        <p>{item.product_color}</p>
                                                        <p>x{item.orders_quantity}</p>
                                                    </div>
                                                </div>
                                                <p className={cx('price-item-order')}>
                                                    Thành tiền: {item.orders_price * item.orders_quantity}đ
                                                </p>
                                                <p
                                                    onClick={() => setIdDetail(item.orders_id)}
                                                    className={cx('price-item-order', 'detail-item')}
                                                >
                                                    Xem chi tiết
                                                </p>
                                                <p className={cx('price-item-order')}>
                                                    Trạng thái: {getNameFromStatus(item.orders_status)}
                                                </p>
                                                <div className={cx('status-order-item')}>
                                                    {item.orders_status === 'shipping' ? (
                                                        <Button small={'true'}>Đã nhận được hàng</Button>
                                                    ) : (
                                                        <Button
                                                            disabled={
                                                                item.orders_status === 'processing' ||
                                                                item.orders_status === 'cancel'
                                                            }
                                                            small={'true'}
                                                        >
                                                            {item.orders_status === 'processing'
                                                                ? 'Đã nhận được hàng'
                                                                : 'Đã hủy'}
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        ))
                                ) : (
                                    <p className={cx('no-orders-mes')}>Bạn chưa có đơn hàng nào!</p>
                                )
                            ) : (
                                <Loading />
                            )}
                        </div>
                    </TabPanel>
                </TabView>
            </div>
        </LayoutProfile>
    );
}

export default ProfileBuys;
