// NO COMPLETE

import { ReactNode, createContext, useContext, useEffect, useRef } from 'react';
import { Socket, io } from 'socket.io-client';

type TProps = {
    children: ReactNode;
};

const ContextSocket = createContext<any>(null);
const useSocketContext = () => useContext(ContextSocket);

function SocketContextProvider(props: TProps) {
    const socket = useRef<Socket>();

    useEffect(() => {
        const ioSocket = io('http://localhost:3008', {
            timeout: 5000,
            autoConnect: true,
        });

        socket.current = ioSocket;
        // socketProvider.current = socket;

        return () => {
            socket.current?.disconnect();
        };
    }, []);

    return <ContextSocket.Provider value={socket}>{props.children}</ContextSocket.Provider>;
}

export default SocketContextProvider;
export { useSocketContext };
