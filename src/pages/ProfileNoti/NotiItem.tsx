import classNames from 'classnames/bind';
import styles from './ProfileNoti.module.scss';
import { BsDot } from 'react-icons/bs';
import img from '../../assets/images/banner_cat_2.jpg';

const cx = classNames.bind(styles);

type _T_Props = {
    avatar?: string;
    name?: string;
    detail?: string;
    time?: string;
};

function NotiItem(props: _T_Props) {
    return (
        <div className={cx('noti-item')}>
            <div className={cx('avatar')}>
                <img src={img} alt="avatar-user" />
            </div>
            <div className={cx('info-noti')}>
                <div className={cx('check-noti')}>
                    <p className={cx('detail-text')}>
                        <strong>Name user</strong> Trong tháng 6/2023 này thì Lưu Diệc Phi có công việc quay chụp quảng
                        cáo. Chủ tịch hội đồng giám khảo giải thưởng Bạch Ngọc Lan khen ngợi 6 tác phẩm xứng đáng cấp
                        hiện tượng, trong đó có phim Mộng Hoa Lục Trong tháng 6/2023 này thì Lưu Diệc Phi có công việc
                        quay chụp quảng cáo. Chủ tịch hội đồng giám khảo giải thưởng Bạch Ngọc Lan khen ngợi 6 tác phẩm
                        xứng đáng cấp hiện tượng, trong đó có phim Mộng Hoa Lục
                    </p>
                    <p className={cx('time-post')}>1 ngày trước</p>
                </div>
                <div className={cx('seened')}>
                    <BsDot size={'5rem'} />
                </div>
            </div>
        </div>
    );
}

export default NotiItem;
