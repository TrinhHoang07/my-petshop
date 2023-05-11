import classNames from 'classnames/bind';
import styles from './Shop.module.scss';
import { LayoutProducts } from '../../components/Layout/LayoutProducts';
import { useSetRecoilState } from 'recoil';
import { filterItem } from '../../store';
import { useEffect, useState } from 'react';
import { CardItem } from '../../components/CardItem';
import img from '../../assets/images/cat_item_2.jpg';
import img_d from '../../assets/images/dog_item_2.jpg';
import img_f from '../../assets/images/food_item_2.jpg';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { CardItemFlip } from '../../components/CardItemFlip';
import { CardItemZoomInLeft } from '../../components/CardItemZoomInLeft';

const cx = classNames.bind(styles);

function Shop() {
    const [value, setValue] = useState<[number, number]>([0, 100]);
    const [subTitle, setSubTitle] = useState<string>('');
    const setFilterItem = useSetRecoilState(filterItem);

    // fake page
    const [first, setFirst] = useState<number>(1);
    const [pageNumber, setPageNumber] = useState<number>(1);

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setPageNumber(event.page + 1);
        setFirst(event.first);
    };

    useEffect(() => {
        if (pageNumber > 1) {
            setSubTitle(`TRANG ${pageNumber}`);
        } else {
            setSubTitle('');
        }
    }, [pageNumber]);

    useEffect(() => {
        document.title = 'Cửa hàng | Petshop chất lượng số 1 Việt Nam!';
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
        setFilterItem('');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <LayoutProducts subTitle={subTitle} title="CỬA HÀNG" value={value} dataProducts={[1, 2, 3, 4, 5]}>
            <>
                <div className={cx('my-shop')}>
                    {pageNumber === 1 &&
                        Array(9)
                            .fill(9)
                            .map((item, index) => (
                                <div key={index} className={cx('shop-item')}>
                                    <CardItem name="Chó Alaska" price="11000000đ" title="CHÓ CẢNH" src={img_d} />
                                </div>
                            ))}
                    {pageNumber === 2 &&
                        Array(9)
                            .fill(9)
                            .map((item, index) => (
                                <div key={index} className={cx('shop-item')}>
                                    <CardItemZoomInLeft
                                        name="Mèo Anh Lông Dài"
                                        price="8000000đ"
                                        title="MÈO CẢNH"
                                        src={img}
                                    />
                                </div>
                            ))}
                    {pageNumber === 3 &&
                        Array(9)
                            .fill(9)
                            .map((item, index) => (
                                <div key={index} className={cx('shop-item')}>
                                    <CardItemFlip
                                        name="Bánh thưởng hình bóng AFP Krazy"
                                        price="80000đ"
                                        title="ĐỒ ĂN"
                                        src={img_f}
                                    />
                                </div>
                            ))}
                </div>
                <div style={{ width: '100%' }}>
                    <Paginator first={first} rows={10} totalRecords={30} onPageChange={onPageChange} />
                </div>
            </>
        </LayoutProducts>
    );
}

export default Shop;
