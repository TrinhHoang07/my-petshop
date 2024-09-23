import styles from './Flash.module.scss';
import classNames from 'classnames/bind';
import FlashItem from './FlashItem';
import { RxRocket } from 'react-icons/rx';
import { TbPigMoney } from 'react-icons/tb';
import { MdPayment } from 'react-icons/md';
import { ImGift } from 'react-icons/im';

const cx = classNames.bind(styles);

function Flash() {
    return (
        <div className={cx('flash')}>
            <FlashItem icon={<RxRocket />} title="MIỄN VẬN CHUYỂN" description="Cho tất cả đơn hàng" line={true} />
            <FlashItem icon={<TbPigMoney />} title="GIẢM GIÁ TỚI 20%" description="Cho đơn hàng đầu tiên" line={true} />
            <FlashItem icon={<MdPayment />} title="THANH TOÁN LINH HOẠT" description="Xác thực giao dịch" line={true} />
            <FlashItem icon={<ImGift />} title="NHIỀU QUÀ TẶNG" description="Vào mỗi tháng" />
        </div>
    );
}

export default Flash;
