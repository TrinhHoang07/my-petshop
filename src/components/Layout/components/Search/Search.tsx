import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { IoIosCloseCircle } from 'react-icons/io';
import { AiOutlineLoading } from 'react-icons/ai';
import img from '../../../../assets/images/cat_item_1.jpg';

const cx = classNames.bind(styles);

function Search() {
    const [inputValue, setInputValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div className={cx('search')}>
            <div className={cx('wrapper')}>
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
                        <div className={cx('result-item')}>
                            <div className={cx('item-info')}>
                                <div className={cx('preview')}>
                                    <img src={img} alt="images preview" />
                                </div>
                                <p className={cx('name-item')}>Meo cute hot me</p>
                            </div>
                            <p className={cx('price-item')}>1.300.000d</p>
                        </div>
                        <div className={cx('result-item')}>
                            <div className={cx('item-info')}>
                                <div className={cx('preview')}>
                                    <img src={img} alt="images preview" />
                                </div>
                                <p className={cx('name-item')}>Meo cute hot me</p>
                            </div>
                            <p className={cx('price-item')}>1.300.000d</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
