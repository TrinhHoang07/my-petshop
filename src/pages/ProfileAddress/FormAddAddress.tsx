import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './ProfileAddress.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';

const cx = classNames.bind(styles);

type TForm = {
    name: string;
    phone: string;
    city: string;
    detail: string;
};

type _T_Props = {
    visible: boolean;
    setIsVisible: (visible: boolean) => void;
};

function FormAddAddress(props: _T_Props) {
    const nameRef = useRef<any>();
    const phoneRef = useRef<any>();
    const cityRef = useRef<any>();
    const detailRef = useRef<any>();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<TForm>();

    const onSubmit: SubmitHandler<TForm> = (data: TForm) => {};

    const handleErrorInput = (ele: HTMLInputElement) => {
        ele.style.border = '1px solid red';
    };

    const handleClearErrorInput = (ele: HTMLInputElement) => {
        ele.style.border = '1px solid dodgerblue';
    };

    const handleFocus = (ele: HTMLInputElement) => {
        ele.style.border = '1px solid dodgerblue';
    };

    const handleBlur = (ele: HTMLInputElement) => {
        ele.style.border = '1px solid #d7d7d7';
    };

    useEffect(() => {
        if (errors.name?.ref) {
            nameRef.current = errors.name.ref;
            handleErrorInput(errors.name.ref as HTMLInputElement);
        } else {
            if (nameRef.current) {
                handleClearErrorInput(nameRef.current);
            }
        }

        if (errors.phone?.ref) {
            phoneRef.current = errors.phone.ref;
            handleErrorInput(errors.phone.ref as HTMLInputElement);
        } else {
            if (phoneRef.current) {
                handleClearErrorInput(phoneRef.current);
            }
        }

        if (errors.city?.ref) {
            cityRef.current = errors.city.ref;
            handleErrorInput(errors.city.ref as HTMLInputElement);
        } else {
            if (cityRef.current) {
                handleClearErrorInput(cityRef.current);
            }
        }

        if (errors.detail?.ref) {
            detailRef.current = errors.detail.ref;
            handleErrorInput(errors.detail.ref as HTMLInputElement);
        } else {
            if (detailRef.current) {
                handleClearErrorInput(detailRef.current);
            }
        }
    }, [errors.name, errors.phone, errors.city, errors.detail]);

    return (
        <>
            <div
                className={cx('mask')}
                style={{
                    visibility: props.visible ? 'visible' : 'hidden',
                }}
            ></div>
            <div
                className={cx('form-contents')}
                style={{
                    transform: props.visible ? 'scale(1)' : 'scale(0)',
                }}
            >
                <h3 className={cx('heading-form-add')}>Thêm địa chỉ</h3>

                <div className={cx('detail-card')}>
                    <form onSubmit={handleSubmit(onSubmit)} className={cx('form-container')}>
                        <div className={cx('form-wrapper')}>
                            <div className={cx('form-item')}>
                                <label htmlFor="name">Họ Và Tên: </label>
                                <input
                                    id="name"
                                    type="text"
                                    {...register('name', { required: true, minLength: 1 })}
                                    placeholder="Your name..."
                                    onInput={(e) => handleFocus(e.target as HTMLInputElement)}
                                    onBlur={(e) => handleBlur(e.target)}
                                />
                                {errors.name && <p className={cx('error-field')}>This field is required!</p>}
                            </div>
                            <div className={cx('form-item')}>
                                <label htmlFor="phone">Số điện thoại: </label>
                                <input
                                    id="phone"
                                    type="text"
                                    {...register('phone', { required: true, minLength: 1 })}
                                    placeholder="Your name..."
                                    onInput={(e) => handleFocus(e.target as HTMLInputElement)}
                                    onBlur={(e) => handleBlur(e.target)}
                                />
                                {errors.phone && <p className={cx('error-field')}>This field is required!</p>}
                            </div>
                            <div className={cx('form-item')}>
                                <label htmlFor="city">Tỉnh/Thành Phố/, Quận/Huyện, Phường/Xã: </label>
                                <input
                                    id="city"
                                    type="text"
                                    {...register('city', { required: true, minLength: 1 })}
                                    placeholder="Your name..."
                                    onInput={(e) => handleFocus(e.target as HTMLInputElement)}
                                    onBlur={(e) => handleBlur(e.target)}
                                />
                                {errors.city && <p className={cx('error-field')}>This field is required!</p>}
                            </div>
                            <div className={cx('form-item')}>
                                <label htmlFor="detail">Địa chỉ cụ thể: </label>
                                <input
                                    id="detail"
                                    type="text"
                                    {...register('detail', { required: true, minLength: 1 })}
                                    placeholder="Your name..."
                                    onInput={(e) => handleFocus(e.target as HTMLInputElement)}
                                    onBlur={(e) => handleBlur(e.target)}
                                />
                                {errors.detail && <p className={cx('error-field')}>This field is required!</p>}
                            </div>
                        </div>

                        <div className={cx('type-address')}>
                            <h3 className={cx('type-address-heading')}>Loại địa chỉ</h3>
                            <div className={cx('type-item')}>
                                <button>Nhà Riêng</button>
                                <button>Văn Phòng</button>
                            </div>
                            <div className={cx('add-default-type')}>
                                <input type="checkbox" id="address-type" />
                                <label htmlFor="address-type">Đặt làm địa chỉ mặc định</label>
                            </div>
                        </div>
                        <div className={cx('form-submit')}>
                            <button
                                onClick={() => {
                                    reset();
                                    props.setIsVisible(false);
                                }}
                                type="button"
                                className={cx('btn-back')}
                            >
                                Trở lại
                            </button>
                            <button type="submit">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default FormAddAddress;