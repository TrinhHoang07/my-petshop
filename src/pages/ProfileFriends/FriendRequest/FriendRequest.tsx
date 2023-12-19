import classNames from 'classnames/bind';
import styles from './FriendRequest.module.scss';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { toSeoURL } from '../../../Helper';
import { Button } from '../../../components/Button';
import img from '../../../assets/images/beyeu.jpg';

const cx = classNames.bind(styles);

type _T_Props = {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
};

function FriendRequest(props: _T_Props) {
    const handleCloseRequest = () => {
        props.setIsOpen(false);
    };

    return (
        <>
            <div
                style={{
                    visibility: props.isOpen ? 'visible' : 'hidden',
                }}
                onClick={handleCloseRequest}
                className={cx('friend-request-wrapper')}
            ></div>
            <div
                style={{
                    transform: props.isOpen ? 'scale(1)' : 'scale(0)',
                }}
                className={cx('friend-request')}
            >
                <div className={cx('header-request')}>
                    <div className={cx('header-empty')}></div>
                    <h3>Tất cả lời mời</h3>
                    <span onClick={handleCloseRequest} className={cx('icon-close')}>
                        <IoClose size={'2.5rem'} />
                    </span>
                </div>
                <div className={cx('request-contents')}>
                    <div className={cx('friend-item')}>
                        <Link to={`/profile/user/@${toSeoURL('Trinh Hoang')}`}>
                            <div className={cx('f-avatar')}>
                                <img src={img} alt={'hehhee'} />
                            </div>
                        </Link>
                        <div className={cx('f-info')}>
                            <Link to={`/profile/user/@${toSeoURL('Trinh Hoang')}`}>
                                <div>
                                    <h5>Trịnh Hoàng</h5>
                                    <p>5 bạn chung</p>
                                </div>
                            </Link>
                            <Button small="true">Xác nhận</Button>
                        </div>
                    </div>
                    <div className={cx('friend-item')}>
                        <Link to={`/profile/user/@${toSeoURL('Trinh Hoang')}`}>
                            <div className={cx('f-avatar')}>
                                <img src={img} alt={'hehhee'} />
                            </div>
                        </Link>
                        <div className={cx('f-info')}>
                            <Link to={`/profile/user/@${toSeoURL('Trinh Hoang')}`}>
                                <div>
                                    <h5>Trịnh Hoàng</h5>
                                    <p>5 bạn chung</p>
                                </div>
                            </Link>
                            <Button small="true">Xác nhận</Button>
                        </div>
                    </div>
                    <div className={cx('friend-item')}>
                        <Link to={`/profile/user/@${toSeoURL('Trinh Hoang')}`}>
                            <div className={cx('f-avatar')}>
                                <img src={img} alt={'hehhee'} />
                            </div>
                        </Link>
                        <div className={cx('f-info')}>
                            <Link to={`/profile/user/@${toSeoURL('Trinh Hoang')}`}>
                                <div>
                                    <h5>Trịnh Hoàng</h5>
                                    <p>5 bạn chung</p>
                                </div>
                            </Link>
                            <Button small="true">Xác nhận</Button>
                        </div>
                    </div>
                    <div className={cx('friend-item')}>
                        <Link to={`/profile/user/@${toSeoURL('Trinh Hoang')}`}>
                            <div className={cx('f-avatar')}>
                                <img src={img} alt={'hehhee'} />
                            </div>
                        </Link>
                        <div className={cx('f-info')}>
                            <Link to={`/profile/user/@${toSeoURL('Trinh Hoang')}`}>
                                <div>
                                    <h5>Trịnh Hoàng</h5>
                                    <p>5 bạn chung</p>
                                </div>
                            </Link>
                            <Button small="true">Xác nhận</Button>
                        </div>
                    </div>
                    <div className={cx('friend-item')}>
                        <Link to={`/profile/user/@${toSeoURL('Trinh Hoang')}`}>
                            <div className={cx('f-avatar')}>
                                <img src={img} alt={'hehhee'} />
                            </div>
                        </Link>
                        <div className={cx('f-info')}>
                            <Link to={`/profile/user/@${toSeoURL('Trinh Hoang')}`}>
                                <div>
                                    <h5>Trịnh Hoàng</h5>
                                    <p>5 bạn chung</p>
                                </div>
                            </Link>
                            <Button small="true">Xác nhận</Button>
                        </div>
                    </div>
                    <div className={cx('friend-item')}>
                        <Link to={`/profile/user/@${toSeoURL('Trinh Hoang')}`}>
                            <div className={cx('f-avatar')}>
                                <img src={img} alt={'hehhee'} />
                            </div>
                        </Link>
                        <div className={cx('f-info')}>
                            <Link to={`/profile/user/@${toSeoURL('Trinh Hoang')}`}>
                                <div>
                                    <h5>Trịnh Hoàng</h5>
                                    <p>5 bạn chung</p>
                                </div>
                            </Link>
                            <Button small="true">Xác nhận</Button>
                        </div>
                    </div>
                    <div className={cx('friend-item')}>
                        <Link to={`/profile/user/@${toSeoURL('Trinh Hoang')}`}>
                            <div className={cx('f-avatar')}>
                                <img src={img} alt={'hehhee'} />
                            </div>
                        </Link>
                        <div className={cx('f-info')}>
                            <Link to={`/profile/user/@${toSeoURL('Trinh Hoang')}`}>
                                <div>
                                    <h5>Trịnh Hoàng</h5>
                                    <p>5 bạn chung</p>
                                </div>
                            </Link>
                            <Button small="true">Xác nhận</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FriendRequest;
