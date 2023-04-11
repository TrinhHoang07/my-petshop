import classNames from 'classnames/bind';
import styles from './News.module.scss';
import logo_1 from '../../assets/images/new_1.png';
import logo_2 from '../../assets/images/new_2.jpg';
import logo_3 from '../../assets/images/new_3.jpg';
import logo_4 from '../../assets/images/new_4.jpg';
import NewItem from './NewItem';

const cx = classNames.bind(styles);

function News() {
    return (
        <div className={cx('news')}>
            <h3 className={cx('heading')}>CATEGORY ARCHIVES: TIN TỨC</h3>
            <div className={cx('contents')}>
                <div className={cx('wrapper')}>
                    <div className={cx('bar')}>bar</div>
                    <div className={cx('list-news')}>
                        <NewItem
                            logo={logo_1}
                            title="Duis luctus elit nisi, et cursus magna pellentesque non."
                            description="Chế độ ăn cho chó con Chó con từ 2 tháng tuổi đến 6 tháng [...]"
                        />
                        <NewItem
                            logo={logo_2}
                            title="Duis luctus elit nisi, et cursus magna pellentesque non. uctus elit nisi, et cursus magna pe"
                            description="Chế độ ăn cho chó con Chó con từ 2 tháng tuổi đến 6 tháng [...] Chó con từ 2 tháng tuổi đến 6 t"
                        />
                        <NewItem
                            logo={logo_3}
                            title="Duis luctus elit nisi, et cursus magna pellentesque non."
                            description="Chế độ ăn cho chó con Chó con từ 2 tháng tuổi đến 6 tháng [...]"
                        />
                        <NewItem
                            logo={logo_4}
                            title="Duis luctus elit nisi, et cursus magna pellentesque non."
                            description="Chế độ ăn cho chó con Chó con từ 2 tháng tuổi đến 6 tháng [...]"
                        />
                        <NewItem
                            logo={logo_4}
                            title="Duis luctus elit nisi, et cursus magna pellentesque non."
                            description="Chế độ ăn cho chó con Chó con từ 2 tháng tuổi đến 6 tháng [...]"
                        />
                        <NewItem
                            logo={logo_4}
                            title="Duis luctus elit nisi, et cursus magna pellentesque non."
                            description="Chế độ ăn cho chó con Chó con từ 2 tháng tuổi đến 6 tháng [...]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
