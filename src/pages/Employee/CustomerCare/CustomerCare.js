import styles from './CustomerCare.module.scss';
import classNames from 'classnames';

function CustomerCare() {
    const cx = classNames.bind(styles);
    return <h2 className={cx('title')}>CustomerCare hello page</h2>;
}

export default CustomerCare;
