import classNames from 'classnames/bind';
import styles from './ProfileUser.module.scss';
import { useRecoilValue } from 'recoil';
import { dataProfileUser } from '../../store';
import { TProfileUser } from '../../models';
import { Button } from '../../components/Button';

const cx = classNames.bind(styles);

function ProfileUser() {
    const data = useRecoilValue<TProfileUser>(dataProfileUser);

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
                        <Button>Thêm bạn bè</Button>
                        {data.isFriend && <Button>Nhắn tin</Button>}
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
