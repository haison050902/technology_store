import styles from './WidgetOrders.module.scss';
import classNames from 'classnames/bind';

function WidgetOrders() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('content')}>
            <div className={cx('warraper')}>
                <div className={cx('widgetOrderTitle')}>Latest Orders</div>
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
                        <tr>
                            <td className={cx('orderId')}>#95954</td>
                            <td className={cx('orderStatus', 'paid')}>Paid</td>
                            <td className={cx('orderDate')}>30/05/2023</td>
                            <td className={cx('orderCustomer')}>Hai Son</td>
                            <td className={cx('orderTotal')}>$250.00</td>
                        </tr>

                        <tr>
                            <td className={cx('orderId')}>#95954</td>
                            <td className={cx('orderStatus', 'paid')}>Paid</td>
                            <td className={cx('orderDate')}>30/05/2023</td>
                            <td className={cx('orderCustomer')}>Hai Son</td>
                            <td className={cx('orderTotal')}>$250.00</td>
                        </tr>

                        <tr>
                            <td className={cx('orderId')}>#95954</td>
                            <td className={cx('orderStatus', 'pending')}>Pending</td>
                            <td className={cx('orderDate')}>30/05/2023</td>
                            <td className={cx('orderCustomer')}>Hai Son</td>
                            <td className={cx('orderTotal')}>$250.00</td>
                        </tr>

                        <tr>
                            <td className={cx('orderId')}>#95954</td>
                            <td className={cx('orderStatus', 'failed')}>Failed</td>
                            <td className={cx('orderDate')}>30/05/2023</td>
                            <td className={cx('orderCustomer')}>Hai Son</td>
                            <td className={cx('orderTotal')}>$250.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default WidgetOrders;
