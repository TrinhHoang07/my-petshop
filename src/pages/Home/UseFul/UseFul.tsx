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
import routesConfig from '../../../config/routes';
import { ApiService } from '../../../axios/ApiService';
import { useEffect, useState } from 'react';
import { Blog, T_Blogs } from '../../../models';

const cx = classNames.bind(styles);

function UseFul() {
    const apiService = new ApiService();
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        apiService.blogs
            .random()
            .then((res: T_Blogs) => {
                if (res.message === 'success') {
                    setBlogs(res.data);
                }
            })
            .catch((err) => {
                console.error('Error: ', err);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('wrapper-useful')}>
            <Title logo={logo} title="THÔNG TIN HỮU ÍCH" />
            <div className={cx('useful-content')}>
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        739: {
                            slidesPerView: 1,
                        },
                        740: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
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
                    {blogs.map((item) => (
                        <SwiperSlide key={item.id}>
                            <UseFulItem
                                path={`news/detail/${item.id}`}
                                img={item.preview_url}
                                heading={item.title}
                                description={item.description}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={cx('btn-more')}>
                <Button to={routesConfig.news} medium={'true'}>
                    XEM THÊM
                </Button>
            </div>
        </div>
    );
}

export default UseFul;
