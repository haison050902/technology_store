import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import { FaLaptop, FaHospitalUser, FaFileInvoiceDollar } from 'react-icons/fa';
import { AiFillSignal, AiOutlineUser } from 'react-icons/ai';
import { TbBuildingWarehouse, TbReport } from 'react-icons/tb';
import { CiLogout } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Sidebar() {
    const menuItem = [
        {
            path: '/dashboard',
            name: 'Dashboard',
            icon: <AiFillSignal />,
        },
        {
            path: '/employee',
            name: 'Employee',
            icon: <FaHospitalUser />,
        },
        {
            path: '/customer',
            name: 'Customer',
            icon: <AiOutlineUser />,
        },

        {
            path: '/product',
            name: 'Product',
            icon: <FaLaptop />,
        },
        {
            path: '/invoice',
            name: 'Invoice',
            icon: <FaFileInvoiceDollar />,
        },
        {
            path: '/warehouse',
            name: 'Warehouse',
            icon: <TbBuildingWarehouse />,
        },
        {
            path: '/report',
            name: 'Report',
            icon: <TbReport />,
        },
        {
            path: '/logout',
            name: 'Logout',
            icon: <CiLogout />,
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

export default Sidebar;
