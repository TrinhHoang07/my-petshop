// import classNames from 'classnames/bind';
// import styles from './Detail.module.scss';
import { LayoutDetailProduct } from '../../components/Layout/LayoutDetailProduct';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { T_Detail, T_Product } from '../../models';

// const cx = classNames.bind(styles);

function Detail() {
    const params = useParams();
    const [data, setData] = useState<T_Product>();

    console.log(params);

    useEffect(() => {
        fetch(`http://localhost:3009/products/product/${params.id}`)
            .then((res) => res.json())
            .then((data: T_Detail) => {
                if (data.message === 'success') {
                    setData(data.data);
                }
            })
            .catch((err) => console.error(err));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <LayoutDetailProduct data={data} />;
}

export default Detail;
