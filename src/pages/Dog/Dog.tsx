import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Dog.module.scss';
import { LayoutProducts } from '../../components/Layout/LayoutProducts';
import { CardItem } from '../../components/CardItem';
import { useSetRecoilState } from 'recoil';
import { filterItem } from '../../store';
import useDataInHome, { _T_DataItemHome } from '../../hooks/useDataInHome';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';

const cx = classNames.bind(styles);

function Dog() {
    const [value, setValue] = useState<[number, number]>([0, 100]);
    const setFilterItem = useSetRecoilState(filterItem);
    const [first, setFisrt] = useState<number>(1);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const data = useDataInHome('http://localhost:3009/products/products/home?type=dog');

    useEffect(() => {
        document.title = 'Chó cảnh | Petshop chất lượng số 1 Việt Nam!';
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

    // renderIcons.slice((page - 1) * 60, (page * 60)).map((item, index) => (

    return (
        <div>
            <LayoutProducts title="CHÓ CẢNH" value={value} dataProducts={[1, 2, 3, 4, 5]}>
                <>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {data.slice((currentPage - 1) * 6, currentPage * 6).map((item: _T_DataItemHome) => (
                            <div key={item.id} className={cx('dog-item')}>
                                <CardItem
                                    name={item.name}
                                    price={`${item.price.toString()}đ`}
                                    title="CHÓ CẢNH"
                                    src={item.previewUrl}
                                />
                            </div>
                        ))}
                    </div>

                    <div className={cx('paginator-dog')}>
                        <Paginator first={first} rows={6} totalRecords={data.length} onPageChange={onPageChange} />
                    </div>
                </>
            </LayoutProducts>
        </div>
    );
}

export default Dog;
