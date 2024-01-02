import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import img from '../../assets/images/beyeu.jpg';
import { LayoutProfile } from '../../components/Layout/LayoutProfile';
import { IoSend } from 'react-icons/io5';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <LayoutProfile>
            <div className={cx('profile-chats')}>
                <div className={cx('bar-chats')}>
                    <div className={cx('item-chat')}></div>
                </div>
                <div className={cx('chats-messages')}>
                    <div className={cx('head-chat')}>
                        <div className={cx('image-user')}>
                            <img src={img} alt="name user" />
                        </div>
                        <h5>Văn Hoàng</h5>
                    </div>
                    <div className={cx('contents-message')}>
                        <h1>Content</h1>
                        <h1>Content</h1>
                        <h1>Content</h1>
                        <h1>Content</h1>
                        <h1>Content</h1>
                        <h1>Content</h1>
                        <h1>Content</h1>
                        <h1>Content</h1>
                        <h1>Content</h1>
                        <h1>Content</h1>
                        <h1>Content</h1>
                        <h1>Content</h1>
                        <h1>Content</h1>
                        <h1>Content</h1>
                        <h1>Content</h1>
                    </div>
                    <div className={cx('foot-chat')}>
                        <div className={cx('input')}>
                            <input type="text" placeholder="Aa..." />
                        </div>
                        <div onClick={() => {}} className={cx('btn-submit')}>
                            <IoSend />
                        </div>
                    </div>
                </div>
            </div>
        </LayoutProfile>
    );
}

export default Profile;
