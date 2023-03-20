import styles from './ChatBox.module.scss';
import classNames from 'classnames/bind';
import { BiMinus, BiHappy } from 'react-icons/bi';
import { IoSend } from 'react-icons/io5';
import { BsFillImageFill } from 'react-icons/bs';

import chatbox from '../../../../assets/images/chat-box.png';
import logo from '../../../../assets/images/logo-petshop.jpg';

const cx = classNames.bind(styles);

function ChatBox() {
    return (
        <div className={cx('chat-box')}>
            <div className={cx('container')}>
                <img src={chatbox} alt="chat box" />
            </div>
            <div className={cx('content')}>
                <div className={cx('header-chat')}>
                    <div className={cx('info-header')}>
                        <div className={cx('wrap-img')}>
                            <img src={logo} alt="logo shop" />
                        </div>
                        <h3 className={cx('heading')}>Chat với Hoàng</h3>
                    </div>
                    <div className={cx('close-btn')}>
                        <BiMinus color="#ffffff" size={'2.5rem'} />
                    </div>
                </div>
                <div className={cx('messages')}>
                    <div className={cx('message')}>
                        <div className={cx('avatar')}>
                            <img src={logo} alt="shop-admin" />
                        </div>
                        <p className={cx('content-message')}>Hello you! I'm Vader!</p>
                    </div>
                    <div className={cx('message-2')}>
                        <div className={cx('avatar-2')}>
                            <img src={logo} alt="shop-admin" />
                        </div>
                        <p className={cx('content-message-2')}>Hello you! I'm Parent of Vader!</p>
                    </div>
                </div>
                <div className={cx('footer-chat')}>
                    <div className={cx('footer-content')}>
                        <div className={cx('input-footer')}>
                            <span className={cx('icons')}>
                                <BsFillImageFill />
                            </span>
                            <span className={cx('icons', 'mr-6')}>
                                <BiHappy />
                            </span>
                            <input type="text" placeholder="Aa..." />
                        </div>
                        <div className={cx('btn-submit')}>
                            <IoSend />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatBox;
