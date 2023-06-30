import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config';
import styles from './Header.module.scss';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineSetting } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiUserCircle } from 'react-icons/bi';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('content')}>
            <div className={cx('topleft')}>
                <div className={cx('iconMenu')}>
                    <Link className={cx((NavLink) => (NavLink.isActive ? 'active' : ''))}>
                        <AiOutlineMenu />
                    </Link>
                </div>
                <div className={cx('iconSearch')}>
                    <AiOutlineSearch />
                </div>
            </div>
            <div className={cx('topright')}>
                <div className={cx('iconNoti')}>
                    <IoMdNotificationsOutline />
                </div>
                <div className={cx('iconSet')}>
                    <AiOutlineSetting />
                </div>
                <div className={cx('user')}>
                    <div className={cx('iconUser')}>
                        <BiUserCircle />
                    </div>
                    <div className={cx('description')}>
                        <p className={cx('position')}>Admin</p>
                        <p className={cx('userName')}>Duy2k2</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
