import classNames from 'classnames/bind';
import styles from './ProfileChangePassword.module.scss';
import { LayoutProfile } from '../../components/Layout/LayoutProfile';

const cx = classNames.bind(styles);

function ProfileChangePassword() {
    return (
        <LayoutProfile>
            <div>ProfileChangePassword Page</div>
        </LayoutProfile>
    );
}

export default ProfileChangePassword;
