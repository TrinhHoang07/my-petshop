import { useState, useEffect } from 'react';

export type _T_DataItemHome = {
    id: number;
    name: string;
    previewUrl: string;
    price: number;
};

function useDataInHome(url: string) {
    const [data, setData] = useState<_T_DataItemHome[]>([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (data.data.length > 0) {
                    const items: _T_DataItemHome[] = data.data.map((item: any) => ({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        previewUrl: item.preview_url,
                    }));

                    setData(items);
                }
            })
            .catch((err) => console.error(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return data;
}

export default useDataInHome;
