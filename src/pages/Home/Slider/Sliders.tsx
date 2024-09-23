import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCreative } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import classNames from 'classnames/bind';
import SliderItem from './SliderItem';
import img_1 from '../../../assets/images/img-1-desktop-slider.jpg';
import img_2 from '../../../assets/images/img-2-desktop-slider.jpg';
import img_3 from '../../../assets/images/img-3-desktop-slider.jpg';
import styles from './Sliders.module.scss';

const cx = classNames.bind(styles);

function Sliders() {
    return (
        <div className={cx('sliders')}>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                speed={500}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    waitForTransition: true,
                }}
                modules={[Autoplay, Pagination, EffectCreative]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <SliderItem
                        url={img_3}
                        title="TÌNH YÊU"
                        heading="THÚ CƯNG"
                        subheading="BOSS ĐỂ LẠI NHIỀU DẤU DÂN"
                        description="Một người đàn ông có 3 người bạn chung thủy trong đời: một người vợ hiền, một chú chó được nuôi từ nhỏ và một ít tiền riêng"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem
                        url={img_1}
                        title="ĐÁNG YÊU"
                        heading="CHÚ CHÓ"
                        subheading="TỪ 2002 ĐẾN 2024 VÀ HIỆN TẠI"
                        description="Thế giới sẽ tràn ngập tình yêu nếu mọi người đều có khả năng yêu thương vô điều kiện như những chú chó. Bạn có thích mèo không?"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem
                        url={img_2}
                        title="THÂN THIỆN"
                        heading="CHÚ MÈO"
                        subheading="BẠN CÓ SẴN SÀNG YÊU TÔI KHÔNG"
                        description="Con chó bên cạnh bạn là điều duy nhất trên trái đất yêu bạn hơn cả mạng sống của nó. Bạn có thích chúng không?"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Sliders;
