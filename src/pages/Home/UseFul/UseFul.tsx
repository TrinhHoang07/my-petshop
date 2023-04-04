import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Title } from '../../../components/Title';
import styles from './UseFul.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../assets/images/sleigh-bell.svg';
import UseFulItem from './UseFulItem';
import { Button } from '../../../components/Button';
import avatar from '../../../assets/images/useful_1.jpg';
import avatar_2 from '../../../assets/images/useful_2.jpg';
import avatar_3 from '../../../assets/images/useful_3.jpg';

const cx = classNames.bind(styles);

function UseFul() {
    return (
        <div className={cx('wrapper-useful')}>
            <Title logo={logo} title="THÔNG TIN HỮU ÍCH" />
            <div className={cx('useful-content')}>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={0}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        waitForTransition: true,
                    }}
                    speed={500}
                    loop={true}
                    pagination={false}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <UseFulItem
                            img={avatar}
                            heading="IN RUTRUM TEMPUS PURUS, UT hsfhsdhfdshfhsdfsh"
                            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum doloribus consequuntur"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UseFulItem
                            img={avatar_2}
                            heading="IN RUTRUM TEMPUS PURUS, UT hsfhsdhfdshfhsdfsh"
                            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum doloribus consequuntur"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UseFulItem
                            img={avatar_3}
                            heading="IN RUTRUM TEMPUS PURUS, UT hsfhsdhfdshfhsdfsh"
                            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum doloribus consequuntur"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UseFulItem
                            img={avatar}
                            heading="IN RUTRUM TEMPUS PURUS, UT hsfhsdhfdshfhsdfsh"
                            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum doloribus consequuntur"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UseFulItem
                            img={avatar_2}
                            heading="IN RUTRUM TEMPUS PURUS, UT hsfhsdhfdshfhsdfsh"
                            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum doloribus consequuntur"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UseFulItem
                            img={avatar_3}
                            heading="IN RUTRUM TEMPUS PURUS, UT hsfhsdhfdshfhsdfsh"
                            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum doloribus consequuntur"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={cx('btn-more')}>
                <Button medium={true}>XEM THÊM</Button>
            </div>
        </div>
    );
}

export default UseFul;
