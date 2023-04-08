import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { Title } from '../../components/Title';
import logo from '../../assets/images/sleigh-bell.svg';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('contact')}>
            <div className={cx('banner')}>
                <div className={cx('contents')}>
                    <div className={cx('contact-info')}>
                        <Title logo={logo} title="LIÊN HỆ VỚI CHÚNG TÔI" />
                        <div className={cx('description')}>
                            <p className={cx('description-p')}>
                                Mona Media là công ty thiết kế website cao cấp có tuổi đời 8+ năm trong ngành.
                            </p>
                            <p className={cx('description-p')}>
                                Ngay từ những ngày đầu hoạt động, Mona Media đã chọn cho mình một phân khúc riêng, khác
                                biệt với hàng ngàn công ty thiết kế website trên thị trường: phân khúc của sự hiệu quả.
                            </p>
                            <p className={cx('description-p')}>
                                Những website/phần mềm từ Mona Media luôn được tư vấn, phát triển, tối ưu nhằm mang lại
                                hiệu quả rõ rệt cho hoạt động kinh doanh của doanh nghiệp.
                            </p>
                        </div>
                        <Title logo={logo} title="" />
                    </div>
                    <div className={cx('contact-form')}></div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
