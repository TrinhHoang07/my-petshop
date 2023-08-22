import classNames from 'classnames/bind';
import styles from './Shop.module.scss';
import { LayoutProducts } from '../../components/Layout/LayoutProducts';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { filterItem, filterItemByPrice, isFilter } from '../../store';
import { useEffect, useState } from 'react';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { CardItemFlip } from '../../components/CardItemFlip';
import { getNameFromType, getValueFilterInArray } from '../../Helper';
import { Loading } from '../../components/Loading';
import { T_Products } from '../../models';

const cx = classNames.bind(styles);

function Shop() {
    const [value, setValue] = useState<[number, number]>([0, 100]);
    const [dataRender, setDataRender] = useState<T_Products[]>([]);
    const [subTitle, setSubTitle] = useState<string>('');
    const setFilterItem = useSetRecoilState(filterItem);
    const valuess = useRecoilValue(filterItemByPrice);
    const isSubmitFilter = useRecoilValue(isFilter);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // update typescript later
    const [data, setData] = useState<T_Products[]>([]);

    // fake page
    const [first, setFirst] = useState<number>(1);
    const [pageNumber, setPageNumber] = useState<number>(1);

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setPageNumber(event.page + 1);
        setFirst(event.first);
    };

    useEffect(() => {
        setDataRender(data.filter((item: T_Products) => item.price >= valuess[0] && item.price <= valuess[1]));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitFilter]);

    useEffect(() => {
        if (data.length > 0) {
            setDataRender(data);
            setValue(getValueFilterInArray(data));
        }
    }, [data]);

    useEffect(() => {
        setIsLoading(true);

        fetch('http://localhost:3009/products/all')
            .then((res) => res.json())
            .then((data) => {
                if (data && data.length > 0) {
                    setData(data);
                    setIsLoading(false);
                }
            })
            .catch((err) => console.error(err));
    }, []);

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
        <LayoutProducts subTitle={subTitle} title="CỬA HÀNG" value={value}>
            <>
                <div className={cx('my-shop')}>
                    {!isLoading ? (
                        dataRender.length > 0 &&
                        dataRender
                            .slice((pageNumber - 1) * 8, pageNumber * 8)
                            .map((item: any) => (
                                <CardItemFlip
                                    key={item.id}
                                    name={item.name}
                                    price={item.price}
                                    title={getNameFromType(item.type)}
                                    src={item.preview_url}
                                />
                            ))
                    ) : (
                        <Loading />
                    )}
                </div>
                {!isLoading && (
                    <div style={{ width: '100%' }}>
                        <Paginator
                            first={first}
                            rows={10}
                            totalRecords={dataRender.length}
                            onPageChange={onPageChange}
                        />
                    </div>
                )}
            </>
        </LayoutProducts>
    );
}

export default Shop;
