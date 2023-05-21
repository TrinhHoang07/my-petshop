import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { IoIosCloseCircle } from 'react-icons/io';
import { AiOutlineLoading } from 'react-icons/ai';
import img from '../../../../assets/images/cat_item_1.jpg';
import { useDebounce } from '../../../../hooks';

const cx = classNames.bind(styles);

function Search() {
    const [inputValue, setInputValue] = useState<string>('');
    const [fakeData, setFakeData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('Không có tìm kiếm gần đây');
    const debounced = useDebounce(inputValue, 750);

    useEffect(() => {
        if (debounced.trim().length > 0) {
            setLoading(true);
            fetch(`https://jsonplaceholder.typicode.com/posts?q=${debounced}`)
                .then((res) => res.json())
                .then((data) => {
                    setLoading(false);

                    if (data.length > 0) {
                        setFakeData(data);
                    } else {
                        setFakeData([]);
                        setMessage('Không có kết quả tìm kiếm!');
                    }
                })
                .catch((err) => console.log('err: ', err));
        }
    }, [debounced]);

    const handleCloseSearch = () => {
        const mask: HTMLElement | null = document.getElementById('mask');
        const search: HTMLElement | null = document.getElementById('search-wrap');

        if (mask) {
            mask.style.visibility = 'hidden';
        }
        if (search) {
            search.style.transform = 'translateX(450px)';
        }
    };

    return (
        <>
            <div id="mask" onClick={handleCloseSearch} className={cx('search')}></div>
            <div id="search-wrap" className={cx('wrapper')}>
                <div className={cx('contents')}>
                    <h4 className={cx('heading')}>Tìm kiếm trong Shop</h4>
                    <div className={cx('input-search')}>
                        <input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            type="text"
                            placeholder="Nhập để tìm kiếm..."
                        />
                        <span>
                            {inputValue?.trim().length > 0 && !loading && (
                                <IoIosCloseCircle onClick={() => setInputValue('')} />
                            )}
                            {loading && <AiOutlineLoading className={cx('loading-input')} />}
                        </span>
                    </div>
                    <div className={cx('line-search')}></div>
                    <div className={cx('result-search')}>
                        {fakeData.length > 0 ? (
                            fakeData.map((item) => (
                                <div key={item.id} className={cx('result-item')}>
                                    <div className={cx('item-info')}>
                                        <div className={cx('preview')}>
                                            <img src={img} alt="images preview" />
                                        </div>
                                        <p className={cx('name-item')}>Meo cute hot me</p>
                                    </div>
                                    <p className={cx('price-item')}>1.300.000d</p>
                                </div>
                            ))
                        ) : (
                            <p className={cx('message-noti')}>{message}</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;