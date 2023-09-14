import styles from './ChatBox.module.scss';
import classNames from 'classnames/bind';
import { BiMinus, BiHappy } from 'react-icons/bi';
import { IoSend } from 'react-icons/io5';
import { BsFillImageFill, BsDot } from 'react-icons/bs';
import chatbox from '../../../../assets/images/chat-box.png';
import logo from '../../../../assets/images/logo-petshop.jpg';
import cat from '../../../../assets/images/meoww.jpg';
import { useEffect, useRef, useState, useMemo } from 'react';
import { io, Socket } from 'socket.io-client';
import { TypingAdmin } from '../TypingAdmin';

const cx = classNames.bind(styles);

type TMes = {
    role: string;
    message: string;
    id?: string;
    name: string;
};

function ChatBox() {
    // test chats
    const socketRef = useRef<Socket>();

    // //////////////////////////////////////////////////////////////////
    const [open, setOpen] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const mesRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [messages, setMessages] = useState<TMes[]>([
        {
            role: 'admin',
            name: 'Van Hoang',
            message: 'Xin chào! Tôi là Vader, trợ lý ảo được phát triển và thiết kế by Hoàng Trịnh!',
        },
    ]);

    const lastMessage = useMemo(() => {
        return messages[messages.length - 1];
    }, [messages]);

    // scroll to message when user submitted
    useEffect(() => {
        scrollToBottom();
    }, [messages, open]);

    useEffect(() => {
        const socket = io('http://localhost:3008', {
            timeout: 5000,
            autoConnect: true,
        });

        socketRef.current = socket;

        return () => {
            socketRef.current?.disconnect();
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (socketRef.current) {
            socketRef.current.on('connect', () => {
                console.log('id connected USER: ', socketRef.current?.id);

                socketRef.current?.once(`init_user_${socketRef.current.id}`, (data) => {
                    setMessages((prev) => [
                        ...prev,
                        {
                            message:
                                'Chúng tôi sẽ trả lời bạn sớm nhất có thể. Nếu chờ lâu bạn hãy liên hệ: 0396254427! Xin cảm ơn.',
                            name: 'Van Hoang',
                            role: 'admin',
                        },
                    ]);
                });

                if (socketRef.current?.id) {
                    socketRef.current?.on(`${socketRef.current?.id}`, (data) => {
                        setMessages((prev) => [
                            ...prev,
                            {
                                message: data.message,
                                name: data.name,
                                role: data.role,
                                id: data.id,
                            },
                        ]);
                    });

                    socketRef.current.on(`typing_admin_${socketRef.current.id}`, (data) => {
                        if (data.isType === socketRef.current?.id) {
                            setVisible(true);
                        } else {
                            setVisible(false);
                        }
                    });

                    socketRef.current.on(`clear_typing_admin_${socketRef.current.id}`, (data) => {
                        if (data.isType === socketRef.current?.id) {
                            setVisible(false);
                        }
                    });
                }
            });

            socketRef.current.on('disconnect', () => {
                console.log('id disconnected: ', socketRef.current?.id);
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [socketRef.current]);

    useEffect(() => {
        if (socketRef.current?.id) {
            if (value.trim().length > 0) {
                socketRef.current?.emit('typing_user', socketRef.current?.id);
            } else {
                socketRef.current?.emit('clear_typing_user', socketRef.current?.id);
            }
        }
    }, [value]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSubmit = () => {
        if (value.trim().length > 0) {
            socketRef.current?.emit('messageToAdmin', {
                id: socketRef.current?.id,
                name: 'Thuy cute',
                role: 'user',
                message: value,
            });
            setMessages((prev) => [
                ...prev,
                { message: value, role: 'user', name: 'Thuy cute', id: socketRef.current?.id },
            ]);
            setValue('');
            inputRef.current && inputRef.current.focus();
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

                {lastMessage.role === 'admin' && (
                    <div className={cx('notification-count')}>
                        <span>1</span>
                    </div>
                )}

                <div className={cx('preview-chat-box')}>
                    <div className={cx('container-preview')}>
                        <div className={cx('triangle-sharp')}></div>
                        <h3> Admin - Hoàng</h3>
                        {lastMessage.role === 'user' ? (
                            <p>Bạn: {lastMessage.message}</p>
                        ) : (
                            <div className={cx('wrapper-message-preview')}>
                                <span>
                                    <BsDot color="dodgerblue" size={'2.8rem'} style={{ margin: 0, padding: 0 }} />
                                </span>
                                <p>{lastMessage.message}</p>
                            </div>
                        )}
                    </div>
                </div>
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
                            if (message.role === 'admin') {
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
                        {visible && <TypingAdmin />}
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
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
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
