import { useState, useLayoutEffect } from 'react';

function useWindowPosition() {
    const [scrollPosition, setPosition] = useState(0);

    useLayoutEffect(() => {
        function updatePosition() {
            setPosition(window.pageYOffset);
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return scrollPosition;
}

export default useWindowPosition;
