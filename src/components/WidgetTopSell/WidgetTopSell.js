import styles from './WidgetTopSell.module.scss';
import classNames from 'classnames/bind';

function WidgetTopSell() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('content')}>
            <div className={cx('warraper')}>
                <div className={cx('widgetTopSellTitle')}>Top Selling</div>
                <table className={cx('content-table')}>
                    <thead>
                        <tr>
                            <th>PRODUCT</th>
                            <th>SOLD</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={cx('product')}>
                                <img
                                    src="https://gaumobile.com/images/products/2022/09/15/large/637985738260801133_ip-14-pro-tim_1663227038.png"
                                    alt=""
                                    className={cx('productImg')}
                                />
                                <span className={cx('productTitle')}>Iphone 14 Pro Max</span>
                            </td>
                            <td className={cx('sold')}>206</td>
                        </tr>

                        <tr>
                            <td className={cx('product')}>
                                <img
                                    src="https://anphat.com.vn/media/product/39056_"
                                    alt=""
                                    className={cx('productImg')}
                                />
                                <span className={cx('productTitle')}>Iphone 13 Pro Max</span>
                            </td>
                            <td className={cx('sold')}>176</td>
                        </tr>

                        <tr>
                            <td className={cx('product')}>
                                <img
                                    src="https://shopdunk.com/images/thumbs/0008682_macbook-pro-13-inch-m2-10-core-8gb-ram-256gb-ssd.png"
                                    alt=""
                                    className={cx('productImg')}
                                />
                                <span className={cx('productTitle')}>Apple MacBook Pro M2 Chip</span>
                            </td>
                            <td className={cx('sold')}>125</td>
                        </tr>

                        <tr>
                            <td className={cx('product')}>
                                <img
                                    src="https://cdn.tgdd.vn/Products/Images/54/253802/s16/bluetooth-airpods-pro-magsafe-charge-apple-mlwk3-261121-033421-650x650.png"
                                    alt=""
                                    className={cx('productImg')}
                                />
                                <span className={cx('productTitle')}>Apple AirPods</span>
                            </td>
                            <td className={cx('sold')}>106</td>
                        </tr>

                        <tr>
                            <td className={cx('product')}>
                                <img
                                    src="https://svstore.vn/uploads/source/apple-watch-seri-8/apple-watch-s8-gps-45mm-black-thumbtz-1-650x650.png"
                                    alt=""
                                    className={cx('productImg')}
                                />
                                <span className={cx('productTitle')}>Apple Watch Series 8</span>
                            </td>
                            <td className={cx('sold')}>84</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default WidgetTopSell;
