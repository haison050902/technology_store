import styles from '../Employee/Employee.module.scss';
import classNames from 'classnames/bind';
import * as React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Invoice() {
    const [invoiceData, setInvoiceData] = useState(null);
    useEffect(() => {
        fetch('http://localhost:3001/invoices')
            .then((res) => {
                return res.json();
            })
            .then((resp) => {
                setInvoiceData(resp.listInvoice);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const cx = classNames.bind(styles);
    return (
        <div className={cx('content')}>
            <h1 className={cx('title')}>Invoices</h1>
            <table className={cx('content-table')}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Total</th>
                        <th>Date</th>
                        <th>Employee</th>
                    </tr>
                </thead>
                <tbody>
                    {invoiceData?.map((d, i) => (
                        <tr key={i}>
                            <td>{d.invoice_id}</td>
                            <td>{d.total_price}</td>
                            <td>{d.date}</td>
                            <td>{d.employee_id}</td>
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

export default Invoice;
