import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import config from '~/config';
import styles from './HeaderEmployee.module.scss';
import images from '~/assets/images';
import Search from '../Search';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineSetting } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiUserCircle } from 'react-icons/bi';
import { useState } from 'react';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HeaderEmployee() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('employee');
        navigate('/login');
    };
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
                <div onClick={handleLogout} style={{ cursor: 'pointer' }} className={cx('iconSet')}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
                </div>
                <div className={cx('user')}>
                    <div className={cx('iconUser')}>
                        <BiUserCircle />
                    </div>
                    <div className={cx('description')}>
                        <p className={cx('position')}>Employee</p>
                        <p className={cx('userName')}>{localStorage.getItem('employee')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderEmployee;
