import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import { LayoutDetailProduct } from '../../components/Layout/LayoutDetailProduct';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Detail() {
    const params = useParams();
    const [data, setData] = useState<any>();

    console.log(params);

    useEffect(() => {
        fetch(`http://localhost:3009/products/product/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.message === 'success') {
                    console.log(data.data);
                    setData(data.data);
                }
            })
            .catch((err) => console.error(err));
    }, []);

    return <LayoutDetailProduct data={data} />;
}

export default Detail;
