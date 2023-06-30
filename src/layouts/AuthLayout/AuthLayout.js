import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import styles from './AuthLayout.module.scss';
import Footer from '../Footer/Footer';

const cx = classNames.bind(styles);

function AuthLayout({ children }) {
    return (
        <div style={{ overflow: 'hidden', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className={cx('wrapper')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default AuthLayout;
