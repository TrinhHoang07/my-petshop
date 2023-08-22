import { useRef, useEffect } from 'react';

export const useDebouneClick = (callback: any, delay: number) => {
    const latestCallback = useRef<any>();
    const latestTimeout = useRef<any>();

    useEffect(() => {
        latestCallback.current = callback;
    }, [callback]);

    return () => {
        if (latestTimeout.current) {
            clearTimeout(latestTimeout.current);
        }

        latestTimeout.current = setTimeout(() => {
            latestCallback.current();
        }, delay);
    };
};
