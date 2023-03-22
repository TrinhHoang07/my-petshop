import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

import img_1 from '../../../assets/images/img-1-slider.jpg';
import img_2 from '../../../assets/images/img-2-slider.jpg';
import img_3 from '../../../assets/images/slider-222.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SliderItem from './SliderItem';

import classNames from 'classnames/bind';
import styles from './Sliders.module.scss';

const cx = classNames.bind(styles);

function Sliders() {
    return (
        <div className={cx('sliders')}>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <SliderItem
                        url={img_3}
                        title="OUR STORY"
                        heading="FOOD FACTORY"
                        subheading="FROM 1898 TO 2015 AND NOW"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eius alias nisi quibusdam ut accusantium est, expedita illo"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem
                        url={img_1}
                        title="OUR STORY"
                        heading="FOOD FACTORY"
                        subheading="FROM 1898 TO 2015 AND NOW"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eius alias nisi quibusdam ut accusantium est, expedita illo"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem
                        url={img_2}
                        title="OUR STORY"
                        heading="FOOD FACTORY"
                        subheading="FROM 1898 TO 2015 AND NOW"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eius alias nisi quibusdam ut accusantium est, expedita illo"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Sliders;
