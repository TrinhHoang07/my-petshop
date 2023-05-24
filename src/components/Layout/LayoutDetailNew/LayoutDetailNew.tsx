import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './LayoutDetailNew.module.scss';
import img from '../../../assets/images/banner_detail_new.jpg';
import Search from '../../../pages/News/Search';
import { NavBarNewsPage } from '../components/NavBarNewsPage';
import { FaFacebookF, FaGooglePlusG, FaLinkedin, FaPinterestP, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function LayoutDetailNew() {
    useEffect(() => {
        document.title = 'Trang chủ | Petshop chất lượng số 1 Việt Nam!';
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
    }, []);

    return (
        <div className={cx('layout-detail-new')}>
            <div
                className={cx('bg-new')}
                style={{
                    height: '350px',
                    backgroundImage: `url(${img})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    position: 'relative',
                }}
            >
                <div className={cx('bg-info')}>
                    <h3 className={cx('title')}>TIN TỨC</h3>
                    <h1 className={cx('heading')}>
                        In rutrum tempus purus, ut euismod dui facilisis ac. Fusce semper dignissim diam a egestas.
                    </h1>
                    <div className={cx('line')}></div>
                </div>
            </div>
            <div className={cx('contents')}>
                <div className={cx('wrapper')}>
                    <div className={cx('bar')}>
                        <Search />
                        <NavBarNewsPage />
                    </div>
                    <div className={cx('new-detail')}>
                        <div className={cx('wrapper-detail')}>
                            <div className={cx('descriptions')}>
                                <div className={cx('description-detail')}>
                                    <h3 className={cx('title-description')}>
                                        1. Kinh nghiệm nuôi chó con: Chọn chó con khỏe mạnh để nuôi
                                    </h3>
                                    <p>
                                        Mọi người khi đi mua chó cần lưu ý, chỉ nên mua chó con từ 2 đến 2,5 tháng tuổi
                                        trở nên, như vậy mới đảm bảo về thể lực tối thiểu khi ta chăm sóc. Tốt nhất mua
                                        chó của chủ nuôi có chó mẹ ở nhà đẻ, hoặc trực tiếp nhập về có nguồn gốc, lý
                                        lịch rõ ràng. Đó là những chú chó nhanh nhẹn, khoẻ mạnh, có “sổ sức khoẻ” đi kèm
                                        dán tem các loại vaccin phòng dịch, ngày tẩy giun sán.
                                    </p>
                                    {/* imgage (nếu có) */}
                                </div>
                                <div className={cx('description-detail')}>
                                    <h3 className={cx('title-description')}>
                                        2. Kinh nghiệm nuôi chó con: Chuẩn bị chỗ ở kĩ lưỡng cho chó con
                                    </h3>
                                    <p>
                                        Chỗ ở của chó con cần hoáng mát, ấm, có đủ ánh sáng nhất là có thể tắm nắng buổi
                                        sáng từ 9-11h. Chỗ ở của chó con phải có chỗ ngủ, vệ sinh cố định. Cất dọn những
                                        thứ chó con có thể gặm nhai, nuốt: đồ nhựa,sắt thủy tinh… đặc biệt tránh xa dây
                                        điện và các đồ dùng điện, bếp lửa ga, vật dụng cháy nổ, hóa chất và cây cỏ độc.
                                        Tránh để chó con ở vị trí cao: cửa sổ, ban công, cầu thang dễ rơi ngã.
                                    </p>
                                    <p>
                                        Nếu nhà bạn đã có con vật khác: chó, mèo… Cẩn thận cho tiếp xúc, làm quen từ từ
                                        kẻo “ma cũ bắt nạt ma mới”, làm chó của bạn hoảng sợ hoặc bị tấn công, tai nạn
                                        và các stress tâm lý khác.
                                    </p>
                                    <p>
                                        Không nên cho cún nằm điều hoà và nằm trước quạt vì như vậy cún rất dễ có khả
                                        năng bị nhiễm lạnh…
                                    </p>
                                    {/* imgage (nếu có) */}
                                </div>
                                <div className={cx('description-detail')}>
                                    <h3 className={cx('title-description')}>
                                        3. Kinh nghiệm nuôi chó con: Tắm cho chó con thế nào mới đúng?
                                    </h3>
                                    <p>
                                        Khi vừa mua cún về bạn không nên tắm cho cún bằng nước ngay, nếu thấy cún hôi có
                                        thể dung phấn tắm khô tắm. Vì nếu tắm ngay, cún rất dễ có khả năng bị viêm phổi
                                        và kế phát sang các bệnh truyền nhiễm nguy hiểm.
                                    </p>
                                    <p>
                                        Những đêm đầu tiên xa mẹ, xa chủ cũ chó có thể kêu sủa. Bạn hãy âu yếm vuốt ve
                                        để chó yên giấc và cảm nhận được tình thương nhé!
                                    </p>
                                    <p>
                                        Sau khi đã quen, bạn có thể tắm cho cún. Có thể tắm cho chó bằng nước ấm, nên
                                        dùng xà-phòng của chó phòng ngừa ve rận có bán ở các siêu thị. Sấy, lau khô ngay
                                        sau khi tắm. Không để nước vào tai chó. Nên dùng bông khô ngoáy sạch tai sau tắm
                                        tránh bệnh thối tai. (Viêm tai giữa rất khó chữa).
                                    </p>
                                    <p>
                                        Khi nào bạn không nên tắm cho cún? <br /> – Khi thời tiết quá lạnh, miền Bắc vào
                                        mùa đông những ngày lạnh giá, nhiệt độ xuống dưới 18 độ C. <br /> – Chó non đang
                                        bú hoặc mới tách xa mẹ. <br /> – Chó ốm hoặc có dấu hiệu bị ốm. <br /> – Chó mới
                                        mua về nuôi.
                                    </p>
                                    {/* imgage (nếu có) */}
                                </div>
                                <div className={cx('description-detail')}>
                                    <h3 className={cx('title-description')}>
                                        4. Kinh nghiệm nuôi chó con: Chế độ ăn cho chó con
                                    </h3>
                                    <p>
                                        Chó con từ 2 tháng tuổi đến 6 tháng tuổi cho ăn 3 bữa một ngày, thời gian chia
                                        đều trong ngày cho hợp lý. Các bữa ăn cần có một khoảng thời gian nhất định để
                                        cho chó tiêu hóa hết thức ăn (Không nhất thiết người ăn lúc nào thì cho chó ăn
                                        lúc đó, sẽ không hợp lý về thời gian).
                                    </p>
                                    <p>
                                        Khẩu phần ăn uống phải đầy đủ chất dinh dưỡng, năng lượng: Protein,béo, tinh
                                        bột, khoáng chất và vitamin từ các thức ăn tự nhiên. Không nên lạm dụng thuốc,
                                        hoặc thức ăn tổng hợp. Rất lưu ý không cho ăn quá nhiều sữa, cá tanh, mỡ. Cụ thể
                                        thức ăn cho chó bao gồm: bột gạo, bột ngô, thịt băm nhỏ hoặc các lục phủ ngũ
                                        tạng của gia súc (trâu, bò, ngựa, hạn chế thịt lợn vì khó tiêu). Thức ăn đều
                                        phải nấu chín và loãng như cháo đừng cho ăn khô sẽ không tốt. Định lựơng bao
                                        nhiêu là tùy vào giống chó to hay nhỏ mà ước lượng vì không có cụ thể .
                                    </p>
                                    <p>
                                        Cho chó con ăn khoảng 3-4 bữa ngày, chỉ cho ăn gần no thì dừng. Không bao giờ
                                        cho chó ăn quá no. Có thể một tuần cho chó ăn một bữa ăn no hơn bình thường và
                                        ăn thêm một quả trứng gà nhưng phải nấu chín sau đó cho ăn tái dần cho đến khi
                                        có thể ăn sống không sao cả. Không để sẵn đồ ăn chó lúc nào thích ăn thì ăn.
                                    </p>
                                    <p>
                                        Nước uống sạch, luôn đầy đủ. Dụng cụ cho ăn: bát, đĩa… phải luôn rửa sạch sẽ,
                                        khô ráo và phải đảm bảo xối nước sạch hết độ kiềm sút (bazơ) của xà-phòng.
                                    </p>
                                    <p>
                                        Sau bữa ăn nên cho chó chạy tự do và vệ sinh 5 , 10 phút và cũng để tiêu hóa
                                        thức ăn . Bữa chiều tối ăn nhiều hơn một chút và chủ chó dành thời gian thả chó
                                        nhiều hơn
                                    </p>
                                    {/* imgage (nếu có) */}
                                </div>
                            </div>
                            <div className={cx('social')}>
                                <Link to="/" style={{ backgroundColor: '#0e8ef1' }} className={cx('social-item')}>
                                    <FaFacebookF size={'1.6rem'} />
                                    <span>Facebook</span>
                                </Link>
                                <Link style={{ backgroundColor: '#65ccef' }} to="/" className={cx('social-item')}>
                                    <FaTwitter size={'1.6rem'} />
                                    <span>Twitter</span>
                                </Link>
                                <Link style={{ backgroundColor: '#fbbc05' }} to="/" className={cx('social-item')}>
                                    <FaGooglePlusG size={'1.6rem'} />
                                    <span>Google+</span>
                                </Link>
                                <Link style={{ backgroundColor: '#e60023' }} to="/" className={cx('social-item')}>
                                    <FaPinterestP size={'1.6rem'} />
                                    <span>Pinterest</span>
                                </Link>
                                <Link style={{ backgroundColor: '#0a66c2' }} to="/" className={cx('social-item')}>
                                    <FaLinkedin size={'1.6rem'} />
                                    <span>LinkedIn</span>
                                </Link>
                            </div>
                            <div className={cx('comments')}>
                                <div className={cx('header-rate')}>
                                    <h3 className={cx('tab-view-rate-heading')}>Bình luận</h3>
                                    <p className={cx('sub-heading-rate')}>Chưa có bình luận nào!</p>
                                </div>
                                <div className={cx('container-form-rate')}>
                                    <h2 className={cx('form-heading-rate')}>
                                        Hãy để lại bình luận của bạn về bài viết này nhé!
                                    </h2>
                                    <form action="">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LayoutDetailNew;
