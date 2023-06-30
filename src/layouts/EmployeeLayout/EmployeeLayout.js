import classNames from 'classnames/bind';
import HeaderEmployee from '~/layouts/components/HeaderEmployee';
import styles from './EmployeeLatout.module.scss';
import SidebarEmployee from '../components/SidebarEmployee/SidebarEmployee';

const cx = classNames.bind(styles);

function EmployeeLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <SidebarEmployee />
            <div className={cx('container')}>
                <HeaderEmployee />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default EmployeeLayout;
