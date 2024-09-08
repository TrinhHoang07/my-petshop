import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './News.module.scss';
import logo_1 from '../../assets/images/new_1.png';
import NewItem from './NewItem';
import Search from './Search';
import { NavBarNewsPage } from '../../components/Layout/components/NavBarNewsPage';
import { ApiService } from '../../axios/ApiService';
import { Blog, T_Blogs } from '../../models';

const cx = classNames.bind(styles);

function News() {
    const apiService = new ApiService();
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        document.title = 'Tin tức | Petshop chất lượng số 1 Việt Nam!';
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
    }, []);

    useEffect(() => {
        apiService.blogs
            .getBlogs()
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
        <div className={cx('news')}>
            <h3 className={cx('heading')}>CATEGORY ARCHIVES: TIN TỨC</h3>
            <div className={cx('contents')}>
                <div className={cx('wrapper')}>
                    <div className={cx('bar')}>
                        <Search />
                        <NavBarNewsPage />
                    </div>
                    <div className={cx('list-news')}>
                        {blogs.map((item) => (
                            <NewItem
                                key={item.id}
                                id={item.id}
                                logo={item.preview_url ?? logo_1}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
