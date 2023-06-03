import classNames from 'classnames/bind';
import styles from './ProfileAddress.module.scss';
import { LayoutProfile } from '../../components/Layout/LayoutProfile';

const cx = classNames.bind(styles);

function ProfileAddress() {
    return (
        <LayoutProfile>
            <div>ProfileAddress Page</div>
        </LayoutProfile>
    );
}

export default ProfileAddress;
