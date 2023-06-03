import classNames from 'classnames/bind';
import styles from './ProfileBuys.module.scss';
import { LayoutProfile } from '../../components/Layout/LayoutProfile';

const cx = classNames.bind(styles);

function ProfileBuys() {
    return (
        <LayoutProfile>
            <div>ProfileBuys Page</div>
        </LayoutProfile>
    );
}

export default ProfileBuys;
