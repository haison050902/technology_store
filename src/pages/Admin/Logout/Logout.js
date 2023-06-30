import styles from './Logout.module.scss';
import classNames from 'classnames/bind';

function Logout() {
    const cx = classNames.bind(styles);
    return <h2 className={cx('title')}>Logout page</h2>;
}

export default Logout;
