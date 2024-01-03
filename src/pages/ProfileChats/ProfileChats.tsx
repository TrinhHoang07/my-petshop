import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import img from '../../assets/images/beyeu.jpg';
import { LayoutProfile } from '../../components/Layout/LayoutProfile';
import { IoSend } from 'react-icons/io5';
import { MdOutlineSearch } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function Profile() {
    const params = useParams();
    const [isChat, setIsChat] = useState<boolean>(false);
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState<string>('');
    const [testData, setTestData] = useState<any[]>([
        {
            id: 1,
            isMe: false,
            message: 'Hello anh em sky!',
            img: 'http://localhost:3009/images/uploads/avt_git.jpg',
        },
        {
            id: 2,
            isMe: false,
            message: 'My name is Hoang',
            img: 'http://localhost:3009/images/uploads/avt_git.jpg',
        },
        {
            id: 3,
            isMe: true,
            message: 'Hello, Greate to meet you!',
            img: 'http://localhost:3009/images/uploads/ht.jpg',
        },
        {
            id: 4,
            isMe: true,
            message: 'My name is Thuy cute',
            img: 'http://localhost:3009/images/uploads/ht.jpg',
        },
    ]);

    useEffect(() => {
        if (params && params.id) {
            setIsChat(true);
        } else {
            setIsChat(false);
        }
    }, [params]);

    const handleSubmit = () => {
        if (inputValue.trim().length > 0) {
            setTestData((prev: any[]) => {
                return [
                    ...prev,
                    {
                        id: Math.floor(Math.random() * 10000),
                        isMe: true,
                        message: inputValue,
                    },
                ];
            });
            setInputValue('');
        }
    };

    const handleSubmitMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <LayoutProfile>
            <div className={cx('profile-chats')}>
                <div className={cx('bar-chats')}>
                    <div className={cx('container-bar')}>
                        <h5>Đoạn chat</h5>
                        <div className={cx('search-user')}>
                            <MdOutlineSearch size={'2rem'} />
                            <input type="text" placeholder="Tìm kiếm trong đoạn chat" />
                        </div>
                        <div className={cx('list-user')}>
                            <div className={cx('item-chat')} onClick={() => navigate('/profile/chats/1')}>
                                <div className={cx('item-avatar')}>
                                    <img src={img} alt="item-avatar" />
                                </div>
                                <div className={cx('item-info')}>
                                    <h6>Van Hoang</h6>
                                    <p className={cx('last-message')}>Bạn: hehe hehehe</p>
                                </div>
                            </div>
                            <div className={cx('item-chat')} onClick={() => navigate('/profile/chats/2')}>
                                <div className={cx('item-avatar')}>
                                    <img src={img} alt="item-avatar" />
                                </div>
                                <div className={cx('item-info')}>
                                    <h6>Van Hoang</h6>
                                    <p className={cx('last-message')}>Bạn: hehe hehehe</p>
                                </div>
                            </div>
                            <div className={cx('item-chat')} onClick={() => navigate('/profile/chats/3')}>
                                <div className={cx('item-avatar')}>
                                    <img src={img} alt="item-avatar" />
                                </div>
                                <div className={cx('item-info')}>
                                    <h6>Van Hoang</h6>
                                    <p className={cx('last-message')}>Bạn: hehe hehehe</p>
                                </div>
                            </div>
                            <div className={cx('item-chat')} onClick={() => navigate('/profile/chats/4')}>
                                <div className={cx('item-avatar')}>
                                    <img src={img} alt="item-avatar" />
                                </div>
                                <div className={cx('item-info')}>
                                    <h6>Van Hoang</h6>
                                    <p className={cx('last-message')}>Bạn: hehe hehehe</p>
                                </div>
                            </div>
                            <div className={cx('item-chat')} onClick={() => navigate('/profile/chats/5')}>
                                <div className={cx('item-avatar')}>
                                    <img src={img} alt="item-avatar" />
                                </div>
                                <div className={cx('item-info')}>
                                    <h6>Van Hoang</h6>
                                    <p className={cx('last-message')}>Bạn: hehe hehehe</p>
                                </div>
                            </div>
                            <div className={cx('item-chat')}>
                                <div className={cx('item-avatar')}>
                                    <img src={img} alt="item-avatar" />
                                </div>
                                <div className={cx('item-info')}>
                                    <h6>Van Hoang</h6>
                                    <p className={cx('last-message')}>Bạn: hehe hehehe</p>
                                </div>
                            </div>
                            <div className={cx('item-chat')}>
                                <div className={cx('item-avatar')}>
                                    <img src={img} alt="item-avatar" />
                                </div>
                                <div className={cx('item-info')}>
                                    <h6>Van Hoang</h6>
                                    <p className={cx('last-message')}>Bạn: hehe hehehe</p>
                                </div>
                            </div>
                            <div className={cx('item-chat')}>
                                <div className={cx('item-avatar')}>
                                    <img src={img} alt="item-avatar" />
                                </div>
                                <div className={cx('item-info')}>
                                    <h6>Van Hoang</h6>
                                    <p className={cx('last-message')}>Bạn: hehe hehehe</p>
                                </div>
                            </div>
                            <div className={cx('item-chat')}>
                                <div className={cx('item-avatar')}>
                                    <img src={img} alt="item-avatar" />
                                </div>
                                <div className={cx('item-info')}>
                                    <h6>Van Hoang</h6>
                                    <p className={cx('last-message')}>Bạn: hehe hehehe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('chats-messages')}>
                    {isChat && (
                        <>
                            <div className={cx('head-chat')}>
                                <div className={cx('image-user')}>
                                    <img src={img} alt="name user" />
                                </div>
                                <h5>Văn Hoàng</h5>
                            </div>
                            <div className={cx('contents-message')}>
                                {testData.map((item) => (
                                    <div
                                        key={item.id}
                                        className={cx('message-item', {
                                            me_message: item.isMe,
                                        })}
                                    >
                                        <div className={cx('message-item-avatar')}>
                                            <img src={item.img} alt="avaatar user" />
                                        </div>
                                        <p
                                            className={cx('content-message-item', {
                                                content_me_message: item.isMe,
                                            })}
                                        >
                                            {item.message}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className={cx('foot-chat')}>
                                <div className={cx('input')}>
                                    <input
                                        value={inputValue}
                                        onKeyUp={handleSubmitMessage}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        type="text"
                                        placeholder="Aa..."
                                    />
                                </div>
                                <div onClick={handleSubmit} className={cx('btn-submit')}>
                                    <IoSend />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </LayoutProfile>
    );
}

export default Profile;
