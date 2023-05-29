import { ReactNode, createContext, useContext, useRef } from 'react';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

type TProps = {
    children: ReactNode;
};

const ContextPrime = createContext<any>(null);
const useConfirmToast = () => useContext(ContextPrime);

function ConfirmAndToastContext(props: TProps) {
    const toast = useRef<Toast>(null);

    return (
        <ContextPrime.Provider value={toast}>
            <>
                <Toast
                    baseZIndex={9999999999999}
                    style={{
                        fontSize: '16px',
                    }}
                    ref={toast}
                />
                <ConfirmDialog />
                {props.children}
            </>
        </ContextPrime.Provider>
    );
}

export default ConfirmAndToastContext;
export { useConfirmToast };
