// NO COMPLETE

import { ReactNode, createContext, useContext, useRef } from 'react';
import { Socket } from 'socket.io-client';

type TProps = {
    children: ReactNode;
};

const ContextSocket = createContext<any>(null);
const useSocketContext = () => useContext(ContextSocket);

function SocketContextProvider(props: TProps) {
    const socket = useRef<Socket>();

    return <ContextSocket.Provider value={socket}>{props.children}</ContextSocket.Provider>;
}

export default SocketContextProvider;
export { useSocketContext };
