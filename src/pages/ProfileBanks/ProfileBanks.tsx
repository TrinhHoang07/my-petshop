import classNames from 'classnames/bind';
import styles from './ProfileBanks.module.scss';
import { LayoutProfile } from '../../components/Layout/LayoutProfile';

const cx = classNames.bind(styles);

function ProfileBanks() {
    return (
        <LayoutProfile>
            <div>ProfileBanks Page</div>
        </LayoutProfile>
    );
}

export default ProfileBanks;
