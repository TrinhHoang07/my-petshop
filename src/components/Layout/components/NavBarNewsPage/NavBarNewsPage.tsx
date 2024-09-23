import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NavBarNewsPage.module.scss';
import { ApiService } from '../../../../axios/ApiService';
import React, { useEffect, useState } from 'react';
import { Blog, T_Blogs } from '../../../../models';

const cx = classNames.bind(styles);

function NavBarNewsPage() {
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
        <div className={cx('bar-content')}>
            <h2 className={cx('bar-heading')}>BÀI VIẾT MỚI</h2>
            <div className={cx('bar-wrapper')}>
                {blogs.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <div className={cx('bar-item')}>
                            <div className={cx('thumbnail-bar')}>
                                <img src={item.preview_url} alt="bar item" />
                            </div>
                            <Link to={`/news/detail/${item.id}`} className={cx('bar-description')}>
                                {item.title}
                            </Link>
                        </div>
                        {index !== blogs.length - 1 && <div className={cx('spacer')}></div>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default NavBarNewsPage;
