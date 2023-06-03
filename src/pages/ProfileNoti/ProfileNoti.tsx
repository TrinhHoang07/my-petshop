import classNames from 'classnames/bind';
import styles from './ProfileNoti.module.scss';
import { LayoutProfile } from '../../components/Layout/LayoutProfile';

const cx = classNames.bind(styles);

function ProfileNoti() {
    return (
        <LayoutProfile>
            <div>ProfileNoti Page</div>
        </LayoutProfile>
    );
}

export default ProfileNoti;
