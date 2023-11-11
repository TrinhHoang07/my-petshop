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

const cx = classNames.bind(styles);

function ProfileFriends() {
    const apiService = new ApiService();
    const [values] = useSessionContext();
    const [value, setValue] = useState<string>('');
    const [isModal, setIsModal] = useState<boolean>(false);
    const debounced = useDebounce(value, App.DELAY_SEARCH);

    useEffect(() => {
        if (debounced.trim().length > 0) {
            setIsModal(true);

            apiService.customer
                .searchCustomers(
                    {
                        search: debounced,
                    },
                    values.user?.token ?? '',
                )
                .then((res) => {
                    console.log('res: ' + res.data);
                })
                .catch((err) => console.error(err));
        } else {
            setIsModal(false);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounced]);

    return (
        <LayoutProfile>
            <div className={cx('profile-friend')}>
                <h1>Tất cả bạn bè</h1>
                <div className={cx('search-friends')}>
                    <input
                        type="text"
                        placeholder="Tìm kiếm bạn bè..."
                        value={value}
                        onBlur={() => setIsModal(false)}
                        onFocus={() => {
                            if (debounced.trim().length > 0) {
                                setIsModal(true);
                            }
                        }}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                    />
                    <span>
                        <AiOutlineSearch size={'2rem'} />
                    </span>
                    {isModal && (
                        <div className={cx('search-modal')}>
                            <h3>
                                Kết quả tìm kiếm cho <strong>{value}</strong>
                            </h3>
                            <div className={cx('modal-items')}>
                                <FriendItem avatar_friend="" name_friend="Hoàng Trịnh" id_friend={2} cm_friend="5" />
                                <FriendItem avatar_friend="" name_friend="Hoàng Trịnh" id_friend={2} cm_friend="5" />
                                <FriendItem avatar_friend="" name_friend="Hoàng Trịnh" id_friend={2} cm_friend="5" />
                                <FriendItem avatar_friend="" name_friend="Hoàng Trịnh" id_friend={2} cm_friend="5" />
                                <FriendItem avatar_friend="" name_friend="Hoàng Trịnh" id_friend={2} cm_friend="5" />
                            </div>
                        </div>
                    )}
                </div>
                <div className={cx('list-friends')}>
                    {/* <FriendItem avatar_friend="" name_friend="Hoàng Trịnh" id_friend={1} cm_friend="2" />
                    <FriendItem avatar_friend="" name_friend="Hoàng Trịnh" id_friend={2} cm_friend="5" />
                    <FriendItem avatar_friend="" name_friend="Hoàng Trịnh" id_friend={3} cm_friend="6" />
                    <FriendItem avatar_friend="" name_friend="Hoàng Trịnh" id_friend={4} cm_friend="1" />
                    <FriendItem avatar_friend="" name_friend="Hoàng Trịnh" id_friend={5} cm_friend="28" /> */}

                    <div className={cx('no-friends')}>
                        <p>Bạn chưa có bạn bè, hãy thử tìm kiếm bạn bè của bạn và kết bạn với họ!</p>
                    </div>
                </div>
            </div>
        </LayoutProfile>
    );
}

export default ProfileFriends;
