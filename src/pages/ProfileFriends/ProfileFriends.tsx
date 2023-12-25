import { useState, ChangeEvent, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ProfileFriends.module.scss';
import { LayoutProfile } from '../../components/Layout/LayoutProfile';
import { AiOutlineSearch } from 'react-icons/ai';
import FriendItem from './FriendItem';
import { ApiService } from '../../axios/ApiService';
import { useDebounce } from '../../hooks';
import { useSessionContext } from '../../context/SessionContext';
import { App } from '../../const/App';
import { FaUserPlus } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { FriendRequest } from './FriendRequest';

const cx = classNames.bind(styles);

function ProfileFriends() {
    const apiService = new ApiService();
    const [values] = useSessionContext();
    const [value, setValue] = useState<string>('');
    const [isModal, setIsModal] = useState<boolean>(false);
    const debounced = useDebounce(value, App.DELAY_SEARCH);

    // test
    const [testData, setTestData] = useState<any[]>([]);
    const [friends, setFriends] = useState<any[]>([]);
    const [isOpenFriendRequest, setIsOpenFriendRequest] = useState<boolean>(false);

    useEffect(() => {
        if (debounced.trim().length > 0) {
            console.log('debounced: ' + debounced.length);

            setIsModal(true);

            apiService.customer
                .searchCustomers(
                    {
                        search: debounced.trim(),
                    },
                    values.user?.token ?? '',
                )
                .then((res) => {
                    console.log('res: ' + res);
                    setTestData(res.data);
                })
                .catch((err) => console.error(err));
        } else {
            setIsModal(false);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounced]);

    useEffect(() => {
        apiService.friendship
            .getFriendedById((values.user?.id as number).toString(), values.user?.token ?? '')
            .then((res: any) => {
                console.log('res friended: ' + res);
                setFriends(res.data);
            })
            .catch((err) => console.error(err));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOpenFriendRequest = () => {
        setIsOpenFriendRequest(true);
    };

    return (
        <LayoutProfile>
            <div className={cx('profile-friend')}>
                <div className={cx('friends-header')}>
                    <FriendRequest isOpen={isOpenFriendRequest} setIsOpen={setIsOpenFriendRequest} />
                    <div className={cx('f-empty')}></div>
                    <h1>Tất cả bạn bè</h1>
                    <div onClick={handleOpenFriendRequest} className={cx('icon-request')}>
                        <span>
                            <FaUserPlus size={'2rem'} />
                        </span>
                        <p>Lời mời kết bạn</p>
                    </div>
                </div>
                <div className={cx('search-friends')}>
                    <input
                        type="text"
                        placeholder="Tìm kiếm bạn bè..."
                        value={value}
                        onFocus={() => {
                            if (debounced.trim().length > 0) {
                                setIsModal(true);
                            }
                        }}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                    />
                    <span className={cx('icon-search')}>
                        <AiOutlineSearch size={'2rem'} />
                    </span>
                    {isModal && (
                        <div className={cx('search-modal')}>
                            <div className={cx('header-modal')}>
                                <h3>
                                    Kết quả tìm kiếm cho <strong>{value}</strong>
                                </h3>
                                <span onClick={() => setIsModal(false)}>
                                    <IoMdClose size={'2rem'} />
                                </span>
                            </div>
                            <div className={cx('modal-items')}>
                                {testData.length > 0 ? (
                                    testData.map((item) => (
                                        <FriendItem
                                            key={item.id}
                                            avatar_friend={item.avatar_path}
                                            name_friend={item.name}
                                            id_friend={item.id}
                                            cm_friend="5"
                                            status=""
                                        />
                                    ))
                                ) : (
                                    <p className={cx('no-search')}>Không có kết quả tìm kiếm !</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div className={cx('list-friends')}>
                    {friends.length > 0 ? (
                        friends
                            .filter((item) => item.customer_id !== values.user?.id)
                            .map((item) => (
                                <FriendItem
                                    key={item.customer_id}
                                    avatar_friend={item.customer_avatar_path}
                                    name_friend={item.customer_name}
                                    cm_friend="5"
                                    id_friend={item.customer_id}
                                    status={item.friendship_status ?? 'waiting'}
                                />
                            ))
                    ) : (
                        <div className={cx('no-friends')}>
                            <p>Bạn chưa có bạn bè, hãy thử tìm kiếm bạn bè của bạn và kết bạn với họ!</p>
                        </div>
                    )}
                </div>
            </div>
        </LayoutProfile>
    );
}

export default ProfileFriends;
