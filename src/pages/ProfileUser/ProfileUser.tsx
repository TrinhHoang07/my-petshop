import classNames from 'classnames/bind';
import styles from './ProfileUser.module.scss';
import { useRecoilValue } from 'recoil';
import { dataProfileUser } from '../../store';
import { TProfileUser } from '../../models';
import { Button } from '../../components/Button';
import { useEffect, useState } from 'react';
import { ApiService } from '../../axios/ApiService';
import { useSessionContext } from '../../context/SessionContext';

const cx = classNames.bind(styles);

function ProfileUser() {
    const data = useRecoilValue<TProfileUser>(dataProfileUser);
    const [idsInvited, setIdsInvited] = useState<number[]>([]);
    const [idsGiveInvite, setIdsGiveInvite] = useState<number[]>([]);
    const apiService = new ApiService();
    const [values] = useSessionContext();

    useEffect(() => {
        handleGetIdsInvited();
        handleGetIdsGiveInvited();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleGetIdsInvited = () => {
        apiService.friendship
            .getFriendInviteById((values.user?.id as number).toString(), values.user?.token ?? '')
            .then((res) => {
                setIdsInvited(res.data.map((item: any) => item.friendship_customer_id));
            })
            .catch((err) => console.error(err));
    };

    const handleGetIdsGiveInvited = () => {
        apiService.friendship
            .getFriendGiveInviteById((values.user?.id as number).toString(), values.user?.token ?? '')
            .then((res: any) => {
                if (res.message === 'success') {
                    setIdsGiveInvite(res.data.map((item: any) => item.friendship_customerInvite_id));
                }
            });
    };

    return (
        <div className={cx('profile-user')}>
            <div className={cx('profile-user-wrapper')}>
                <div className={cx('wall-image')}></div>
                <div className={cx('infos')}>
                    <div className={cx('wrapper-image')}>
                        <div className={cx('avatar-user')}>
                            <img src={data.avatarPath} alt={data.userName} />
                        </div>
                    </div>
                    <h3>{data.userName}</h3>
                    <div className={cx('actions')}>
                        {data.isFriend ? (
                            <>
                                <Button>Bạn bè</Button>
                                <Button>Nhắn tin</Button>
                            </>
                        ) : idsInvited.includes(data.id) ? (
                            <Button>Hủy yêu cầu</Button>
                        ) : idsGiveInvite.includes(data.id) ? (
                            <Button>Xác nhận</Button>
                        ) : (
                            <Button>Thêm bạn bè</Button>
                        )}
                    </div>
                    <p className={cx('description')}>
                        description user hehehe hehehe hehehe hehehe hehehe hehehe hehehe
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProfileUser;
