import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './ProfileAddress.module.scss';
import { LayoutProfile } from '../../components/Layout/LayoutProfile';
import { IoAdd } from 'react-icons/io5';
import { AddressIcon } from '../../assets/svg';
import FormAddAddress from './FormAddAddress';
import { HiMenu } from 'react-icons/hi';
import { useSetRecoilState } from 'recoil';
import { isMenuMobile } from '../../store';
import { ApiService } from '../../axios/ApiService';
import { useSessionContext } from '../../context/SessionContext';
import { Socket, io } from 'socket.io-client';
import { confirmDialog } from 'primereact/confirmdialog';
import { useConfirmToast } from '../../context/ConfirmAndToastContext';
import { App } from '../../const/App';

const cx = classNames.bind(styles);

export type _Addresses = {
    full_name: string;
    id: number;
    main_address: string;
    detail_address: string;
    phone_number: string;
    type: string;
};

function ProfileAddress() {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [typeAction, setTypeAction] = useState<string>('');
    const [dataAddress, setDataAddress] = useState<_Addresses>();
    const [init, setInit] = useState<boolean>(false);
    const setState = useSetRecoilState(isMenuMobile);
    const [addresses, setAddresses] = useState<_Addresses[]>([]);
    const [values] = useSessionContext();
    const toast = useConfirmToast();
    const apiService = new ApiService();
    const socketRef = useRef<Socket>();

    useEffect(() => {
        const socket = io(App.URL_EVENT, {
            timeout: 5000,
            autoConnect: true,
        });

        socketRef.current = socket;

        return () => {
            socketRef.current?.disconnect();
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log('type action: ', typeAction);
    }, [typeAction]);

    useEffect(() => {
        if (socketRef.current) {
            socketRef.current.on('connect', () => {
                socketRef.current?.on('create-address-give', (data: any) => {
                    console.log('data GIVE: ', data);

                    if (values.isAuth) {
                        apiService.address
                            .getAddressesById(values.user?.id.toString() ?? '', values.user?.token ?? '')
                            .then((res) => {
                                if (res.message === 'success') {
                                    ///// ERRORRRRRR
                                    setAddresses((prev: _Addresses[]) => {
                                        return [...prev, res.data[res.data.length - 1]];
                                    });
                                }
                            })
                            .catch((err) => console.error(err));
                    }
                });

                socketRef.current?.on('update-address-give', (data: any) => {
                    console.log('data GIVE: ', data);

                    if (values.isAuth) {
                        apiService.address
                            .getAddressesById(values.user?.id.toString() ?? '', values.user?.token ?? '')
                            .then((res) => {
                                if (res.message === 'success') {
                                    ///// ERRORRRRRR
                                    setAddresses(res.data);
                                }
                            })
                            .catch((err) => console.error(err));
                    }
                });
            });

            socketRef.current.on('disconnect', () => {
                console.log('id disconnected: ', socketRef.current?.id);
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (init && values.isAuth) {
            console.log('caklll OKOKOK');

            apiService.address
                .getAddressesById(values.user?.id.toString() ?? '', values.user?.token ?? '')
                .then((res) => {
                    if (res.message === 'success') {
                        console.log(res.data);

                        setAddresses((prev: _Addresses[]) => {
                            console.log('prev: ' + [...prev, ...res.data]);

                            return [...prev, ...res.data];
                        });
                    }
                })
                .catch((err) => console.error(err));
        }

        setInit(true);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [init]);

    const confirm = (value: string) => {
        confirmDialog({
            message: 'Bạn có chắc chắn muốn xóa không?',
            header: 'Xóa sản phẩm',
            acceptLabel: 'Đồng ý',
            rejectLabel: 'Hủy bỏ',
            icon: 'pi pi-exclamation-triangle',
            accept() {
                apiService.address.deleteAddressById(value, values.user?.token ?? '').then((res) => {
                    if (res.message === 'success') {
                        toast.current?.show({
                            severity: 'success',
                            summary: 'Thành công',
                            detail: 'Đã xóa thành công',
                            life: 3000,
                        });

                        apiService.address
                            .getAddressesById(values.user?.id.toString() ?? '', values.user?.token ?? '')
                            .then((res) => {
                                if (res.message === 'success') {
                                    setAddresses(res.data);
                                }
                            })
                            .catch((err) => console.error(err));
                    } else {
                        toast.current?.show({
                            severity: 'error',
                            summary: 'Có lỗi',
                            detail: 'Xảy ra lỗi!!!',
                            life: 3000,
                        });
                    }
                });

                // setData((prev) => prev.filter((item) => item.id !== value.id));
            },
        });
    };

    return (
        <LayoutProfile>
            <div className={cx('profile-address')}>
                <div className={cx('my-address')}>
                    <FormAddAddress
                        visible={isVisible}
                        setIsVisible={setIsVisible}
                        data={dataAddress}
                        setData={setDataAddress}
                        type={typeAction}
                        setType={setTypeAction}
                    />
                    <div className={cx('header')}>
                        <p className={cx('heading')}>
                            <span onClick={() => setState(true)} className={cx('back-btn-profile')}>
                                <HiMenu />
                            </span>
                            <span>Địa Chỉ Của Tôi</span>
                        </p>
                        <p
                            onClick={() => {
                                setTypeAction('add');
                                setIsVisible(true);
                            }}
                            className={cx('btn-credit')}
                        >
                            <IoAdd />
                            Thêm Địa Chỉ Mới
                        </p>
                    </div>
                    <div className={cx('contents')}>
                        {addresses.length > 0 ? (
                            <div className={cx('address-item')}>
                                <h5>Địa chỉ</h5>
                                {addresses.map((item) => (
                                    <div className={cx('wrapper-item')} key={item.id}>
                                        <div className={cx('infos')}>
                                            <h3>
                                                {item.full_name} | <span>(+84) {item.phone_number.slice(1)}</span>
                                            </h3>
                                            <p>{item.detail_address}</p>
                                            <p>{item.main_address}</p>
                                            <button>Mặc định</button>
                                        </div>
                                        <div className={cx('actions')}>
                                            <p
                                                onClick={() => {
                                                    setTypeAction('update');
                                                    setDataAddress(item);
                                                    setIsVisible(true);
                                                }}
                                            >
                                                Cập nhật
                                            </p>
                                            <p onClick={() => confirm(item.id.toString())}>Xóa</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className={cx('wrapper-icon-empty')}>
                                <div className={cx('address-icon')}>
                                    <AddressIcon />
                                    <p>Bạn chưa có địa chỉ!</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </LayoutProfile>
    );
}

export default ProfileAddress;
