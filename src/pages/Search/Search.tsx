import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useLocation } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';

const cx = classNames.bind(styles);

type TStateSearch = {
    q?: string;
};

function Search() {
    const { state }: { state: TStateSearch } = useLocation();
    const [searchText, setSearchText] = useState<string>('');

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-contents')}>
                <div className={cx('header')}>
                    <h5>Tìm kiếm trong Shop</h5>
                    <div className={cx('input-search')}>
                        <input
                            value={searchText}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
                            type="text"
                            placeholder="Nhập từ khóa để tìm kiếm..."
                        />
                        <span>
                            <BiSearch />
                        </span>
                        {!!searchText && (
                            <div className={cx('search-preview')}>
                                <h6>Kết quả tìm kiếm</h6>
                                <div className={cx('result-search-preview')}>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={cx('contents')}>
                    <h2>
                        Kết quả tìm kiếm cho '<span>{state ? state.q : searchText}</span>'
                    </h2>
                    <div className={cx('containers')}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
