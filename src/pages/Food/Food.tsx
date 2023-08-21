import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Food.module.scss';
import { LayoutProducts } from '../../components/Layout/LayoutProducts';
import { CardItemFlip } from '../../components/CardItemFlip';
import { useSetRecoilState } from 'recoil';
import { filterItem } from '../../store';
import useDataInHome, { _T_DataItemHome } from '../../hooks/useDataInHome';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { getValueFilterInArray } from '../../Helper';

const cx = classNames.bind(styles);

function Food() {
    const [value, setValue] = useState<[number, number]>([0, 100]);
    const setFilterItem = useSetRecoilState(filterItem);
    const [first, setFisrt] = useState<number>(1);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const data = useDataInHome('http://localhost:3009/products/products/home?type=food');

    useEffect(() => {
        document.title = 'Đồ ăn | Petshop chất lượng số 1 Việt Nam!';
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
        setFilterItem('');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        data.length > 0 && setValue(getValueFilterInArray(data));
    }, [data]);

    const onPageChange = (page: PaginatorPageChangeEvent) => {
        setFisrt(page.first);
        setCurrentPage(++page.page);
    };

    return (
        <div>
            <LayoutProducts title="ĐỒ ĂN" value={value}>
                <>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {data.slice((currentPage - 1) * 6, currentPage * 6).map((item: _T_DataItemHome) => (
                            <div key={item.id} className={cx('food-item')}>
                                <CardItemFlip
                                    name={item.name}
                                    price={`${item.price.toString()}đ`}
                                    title="ĐỒ ĂN"
                                    src={item.previewUrl}
                                />
                            </div>
                        ))}
                    </div>

                    <div className={cx('paginator-food')}>
                        <Paginator first={first} rows={6} totalRecords={data.length} onPageChange={onPageChange} />
                    </div>
                </>
            </LayoutProducts>
        </div>
    );
}

export default Food;
