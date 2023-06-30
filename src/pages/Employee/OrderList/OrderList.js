import classNames from 'classnames/bind';
import styles from './OrderList.module.scss';
import { useEffect, useState } from 'react';
import { BsArrowRightSquare } from 'react-icons/bs';

const cx = classNames.bind(styles);

function OrderList() {
    const handleStatus = (id, status) => {
        if (status != 'Complete' && status != 'Canceled') {
            let newStatus;
            switch (status) {
                case 'Processing':
                    newStatus = 'Shipping';
                    break;
                case 'Shipping':
                    newStatus = 'Complete';
                    break;
            }
            const updatedOrderStatus = {
                order_id: id,
                status: newStatus,
            };
            fetch(`http://localhost:3001/orders/update_status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedOrderStatus),
            });

            window.location.reload();
        }
    };

    const [orderListData, SetOrderListData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/orders', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                SetOrderListData(data.listOrder);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <div className={cx('content')}>
            <table className={cx('content-table')}>
                <thead>
                    <tr>
                        <th>ORDER</th>
                        <th>STATUS</th>
                        <th>DATE</th>
                        <th>CUSTOMER</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {orderListData &&
                        orderListData.map((item, index) => (
                            <tr key={index}>
                                <td>#{item.order_id}</td>
                                <td>
                                    {item.status}
                                    <BsArrowRightSquare
                                        className={cx('actionStatus')}
                                        onClick={() => handleStatus(item.order_id, item.status)}
                                    />
                                </td>
                                <td>{item.date}</td>
                                <td>{item.name}</td>
                                <td>{item.total_price}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrderList;
