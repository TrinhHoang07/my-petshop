import classNames from 'classnames/bind';
import styles from './ProfileFriends.module.scss';
import { Button } from '../../components/Button';
import { useSessionContext } from '../../context/SessionContext';
import routesConfig from '../../config/routes';
import { ApiService } from '../../axios/ApiService';
import { useConfirmToast } from '../../context/ConfirmAndToastContext';
import { useEffect, useState } from 'react';
import { confirmDialog } from 'primereact/confirmdialog';
import { Link } from 'react-router-dom';
import { toSeoURL } from '../../Helper';
import { useSetRecoilState } from 'recoil';
import { dataProfileUser } from '../../store';

const cx = classNames.bind(styles);

type _T_Props = {
    id_friend: number;
    avatar_friend: string;
    name_friend: string;
    cm_friend?: string;
};

function FriendItem(props: _T_Props) {
    const [values] = useSessionContext();
    const message = useConfirmToast();
    const apiService = new ApiService();
    const [idsInvited, setIdsInvited] = useState<number[]>([]);
    const setDataProfileUser = useSetRecoilState(dataProfileUser);

    useEffect(() => {
        handleGetIdsInvited();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log(idsInvited);
    }, [idsInvited]);

    const handleGetIdsInvited = () => {
        apiService.friendship
            .getFriendInviteById((values.user?.id as number).toString(), values.user?.token ?? '')
            .then((res) => {
                setIdsInvited(res.data.map((item: any) => item.friendship_customer_id));
            })
            .catch((err) => console.error(err));
    };

    const handleAddNewInviteFriend = (id: number) => {
        apiService.friendship
            .addNewInviteFriend(
                {
                    status: 'waiting',
                    customer_invite: values.user?.id,
                    customer_id: id,
                },
                values.user?.token ?? '',
            )
            .then((res) => {
                if (res.message === 'success') {
                    handleGetIdsInvited();

                    message?.toast?.current?.show({
                        severity: 'success',
                        summary: 'Thành công',
                        detail: 'Gửi yêu cầu thành công!',
                        life: 2000,
                    });
                } else {
                    message?.toast?.current?.show({
                        severity: 'error',
                        summary: 'Thất bại',
                        detail: 'Có lỗi, vui lòng thử lại!',
                        life: 2500,
                    });
                }
            })
            .catch((err) => console.error(err));
    };

    const handleRemoveInvite = (id: number) => {
        confirmDialog({
            message: 'Bạn có chắc chắn muốn hủy yêu cầu không?',
            position: 'top',
            header: 'Hủy yêu cầu',
            acceptLabel: 'Đồng ý',
            rejectLabel: 'Hủy bỏ',
            icon: 'pi pi-exclamation-triangle',
            accept() {
                apiService.friendship
                    .deleteFriendshipById(id.toString(), values.user?.token ?? '')
                    .then((res) => {
                        console.log('res delete: ' + res.message);

                        if (res.message === 'success') {
                            handleGetIdsInvited();
                            message?.toast?.current?.show({
                                severity: 'success',
                                summary: 'Thành công',
                                detail: 'Hủy yêu cầu thành công!',
                                life: 2000,
                            });
                        } else {
                            message?.toast?.current?.show({
                                severity: 'error',
                                summary: 'Thất bại',
                                detail: 'Có lỗi, vui lòng thử lại!',
                                life: 2500,
                            });
                        }
                    })
                    .catch((err) => console.error(err));
            },
        });
    };

    const handleUpdateDataProfileUser = () => {
        setDataProfileUser({
            isFriend: values.user?.id === props.id_friend,
            userName: props.name_friend,
            avatarPath: props.avatar_friend,
        });
    };

    return (
        <div className={cx('friend-item')}>
            <Link onClick={handleUpdateDataProfileUser} to={`/profile/user/@${toSeoURL(props.name_friend)}`}>
                <div className={cx('f-avatar')}>
                    <img src={props.avatar_friend} alt={props.name_friend} />
                </div>
            </Link>
            <div className={cx('f-info')}>
                <Link onClick={handleUpdateDataProfileUser} to={`/profile/user/@${toSeoURL(props.name_friend)}`}>
                    <div>
                        <h5>{props.name_friend}</h5>
                        <p>{props.cm_friend} bạn chung</p>
                    </div>
                </Link>
                {values.user?.id === props.id_friend ? (
                    <Button small="true" to={routesConfig.profile}>
                        Trang cá nhân
                    </Button>
                ) : idsInvited.includes(props.id_friend) ? (
                    <Button onClick={() => handleRemoveInvite(props.id_friend)} small="true">
                        Hủy yêu cầu
                    </Button>
                ) : (
                    <Button onClick={() => handleAddNewInviteFriend(props.id_friend)} small="true">
                        Thêm bạn bè
                    </Button>
                )}
            </div>
        </div>
    );
}

export default FriendItem;
