import { useEffect, useState } from 'react';
import AOS from 'aos';

type TProps = {
    children: React.ReactElement;
};

function AosContext(props: TProps) {
    const [init, setInit] = useState<boolean>(false);

    useEffect(() => {
        init &&
            AOS.init({
                offset: 150,
                throttleDelay: 120,
                duration: 800,
            });

        setInit(true);
    }, [init]);

    return props.children;
}

export default AosContext;
