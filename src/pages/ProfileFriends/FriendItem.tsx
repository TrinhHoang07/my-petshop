import classNames from 'classnames/bind';
import styles from './ProfileFriends.module.scss';
// import { FiMoreVertical } from 'react-icons/fi';
import { Button } from '../../components/Button';
// import { MdPersonAddAlt1 } from 'react-icons/md';

const cx = classNames.bind(styles);

type _T_Props = {
    id_friend: number;
    avatar_friend: string;
    name_friend: string;
    cm_friend?: string;
};

function FriendItem(props: _T_Props) {
    return (
        <div className={cx('friend-item')}>
            <div className={cx('f-avatar')}>
                <img src={props.avatar_friend} alt={props.name_friend} />
            </div>
            <div className={cx('f-info')}>
                <div>
                    <h5>{props.name_friend}</h5>
                    <p>{props.cm_friend} bạn chung</p>
                </div>
                {/* <FiMoreVertical size={'2rem'} /> */}
                <Button small="true">Thêm bạn bè</Button>
            </div>
        </div>
    );
}

export default FriendItem;
