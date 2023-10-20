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

const cx = classNames.bind(styles);

type _Addresses = {
    full_name: string;
    id: number;
    main_address: string;
    detail_address: string;
    phone_number: string;
    type: string;
};

function ProfileAddress() {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [init, setInit] = useState<boolean>(false);
    const setState = useSetRecoilState(isMenuMobile);
    const [addresses, setAddresses] = useState<_Addresses[]>([]);
    const [values] = useSessionContext();
    const apiService = new ApiService();
    const socketRef = useRef<Socket>();

    useEffect(() => {
        const socket = io('http://localhost:3008', {
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

    return (
        <LayoutProfile>
            <div className={cx('profile-address')}>
                <div className={cx('my-address')}>
                    <FormAddAddress visible={isVisible} setIsVisible={setIsVisible} />
                    <div className={cx('header')}>
                        <p className={cx('heading')}>
                            <span onClick={() => setState(true)} className={cx('back-btn-profile')}>
                                <HiMenu />
                            </span>
                            <span>Địa Chỉ Của Tôi</span>
                        </p>
                        <p onClick={() => setIsVisible(true)} className={cx('btn-credit')}>
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
                                            <p>Cập nhật</p>
                                            <p>Xóa</p>
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
