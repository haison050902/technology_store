import styles from './Report.module.scss';
import classNames from 'classnames/bind';

function Report() {
    const cx = classNames.bind(styles);
    return <h2 className={cx('title')}>Report page</h2>;
}

export default Report;
