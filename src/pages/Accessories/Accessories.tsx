import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Accessories.module.scss';
import { LayoutProducts } from '../../components/Layout/LayoutProducts';
import { CardItemZoomIn } from '../../components/CardItemZoomIn';
import { useSetRecoilState } from 'recoil';
import { filterItem } from '../../store';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import useDataInHome, { _T_DataItemHome } from '../../hooks/useDataInHome';

const cx = classNames.bind(styles);

function Accessories() {
    const [value, setValue] = useState<[number, number]>([0, 100]);
    const setFilterItem = useSetRecoilState(filterItem);
    const [first, setFisrt] = useState<number>(1);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const data = useDataInHome('http://localhost:3009/products/products/home?type=accessory');

    useEffect(() => {
        document.title = 'Phụ kiện | Petshop chất lượng số 1 Việt Nam!';
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
        setFilterItem('');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onPageChange = (page: PaginatorPageChangeEvent) => {
        setFisrt(page.first);
        setCurrentPage(++page.page);
    };

    return (
        <div>
            <LayoutProducts title="PHỤ KIỆN" value={value} dataProducts={[1, 2, 3, 4, 5]}>
                <>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {data.slice((currentPage - 1) * 6, currentPage * 6).map((item: _T_DataItemHome) => (
                            <div key={item.id} className={cx('accessories-item')}>
                                <CardItemZoomIn
                                    name={item.name}
                                    price={`${item.price.toString()}đ`}
                                    title="PHỤ KIỆN"
                                    src={item.previewUrl}
                                />
                            </div>
                        ))}
                    </div>

                    <div className={cx('paginator-accessory')}>
                        <Paginator first={first} rows={6} totalRecords={8} onPageChange={onPageChange} />
                    </div>
                </>
            </LayoutProducts>
        </div>
    );
}

export default Accessories;
