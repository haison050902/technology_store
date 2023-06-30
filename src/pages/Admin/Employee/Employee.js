import styles from './Employee.module.scss';
import classNames from 'classnames/bind';
import * as React from 'react';
import DataEmployee from './DataEmployee.json';
import { MdDeleteOutline } from 'react-icons/md';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Employee() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('content')}>
            <h1 className={cx('title')}>Employees</h1>
            <table className={cx('content-table')}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {DataEmployee.map((d, i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.age}</td>
                            <td>{d.gender}</td>
                            <td>{d.email}</td>
                            <td>{d.phone}</td>
                            <td>
                                <Link to={'/employee/' + d.id}>
                                    <HiOutlinePencilAlt className={cx('editEmployee')} />
                                </Link>
                                <MdDeleteOutline className={cx('deleteEmployee')} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Employee;
