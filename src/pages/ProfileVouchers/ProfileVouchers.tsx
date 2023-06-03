import classNames from 'classnames/bind';
import styles from './ProfileVouchers.module.scss';
import { LayoutProfile } from '../../components/Layout/LayoutProfile';

const cx = classNames.bind(styles);

function ProfileVouchers() {
    return (
        <LayoutProfile>
            <div>ProfileVouchers Page</div>
        </LayoutProfile>
    );
}

export default ProfileVouchers;
