import classNames from 'classnames/bind';
import styles from './OptionPay.module.scss';
import { IoMdClose } from 'react-icons/io';
import { useMemo } from 'react';

const cx = classNames.bind(styles);

type T_Props = {
    open: boolean;
    setOpen: (value: boolean) => void;
    choose: { code: string; title: string };
    setChoose: (value: { code: string; title: string }) => void;
};

function OptionPayScreen(props: T_Props) {
    const data = useMemo(() => {
        return [
            {
                code: 'hand_pay',
                title: 'Thanh toán khi nhận hàng',
            },
            {
                code: 'online',
                title: 'Thanh toán chuyển khoản ngân hàng',
            },
        ];
    }, []);

    const handleCloseAddress = () => {
        props.setOpen(false);
    };

    return (
        <>
            <div
                style={{
                    visibility: props.open ? 'visible' : 'hidden',
                }}
                onClick={handleCloseAddress}
                className={cx('address')}
            ></div>
            <div
                style={{
                    transform: props.open ? 'translate(-50%, -50%)' : 'translate(-50%, -200%)',
                }}
                className={cx('address-container')}
            >
                <div className={cx('add-header')}>
                    <div style={{ flex: 1 }}></div>
                    <h3>Chọn phương thức thanh toán</h3>
                    <span onClick={handleCloseAddress}>
                        <IoMdClose size={'2.5rem'} />
                    </span>
                </div>
                <div className={cx('add-contents')}>
                    {data.map((item) => (
                        <div
                            key={item.code}
                            onClick={() => props.setChoose(item)}
                            className={cx('add-item', { active: props.choose?.code === item.code })}
                        >
                            <p>{item.title}</p>
                            <p
                                style={{
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    paddingLeft: '4px',
                                }}
                            >
                                {item.code === 'hand_pay'
                                    ? 'Đơn hàng sẽ được thanh toán khi giao đến bạn'
                                    : 'Thanh toán tiện lợi và nhanh chóng'}
                            </p>
                        </div>
                    ))}
                </div>
                <div className={cx('add-footer')}>
                    <button onClick={handleCloseAddress}>Ok</button>
                </div>
            </div>
        </>
    );
}

export default OptionPayScreen;
