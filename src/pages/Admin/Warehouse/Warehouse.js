import styles from './Warehouse.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { HiOutlinePencil } from 'react-icons/hi';

function Warehouse() {
    const Status = ({ type }) => {
        if (type == 'UIT') {
            return <span className={cx('statusPrepared')}>{type}</span>;
        }
    };

    const [orderListData, SetOrderListData] = useState(null);
    useEffect(() => {
        fetch('http://127.0.0.1:5500/src/pages/Admin/Warehouse/OrderListData.json')
            .then((res) => {
                return res.json();
            })
            .then((resp) => {
                SetOrderListData(resp);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    const cx = classNames.bind(styles);
    return (
        <div className={cx('content')}>
            <div className={cx('addProduct')}>
                <h1>Warehouse</h1>

                <button className={cx('btnAddProduct')}>
                    <AiOutlinePlusCircle className={cx('plusIcon')} />
                    Add Inventory
                </button>
            </div>
            <table className={cx('content-table')}>
                <thead>
                    <tr>
                        <th>ORDER</th>
                        <th>SUPPLIER</th>
                        <th>DATE</th>
                        <th>QUANTITY</th>
                        <th>TOTAL</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {orderListData &&
                        orderListData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    <Status type={item.status} />
                                </td>
                                <td>{item.date}</td>
                                <td>{item.customerName}</td>
                                <td>{item.total}</td>
                                <td className={cx('action')}>
                                    <HiOutlinePencil />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default Warehouse;
