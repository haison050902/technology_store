import classNames from 'classnames/bind';
import styles from './SidebarEmployee.module.scss';
import config from '~/config';
import { FaLaptop, FaHospitalUser, FaFileInvoiceDollar } from 'react-icons/fa';
import { AiFillSignal, AiOutlineUser } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function SidebarEmployee() {
    const menuItem = [
        {
            path: '/order',
            name: 'Place Order',
            icon: <AiFillSignal />,
        },
        {
            path: '/customercare',
            name: 'Customer Care',
            icon: <FaHospitalUser />,
        },
        {
            path: '/orderlist',
            name: 'Order list',
            icon: <AiOutlineUser />,
        },
    ];
    return (
        <aside className={cx('wrapper')}>
            <h1 className={cx('logo')}>LIMO</h1>
            <div className={cx('menuItem')}>
                {menuItem.map((item, index) => (
                    <NavLink key={index} to={item.path}>
                        <div className={cx('content')}>
                            <div className={cx('icon')}>{item.icon}</div>
                            <div className={cx('link_text')}>{item.name}</div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </aside>
    );
}

export default SidebarEmployee;
