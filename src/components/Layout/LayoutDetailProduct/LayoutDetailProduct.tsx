import classNames from 'classnames/bind';
import styles from './LayoutDetailProduct.module.scss';
import { SuggestProducts } from '../components/SuggestProducts';
import { NavBarNewsPage } from '../components/NavBarNewsPage';
import { TabView, TabPanel } from 'primereact/tabview';
import { Rating } from 'primereact/rating';
import { Galleria } from 'primereact/galleria';
import img_1 from '../../../assets/images/cat_item_1.jpg';
import img_2 from '../../../assets/images/cat_item_2.jpg';
import img_3 from '../../../assets/images/cat_item_3.jpg';
import { useEffect, useState } from 'react';
import { Similar } from '../components/Similar';

const cx = classNames.bind(styles);

type TProps = {
    children: React.ReactNode;
};

function LayoutDetailProduct(props: TProps) {
    const [quantity, setQuantity] = useState<number>(1);

    const data = [
        {
            id: 1,
            url: img_1,
            thumb: img_1,
            alt: 'description',
        },
        {
            id: 2,
            url: img_2,
            thumb: img_2,
            alt: 'description',
        },
        {
            id: 3,
            url: img_3,
            thumb: img_3,
            alt: 'description',
        },
    ];

    useEffect(() => {
        document.title = 'Trang chủ | Petshop chất lượng số 1 Việt Nam!';
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
    }, []);

    const itemTemplate = (item: any) => {
        return item && <img src={item.url} alt={item.alt} style={{ width: '100%' }} />;
    };

    const thumbnailTemplate = (item: any) => {
        return <img src={item.thumb} alt={item.alt} style={{ width: 64, height: 64 }} />;
    };

    return (
        <div className={cx('layout-detail-product')}>
            <div className={cx('contents')}>
                <div className={cx('nav-bar')}>
                    <SuggestProducts data={[1, 2, 3, 4, 5]} />
                    <NavBarNewsPage />
                </div>
                <div className={cx('detail')}>
                    <div className={cx('detail-wrapper')}>
                        <div className={cx('slider')}>
                            <Galleria
                                value={data}
                                item={itemTemplate}
                                draggable={false}
                                showThumbnailNavigators={false}
                                thumbnail={thumbnailTemplate}
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div className={cx('info')}>
                            <div className={cx('info-header')}>
                                <h5 className={cx('title')}>
                                    <span>TRANG CHỦ /</span> {'MÈO CẢNH'}
                                </h5>
                                <h3 className={cx('name-pro')}>Mèo Anh lông dài – British Longhair</h3>
                            </div>
                            <span className={cx('line')} />
                            <div className={cx('info-content')}>
                                <p className={cx('price')}>5,769,000 ₫</p>
                                <p className={cx('description')}>
                                    Mèo lông dài Anh (ALD) là phiên bản lông dài của giống mèo Anh lông ngắn có nguồn
                                    gốc từ Anh. Chúng có có bộ lông dài óng ánh cùng chiếc đuôi có lông khá xù và dài.
                                    Mèo ALD có nhiều điểm tương đồng với mèo Ba Tư. Những chú mèo ALD cũng rất đáng yêu
                                    và hiền lành phù hợp để nuôi làm cảnh
                                </p>
                            </div>
                            <div className={cx('info-actions')}>
                                <div className={cx('count')}>
                                    <p
                                        onClick={() => {
                                            setQuantity((prev) => {
                                                const quantity = prev - 1;
                                                if (quantity <= 0) {
                                                    return 1;
                                                } else {
                                                    return quantity;
                                                }
                                            });
                                        }}
                                        className={cx('p_1')}
                                    >
                                        -
                                    </p>
                                    <p className={cx('p_2')}>{quantity}</p>
                                    <p
                                        onClick={() => {
                                            setQuantity((prev) => prev + 1);
                                        }}
                                        className={cx('p_3')}
                                    >
                                        +
                                    </p>
                                </div>
                                <div className={cx('add-to-cart')}>
                                    <button>THÊM VÀO GIỎ</button>
                                </div>
                            </div>
                            <div className={cx('line-hint')}></div>
                            <p className={cx('note')}>Danh mục: Mèo cảnh</p>
                        </div>
                    </div>
                    <div className={cx('spacer-w')} />
                    <div className={cx('tab-view')}>
                        <TabView>
                            <TabPanel header="MÔ TẢ">
                                <p className={cx('description-tab-view')}>
                                    Mèo lông dài Anh (ALD) là phiên bản lông dài của giống mèo Anh lông ngắn có nguồn
                                    gốc từ Anh. Chúng có có bộ lông dài óng ánh cùng chiếc đuôi có lông khá xù và dài.
                                    Mèo ALD có nhiều điểm tương đồng với mèo Ba Tư. Những chú mèo ALD cũng rất đáng yêu
                                    và hiền lành phù hợp để nuôi làm cảnh
                                </p>
                                <p className={cx('description-tab-view')}>
                                    Mèo Anh Lông Dài có kích thước trung bình, bộ lông dài quý phái. Giống mèo này có
                                    rất nhiều loài nhưng được chấp nhận là lai với mèo Ba Tư. Sở hữu bộ lông dài óng
                                    ánh, thân hình chắc nịch, dài. Đầu to tròn và mắt sáng, tai ngắn. Tuy chân ngắn
                                    nhưng rất chắc khỏe, đuôi cong lông dài và dày. Khác với Mèo Anh Lông Ngắn, giống
                                    Mèo Anh Lông Dài có bộ ngực sâu nên nhiều người đánh giá chúng là giống mèo có kích
                                    thước trung bình. Đặc biệt, Mèo Anh Lông Dài có nhiều màu sắc khác với mèo Lông Ngắn
                                    như: màu trắng, kem, xanh, đỏ, nâu socola và nâu vàng.
                                </p>
                                <p className={cx('description-tab-view')}>
                                    Mèo Anh Lông Dài có tính tình khá hiền lành, ôn hòa. Chúng khá hiếu động và thích
                                    đùa giỡn, nhất là khi chúng còn nhỏ. Tuy nhiên, vì lông dài và dày nên việc chăm sóc
                                    và chải chuốt yêu cầu nhiều hơn so với Mèo Anh Lông Ngắn. Tuy nhiên, khi lớn chúng
                                    lại thích nằm lười. Với đặc điểm này khiến chúng trở nên dễ nuôi hơn, không cần
                                    thường xuyên cho đi dạo.
                                </p>
                            </TabPanel>
                            <TabPanel header="ĐÁNH GIÁ">
                                <div className={cx('header-rate')}>
                                    <h3 className={cx('tab-view-rate-heading')}>Đánh giá</h3>
                                    <p className={cx('sub-heading-rate')}>Chưa có đánh giá nào!</p>
                                </div>
                                <div className={cx('container-form-rate')}>
                                    <h2 className={cx('form-heading-rate')}>
                                        Hãy là người đầu tiên nhận xét “Mèo Anh lông dài – British Longhair”{' '}
                                    </h2>
                                    <form action="">
                                        <div style={{ paddingTop: '12px' }}>
                                            <p style={{ fontSize: '15px', marginBottom: '4px' }}>Đánh giá của bạn</p>
                                            <Rating cancel={false} />
                                        </div>
                                        <div style={{ paddingTop: '12px' }}>
                                            <p style={{ fontSize: '15px', marginBottom: '4px' }}>Nhận xét của bạn: </p>
                                            <textarea
                                                name="des"
                                                id="des"
                                                style={{
                                                    width: '100%',
                                                    height: 96,
                                                    border: '1px solid #d7d7d7',
                                                    outline: 'none',
                                                    padding: '8px 8px 8px 12px',
                                                    borderRadius: '4px',
                                                }}
                                            ></textarea>
                                        </div>
                                        <div className={cx('form-item')}>
                                            <label htmlFor="name">Tên của bạn: </label>
                                            <input id="name" type="text" placeholder="Your name..." />
                                        </div>
                                        <div className={cx('form-item')}>
                                            <label htmlFor="email">Email: </label>
                                            <input id="email" type="text" placeholder="Email..." />
                                        </div>
                                        <button className={cx('submit-rate')} type="submit">
                                            GỬI ĐI
                                        </button>
                                    </form>
                                </div>
                            </TabPanel>
                            <TabPanel header="CHÍNH SÁCH BẢO HÀNH">
                                <p className={cx('description-tab-view')}>Chính sách bảo hành của riêng mỗi hãng:</p>
                                <p className={cx('description-tab-view')}>
                                    CASIO: Bảo hành chính hãng máy 1 năm, pin 1,5 năm
                                </p>
                                <p className={cx('description-tab-view')}>
                                    CITIZEN: Bảo hành chính hãng toàn cầu máy 1 năm, pin 1 năm
                                </p>
                                <p className={cx('description-tab-view')}>
                                    SEIKO: Bảo hành chính hãng toàn cầu máy 1 năm, pin 1 năm
                                </p>
                                <p className={cx('description-tab-view')}>
                                    ORIENT: Bảo hành chính hãng toàn cầu máy 1 năm, pin 1 năm
                                </p>
                                <p className={cx('description-tab-view')}>
                                    OP: Bảo hành chính hãng máy 2 năm, pin 1 năm
                                </p>
                                <p className={cx('description-tab-view')}>
                                    RHYTHM: Bảo hành chính hãng máy 1 năm, pin 1 năm
                                </p>
                                <p className={cx('description-tab-view')}>
                                    OGIVAL: Bảo hành chính hãng máy 2 năm, pin 1 năm
                                </p>
                                <p className={cx('description-tab-view')}>
                                    ELLE: Bảo hành chính hãng máy 2 năm, pin 2 năm
                                </p>
                                <p className={cx('description-tab-view')}>
                                    TISSOT: Bảo hành chính hãng máy 2 năm, pin 1 năm
                                </p>
                            </TabPanel>
                        </TabView>
                    </div>
                    <div style={{ padding: '0 16px' }}>
                        <h6 className={cx('heading-menu-similar')}>SẢN PHẨM TƯƠNG TỰ</h6>
                        <Similar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LayoutDetailProduct;
