import classNames from 'classnames/bind';
import styles from './ProfileNoti.module.scss';
import { BsDot } from 'react-icons/bs';
import { formatTimeDate } from '../../Helper';
// import img from '../../assets/images/banner_cat_2.jpg';

const cx = classNames.bind(styles);

type _T_Props = {
    content: string;
    avatar_path: string;
    created_at: string;
    seen: boolean;
};

function NotiItem(props: _T_Props) {
    return (
        <div className={cx('noti-item')}>
            <div className={cx('avatar')}>
                <img src={props.avatar_path} alt="avatar-user" />
            </div>
            <div className={cx('info-noti')}>
                <div className={cx('check-noti')}>
                    <p className={cx('detail-text')}>{props.content}</p>
                    <p className={cx('time-post')}>{formatTimeDate(props.created_at)}</p>
                </div>
                {!props.seen && (
                    <div className={cx('seened')}>
                        <BsDot size={'5rem'} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default NotiItem;
