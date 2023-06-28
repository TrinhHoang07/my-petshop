import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import logo from '../../assets/images/logo-petshop.jpg';
import { Link } from 'react-router-dom';
import routesConfig from '../../config/routes';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

type TForm = {
    name: string;
    password: string;
    confirmPassword: string;
};

function Register() {
    const nameRef = useRef<any>();
    const passwordRef = useRef<any>();
    const confirmPasswordRef = useRef<any>();
    const [checkPassword, setCheckPassword] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TForm>();

    const onSubmit: SubmitHandler<TForm> = (data: TForm) => {
        if (data.password !== data.confirmPassword) {
            handleErrorInput(confirmPasswordRef.current as HTMLInputElement);
            setCheckPassword(true);
        } else {
            handleClearErrorInput(confirmPasswordRef.current as HTMLInputElement);
            setCheckPassword(false);
            console.log('CALL API: ', data);
        }
    };

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

        if (errors.password?.ref) {
            passwordRef.current = errors.password.ref;
            handleErrorInput(errors.password.ref as HTMLInputElement);
        } else {
            if (passwordRef.current) {
                handleClearErrorInput(passwordRef.current);
            }
        }

        if (errors.confirmPassword?.ref) {
            confirmPasswordRef.current = errors.confirmPassword.ref;
            handleErrorInput(errors.confirmPassword.ref as HTMLInputElement);
        } else {
            if (confirmPasswordRef.current) {
                handleClearErrorInput(confirmPasswordRef.current);
            }
        }
    }, [errors.name, errors.password, errors.confirmPassword]);

    return (
        <div className={cx('login')}>
            <div className={cx('contents')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="logo shop" />
                </div>
                <div className={cx('heading')}>
                    <h3>Sign up to PetShop</h3>
                    <p>Vui lòng nhập đầy đủ thông tin của bạn</p>
                </div>
                <div className={cx('login-form')}>
                    <form onSubmit={handleSubmit(onSubmit)} className={cx('form-container')}>
                        <div className={cx('form-item')}>
                            <label htmlFor="name">Tài khoản: </label>
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
                            <label htmlFor="password">Mật khẩu: </label>
                            <input
                                id="password"
                                type="text"
                                {...register('password', {
                                    required: true,
                                })}
                                placeholder="Password..."
                                onInput={(e) => handleFocus(e.target as HTMLInputElement)}
                                onBlur={(e) => handleBlur(e.target)}
                            />
                            {errors.password && <p className={cx('error-field')}>This field is required!</p>}
                        </div>
                        <div className={cx('form-item')}>
                            <label htmlFor="confirmPassword">Nhập lại mật khẩu: </label>
                            <input
                                id="confirmPassword"
                                type="text"
                                {...register('confirmPassword', {
                                    required: true,
                                })}
                                placeholder="Confirm password..."
                                onInput={(e) => handleFocus(e.target as HTMLInputElement)}
                                onBlur={(e) => handleBlur(e.target)}
                            />
                            {errors.confirmPassword && <p className={cx('error-field')}>This field is required!</p>}
                            {checkPassword && <p className={cx('error-field')}>Mật khẩu không khớp!</p>}
                        </div>
                        <div className={cx('form-submit')}>
                            <button type="submit">ĐĂNG KÝ</button>
                            <p>
                                Bạn đã có tài khoản. <Link to={routesConfig.login}>Đăng nhập</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
