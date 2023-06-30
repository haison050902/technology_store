import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import styles from './AdminLayout.module.scss';
import Sidebar from '../components/Sidebar/Sidebar';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className={cx('container')}>
                <Header />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default AdminLayout;
