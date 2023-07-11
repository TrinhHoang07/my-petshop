import classNames from 'classnames/bind';
import styles from './Categories.module.scss';
import { useSessionContext } from '../../context/SessionContext';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import routesConfig from '../../config/routes';
import user from '../../assets/images/meoww.jpg';
import pro from '../../assets/images/cat_item_3.jpg';
import { confirmDialog } from 'primereact/confirmdialog';
import { MdOutlineDiscount } from 'react-icons/md';
import { useConfirmToast } from '../../context/ConfirmAndToastContext';
import { Voucher } from './Voucher';

const cx = classNames.bind(styles);

const fakeData = [
    {
        id: 1,
        name: 'Meow Meow Cuteeeeeeee',
        color: 'White snow',
        price: 3000000,
        lastPrice: 3000000,
        quantity: 1,
        checked: false,
    },
    {
        id: 2,
        name: 'Dog Dog Cuteeeeeeee',
        color: 'Black',
        price: 10007770,
        lastPrice: 10007770,
        quantity: 1,
        checked: false,
    },
    {
        id: 3,
        name: 'Thuc an cho Meow Meow',
        color: 'White snow',
        price: 1090000,
        lastPrice: 1090000,
        quantity: 1,
        checked: false,
    },
    {
        id: 4,
        name: 'Meo anh long dai cute',
        color: 'Gold',
        price: 1900000,
        lastPrice: 1900000,
        quantity: 1,
        checked: false,
    },
    {
        id: 5,
        name: 'Cho ba tu',
        color: 'Grey',
        price: 1500000,
        lastPrice: 1500000,
        quantity: 1,
        checked: false,
    },
];

function Categories() {
    const [values] = useSessionContext();
    const [data, setData] = useState<any[]>(fakeData);
    const [checkAll, setCheckAll] = useState<boolean>(false);
    const navigate = useNavigate();
    const toast = useConfirmToast();

    useEffect(() => {
        document.title = 'Trang chủ | Petshop chất lượng số 1 Việt Nam!';
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
    }, []);

    useLayoutEffect(() => {
        if (!values.isAuth) {
            navigate(routesConfig.login, {
                state: {
                    redirect: `${routesConfig.categories}`,
                },
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values]);

    const totalMoney = useMemo(() => {
        const dataChecked: any[] = data.filter((item) => item.checked === true);

        console.log('call', dataChecked);

        if (dataChecked.length > 0) {
            const result = dataChecked.reduce((result, cur) => result + cur.lastPrice, 0);
            console.log(result);

            return {
                price: result,
                length: dataChecked.length,
            };
        }
    }, [data]);

    const confirmOne = (value: any) => {
        confirmDialog({
            message: 'Bạn có chắc chắn muốn xóa không?',
            header: 'Xóa sản phẩm',
            acceptLabel: 'Đồng ý',
            rejectLabel: 'Hủy bỏ',
            icon: 'pi pi-exclamation-triangle',
            accept() {
                toast.current?.show({
                    severity: 'success',
                    summary: 'Thành công',
                    detail: 'Đã xóa thành công sản phẩm',
                    life: 3000,
                });
                setData((prev) => prev.filter((item) => item.id !== value.id));
            },
        });
    };

    const confirmAll = () => {
        confirmDialog({
            message: 'Bạn có chắc chắn muốn xóa tất cả sản phẩm không?',
            header: 'Xóa sản phẩm',
            acceptLabel: 'Đồng ý',
            rejectLabel: 'Hủy bỏ',
            icon: 'pi pi-exclamation-triangle',
            accept() {
                if (checkAll) {
                    setData([]);
                    toast.current?.show({
                        severity: 'success',
                        summary: 'Thành công',
                        detail: 'Đã xóa thành công',
                        life: 3000,
                    });
                } else {
                    toast.current?.show({
                        severity: 'error',
                        summary: 'Thất bại',
                        detail: 'Vui lòng chọn sản phẩm cần xóa!',
                        life: 3000,
                    });
                }
            },
        });
    };

    const handleIncrementQuantity = (value: any) => {
        const index = data.findIndex((item) => item.id === value.id);

        const dataChanged = [...data];
        dataChanged[index] = {
            ...data[index],
            quantity: ++data[index].quantity,
            lastPrice: data[index].quantity * data[index].price,
        };

        setData(dataChanged);
    };

    const handleDownQuantity = (value: any) => {
        const index = data.findIndex((item) => item.id === value.id);

        const dataChanged = [...data];
        dataChanged[index] = {
            ...dataChanged[index],
            quantity: --data[index].quantity <= 1 ? 1 : data[index].quantity,
            lastPrice: data[index].quantity <= 1 ? data[index].price : data[index].quantity * data[index].price,
        };

        setData(dataChanged);
    };

    const handleChecked = (value: any) => {
        const index = data.findIndex((item) => item.id === value.id);

        const dataChanged = [...data];
        dataChanged[index] = {
            ...dataChanged[index],
            checked: !data[index].checked,
        };

        setData(dataChanged);
    };

    const handeSelectAll = () => {
        setCheckAll((prev) => !prev);
        const dataChecked = data.map((item) => ({
            ...item,
            checked: !checkAll ? true : false,
        }));

        setData(dataChecked);
    };

    const handleOpenVoucher = () => {
        const mask: HTMLElement | null = document.getElementById('mask');
        const voucher: HTMLElement | null = document.getElementById('voucher');

        if (mask) {
            mask.style.visibility = 'visible';
        }
        if (voucher) {
            voucher.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    };

    return (
        <div className={cx('categories')}>
            <Voucher />
            <div className={cx('header')}>
                <div className={cx('info')}>
                    <div className={cx('logo')}>
                        <h3 className={cx('name-petshop')}>Petshop</h3>
                    </div>
                    <div className={cx('line')}></div>
                    <p className={cx('cart-name')}>Giỏ hàng</p>
                </div>
                <Link
                    style={{
                        textDecoration: 'none',
                        color: '#333',
                    }}
                    to={routesConfig.profile}
                >
                    <div className={cx('user')}>
                        <div className={cx('preview')}>
                            <img src={user} alt="user" />
                        </div>
                        <h3 className={cx('user-name')}>hoangtrinh</h3>
                    </div>
                </Link>
            </div>
            <div className={cx('carts-list')}>
                <div className={cx('wrapper-carts')}>
                    {data.map((item) => (
                        <div key={item.id} className={cx('cart-item')}>
                            <div className={cx('input-product-wrap')}>
                                <input
                                    checked={item.checked}
                                    onChange={() => handleChecked(item)}
                                    type="checkbox"
                                    name="check-cart"
                                />
                                <div className={cx('info-item')}>
                                    <div className={cx('preview-product')}>
                                        <img src={pro} alt="preview product" />
                                    </div>
                                    <div className={cx('wrapper-info')}>
                                        <p className={cx('name-item-cart')}>{item.name}</p>
                                        <p className={cx('color-product')}>Màu sắc: {item.color}</p>
                                        <p className={cx('item-price')}>{item.price}</p>
                                        <div className={cx('count-item')}>
                                            <p onClick={() => handleDownQuantity(item)} className={cx('p_1')}>
                                                -
                                            </p>
                                            <p className={cx('p_2')}>{item.quantity}</p>
                                            <p onClick={() => handleIncrementQuantity(item)} className={cx('p_3')}>
                                                +
                                            </p>
                                        </div>

                                        <p className={cx('last-price')}>{item.lastPrice}</p>
                                        <p onClick={() => confirmOne(item)} className={cx('remove-item')}>
                                            Xóa
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cx('footer')}>
                    <div className={cx('voucher')}>
                        <div className={cx('empty')}></div>
                        <div className={cx('info-voucher')}>
                            <div className={cx('icon')}>
                                <MdOutlineDiscount size={'2rem'} />
                                <span>Petshop Voucher</span>
                            </div>
                            <p onClick={handleOpenVoucher} className={cx('add-voucher')}>
                                Chọn Hoặc Nhập Mã
                            </p>
                        </div>
                    </div>
                    <div className={cx('actions-footer')}>
                        <div className={cx('all-remove')}>
                            <div className={cx('select-all')}>
                                <input
                                    onChange={handeSelectAll}
                                    checked={checkAll}
                                    type="checkbox"
                                    name="remove-all"
                                    id="all-del"
                                />
                                <label htmlFor="all-del">Chọn Tất Cả ({data.length})</label>
                            </div>
                            <p onClick={confirmAll} className={cx('deleted-all')}>
                                Xóa
                            </p>
                        </div>
                        <div className={cx('buy-all')}>
                            <p className={cx('total-buy')}>
                                Tổng thanh toán{' '}
                                {totalMoney?.length && (
                                    <span className={cx('total-count')}>({totalMoney?.length} sản phẩm)</span>
                                )}
                                <span>₫{totalMoney?.price ?? 0}</span>
                            </p>
                            <button className={cx('btn-buy')}>Mua Hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;
