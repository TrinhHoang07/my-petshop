import styles from './ChatBox.module.scss';
import classNames from 'classnames/bind';
import { BiMinus, BiHappy } from 'react-icons/bi';
import { IoSend } from 'react-icons/io5';
import { BsFillImageFill } from 'react-icons/bs';

import chatbox from '../../../../assets/images/chat-box.png';
import logo from '../../../../assets/images/logo-petshop.jpg';
import cat from '../../../../assets/images/meoww.jpg';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

type TMes = {
    user: string;
    message: string;
};

function ChatBox() {
    const [open, setOpen] = useState<boolean>(false);
    const init = useRef<boolean>(true);
    const [value, setValue] = useState<string>('');
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const mesRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const prevMessage = useRef<string>();
    const [messages, setMessages] = useState<TMes[]>([
        // {
        //     user: 'bot',
        //     message: 'Xin chào! Tôi là Vader, trợ lý ảo được phát triển và thiết kế by Hoàng Trịnh!',
        // },
        // {
        //     user: 'bot',
        //     message: 'Bạn đang cần giúp đỡ?',
        // },
        // {
        //     user: 'user',
        //     message: "Hello you! I'm Parent of Vader!",
        // },
        // {
        //     user: 'bot',
        //     message: 'Bạn là bố của tôi sao????? Địt con mẹ bạn luôn đấy!',
        // },
        // {
        //     user: 'bot',
        //     message: 'Đừng để tao phải nóng ok!',
        // },
        // {
        //     user: 'user',
        //     message: 'Bot deo gì mà láo vậy!',
        // },
        // {
        //     user: 'bot',
        //     message: 'Cút mẹ mày đi!',
        // },
        // {
        //     user: 'user',
        //     message: 'Mày biết bố mày là ai không?',
        // },
        // {
        //     user: 'bot',
        //     message: 'Tao biết, mày là cái thằng dẻ dách!',
        // },
        // {
        //     user: 'user',
        //     message: 'Cho bố mày cái địa chỉ.',
        // },
        // {
        //     user: 'bot',
        //     message: 'Đợi tao xỉa răng xong tao nói cho!',
        // },
    ]);

    // scroll to message when user submitted
    useEffect(() => {
        init.current &&
            setMessages((prev) => [
                ...prev,
                {
                    user: 'bot',
                    message: 'Xin chào! Tôi là Vader, trợ lý ảo được phát triển và thiết kế by Hoàng Trịnh!',
                },
            ]);
        if (prevMessage.current?.includes('hello')) {
            setMessages((prev) => [...prev, { user: 'bot', message: 'Bạn cần tôi giúp đỡ gì không?' }]);
        } else if (
            [
                'tôi cần giúp đỡ',
                'có',
                'giúp đỡ',
                'cần',
                'giúp',
                'tôi cần',
                'có điều',
                'muốn hỏi',
                'tôi có',
                'bạn cho tôi',
                'hỏi',
                'cho tôi hỏi',
            ].some((item) => prevMessage.current?.includes(item))
        ) {
            setMessages((prev) => [
                ...prev,
                { user: 'bot', message: 'Tôi luôn sẵn lòng giúp đỡ, bạn cần tôi giúp gì?' },
            ]);
        } else if (
            [
                'tôi muốn',
                'mua',
                'chó',
                'mèo',
                'thức ăn',
                'tham khảo',
                'giá',
                'loại',
                'bán',
                'thế nào',
                'cụ thể',
                'giống này',
                'shop',
            ].some((item) => prevMessage.current?.includes(item))
        ) {
            setMessages((prev) => [
                ...prev,
                {
                    user: 'bot',
                    message: 'Bạn tham khảo giá như shop đã đăng nhé, đó là giá niêm yết rồi ý!',
                },
            ]);
        } else if (prevMessage.current) {
            setMessages((prev) => [
                ...prev,
                { user: 'bot', message: 'Chúng tôi sẽ phản hồi bạn trong thời gian ngắn nhất có thể!' },
            ]);
            setMessages((prev) => [
                ...prev,
                {
                    user: 'bot',
                    message: 'Đây là tin nhắn tự động của bot chat, được phát triển và thiết kế bởi Hoàng Trịnh!',
                },
            ]);
        }

        init.current = false;

        setTimeout(() => {
            scrollToBottom();
        }, 100);
    }, [isSubmit]);

    // scroll to message latest
    useEffect(() => {
        scrollToBottom();
    }, [open]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSubmit = () => {
        if (value.trim().length > 0) {
            prevMessage.current = value;
            setMessages((prev) => [...prev, { user: 'user', message: value }]);
            setValue('');
            inputRef.current && inputRef.current.focus();
            setIsSubmit((prev) => !prev);
        }
    };

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className={cx('chat-box')}>
            <div
                onClick={() => {
                    setOpen(true);
                    scrollToBottom();
                }}
                className={cx('container')}
            >
                <img src={chatbox} alt="chat box" />
            </div>
            {open && (
                <div className={cx('content')}>
                    <div className={cx('header-chat')}>
                        <div className={cx('info-header')}>
                            <div className={cx('wrap-img')}>
                                <img src={logo} alt="logo shop" />
                            </div>
                            <h3 className={cx('heading')}>Chat với Hoàng</h3>
                        </div>
                        <div onClick={() => setOpen(false)} className={cx('close-btn')}>
                            <BiMinus color="#ffffff" size={'2.5rem'} />
                        </div>
                    </div>
                    <div ref={mesRef} className={cx('messages')}>
                        {messages.map((message, index) => {
                            if (message.user === 'bot') {
                                return (
                                    <div key={index} className={cx('message', 'getview')}>
                                        <div className={cx('avatar')}>
                                            <img src={logo} alt="shop-admin" />
                                        </div>
                                        <p className={cx('content-message')}>{message.message}</p>
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={index} className={cx('message-2', 'getview')}>
                                        <div className={cx('avatar-2')}>
                                            <img src={cat} alt="shop-admin" />
                                        </div>
                                        <p className={cx('content-message-2')}>{message.message}</p>
                                    </div>
                                );
                            }
                        })}
                        <div ref={messagesEndRef} />
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
                                <input
                                    onKeyUp={handleEnter}
                                    ref={inputRef}
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    type="text"
                                    placeholder="Aa..."
                                />
                            </div>
                            <div onClick={handleSubmit} className={cx('btn-submit')}>
                                <IoSend />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChatBox;
