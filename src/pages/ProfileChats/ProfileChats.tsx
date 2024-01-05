import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import img from '../../assets/images/beyeu.jpg';
import { LayoutProfile } from '../../components/Layout/LayoutProfile';
import { IoSend } from 'react-icons/io5';
import { MdOutlineSearch } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ApiService } from '../../axios/ApiService';
import { useSessionContext } from '../../context/SessionContext';
import { Loading } from '../../components/Loading';
import { useDebounce } from '../../hooks';
import { App } from '../../const/App';

const cx = classNames.bind(styles);

function Profile() {
    const params = useParams();
    const navigate = useNavigate();
    const apiService = new ApiService();
    const [values] = useSessionContext();
    const [inputValue, setInputValue] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [conversations, setConversations] = useState<any[]>([]);
    const [infoUser, setInfoUser] = useState<any>({});
    const paramSubmit = useDebounce(params.id ?? '', App.DELAY_SEARCH);
    const [testData, setTestData] = useState<any[]>([]);

    useEffect(() => {
        apiService.chats
            .getCustomerConversationByCreatedId((values.user?.id as number).toString(), values.user?.token ?? '')
            .then((res: any) => {
                if (res.message === 'success') {
                    apiService.chats
                        .getJoinedConversationsById((values.user?.id as number).toString(), values.user?.token ?? '')
                        .then((response: any) => {
                            if (response.message === 'success') {
                                setConversations([...response.data, ...res.data]);
                                setIsLoading(false);
                            }
                        })
                        .catch((err) => console.error(err));
                }
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (paramSubmit.trim().length > 0) {
            // handle get message from id conversation

            apiService.chats
                .getMessagesByConversationId(paramSubmit.trim(), values.user?.token ?? '')
                .then((res: any) => {
                    if (res.message === 'success') {
                        console.log('res: ' + res);
                        res.data.forEach((item: any) => console.log(item));

                        setTestData(res.data);
                    }
                })
                .catch((err) => console.error(err));
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paramSubmit]);

    const handleSubmit = () => {
        if (inputValue.trim().length > 0) {
            console.log('id conversation: ' + params.id);

            setTestData((prev: any[]) => {
                return [
                    ...prev,
                    {
                        id: Math.floor(Math.random() * 10000),
                        isMe: true,
                        message: inputValue,
                        img: 'http://localhost:3009/images/uploads/ht.jpg',
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
                            {conversations.length > 0 ? (
                                conversations.map((item: any) => (
                                    <div
                                        key={item.conver_id}
                                        className={cx('item-chat')}
                                        onClick={() => {
                                            navigate(`/profile/chats/${item.conver_id}`);
                                            setInfoUser({
                                                id: item.cus_id,
                                                name: item.cus_name,
                                                avatar: item.cus_avatar_path,
                                            });
                                        }}
                                    >
                                        <div className={cx('item-avatar')}>
                                            <img src={item.cus_avatar_path ?? img} alt={`avatar_${item.cus_name}`} />
                                        </div>
                                        <div className={cx('item-info')}>
                                            <h6>{item.cus_name}</h6>
                                            <p className={cx('last-message')}>Bạn: hehe hehehe</p>
                                        </div>
                                    </div>
                                ))
                            ) : isLoading ? (
                                <Loading />
                            ) : (
                                <p style={{ fontSize: 12, textAlign: 'center' }}>Bạn chưa có cuộc trò chuyện nào!</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className={cx('chats-messages')}>
                    {!!infoUser.name && (
                        <>
                            <div className={cx('head-chat')}>
                                <div className={cx('image-user')}>
                                    <img src={infoUser.avatar} alt="name user" />
                                </div>
                                <h5>{infoUser.name}</h5>
                            </div>
                            <div className={cx('contents-message')}>
                                {testData.map((item) => (
                                    <div
                                        key={item.message_id}
                                        className={cx('message-item', {
                                            me_message: item.message_sender_id === values.user?.id,
                                        })}
                                    >
                                        <div className={cx('message-item-avatar')}>
                                            <img src={item.cus_avatar_path} alt="avaatar user" />
                                        </div>
                                        <p
                                            className={cx('content-message-item', {
                                                content_me_message: item.message_sender_id === values.user?.id,
                                            })}
                                        >
                                            {item.message_content}
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
