import classNames from 'classnames/bind';
import styles from './FriendRequest.module.scss';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { toSeoURL } from '../../../Helper';
import { Button } from '../../../components/Button';
import { useEffect, useState } from 'react';
import { ApiService } from '../../../axios/ApiService';
import { useSessionContext } from '../../../context/SessionContext';
import { useSetRecoilState } from 'recoil';
import { dataProfileUser } from '../../../store';
import { useSocketContext } from '../../../context/SocketContext';

const cx = classNames.bind(styles);

type _T_Props = {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
};

// NEED UPDATE TYPESCRYPT

function FriendRequest(props: _T_Props) {
    const [data, setData] = useState<any[]>([]);
    const apiService = new ApiService();
    const setDataProfileUser = useSetRecoilState(dataProfileUser);
    const socket = useSocketContext();
    const [values] = useSessionContext();

    useEffect(() => {
        apiService.friendship
            .getFriendGiveInviteById((values.user?.id as number).toString(), values.user?.token ?? '')
            .then((res: any) => {
                setData(res.data);
            })
            .catch((err) => console.error(err));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCloseRequest = () => {
        props.setIsOpen(false);
    };

    const handleUpdateDataProfileUser = (item: any) => {
        setDataProfileUser({
            id: item.friendship_customerInvite_id,
            isFriend: false,
            userName: item.customer_name,
            avatarPath: item.customer_avatar_path,
        });
    };

    const handleAcceptFriendship = (item: any) => {
        apiService.friendship
            .acceptFriendship(
                {
                    customer_invite: item.friendship_customerInvite_id,
                    customer_id: item.friendship_customer_id,
                    status: 'friended',
                },
                values.user?.token ?? '',
            )
            .then((res: any) => {
                if (res.message === 'success') {
                    setData((prev: any[]) => prev.filter((p) => p.friendship_id !== item.friendship_id));

                    socket.current?.emit('accept-friend', {
                        id: item.friendship_customerInvite_id,
                        status: 'success',
                    });
                }
            })
            .catch((err) => console.error(err));
    };

    return (
        <>
            <div
                style={{
                    visibility: props.isOpen ? 'visible' : 'hidden',
                }}
                onClick={handleCloseRequest}
                className={cx('friend-request-wrapper')}
            ></div>
            <div
                style={{
                    transform: props.isOpen ? 'scale(1)' : 'scale(0)',
                }}
                className={cx('friend-request')}
            >
                <div className={cx('header-request')}>
                    <div className={cx('header-empty')}></div>
                    <h3>Tất cả lời mời</h3>
                    <span onClick={handleCloseRequest} className={cx('icon-close')}>
                        <IoClose size={'2.5rem'} />
                    </span>
                </div>
                <div className={cx('request-contents')}>
                    {data.length > 0 ? (
                        data.map((item: any) => (
                            <div key={item.friendship_id} className={cx('friend-item')}>
                                <Link
                                    onClick={() => handleUpdateDataProfileUser(item)}
                                    to={`/profile/user/@${toSeoURL(item.customer_name)}`}
                                >
                                    <div className={cx('f-avatar')}>
                                        <img src={item.customer_avatar_path} alt={item.customer_name} />
                                    </div>
                                </Link>
                                <div onClick={() => handleUpdateDataProfileUser(item)} className={cx('f-info')}>
                                    <Link to={`/profile/user/@${toSeoURL(item.customer_name)}`}>
                                        <div>
                                            <h5>{item.customer_name}</h5>
                                            <p>5 bạn chung</p>
                                        </div>
                                    </Link>
                                    <Button onClick={() => handleAcceptFriendship(item)} small="true">
                                        Xác nhận
                                    </Button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p style={{ textAlign: 'center' }}>Bạn chưa có lời mời kết bạn nào!</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default FriendRequest;
