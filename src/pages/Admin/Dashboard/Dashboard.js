import FeaturedInfo from '~/components/FeaturedInfo/FeaturedInfo';
import styles from './Dashboard.module.scss';
import classNames from 'classnames/bind';
import Charts from '~/components/Charts/Charts';
import WidgetOrders from '~/components/WidgetOrders/WidgetOrders';
import WidgetTopSell from '~/components/WidgetTopSell/WidgetTopSell';

function Dashboard() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('content')}>
            <div className={cx('dashboardTitle')}>
                <h1>Sales Overview</h1>
                <span>View your current sales & summary</span>
            </div>
            <div className={cx('chart')}>
                <FeaturedInfo />
            </div>
            <Charts />
            <div className={cx('dashboarhWidgets')}>
                <WidgetOrders />
                <WidgetTopSell />
            </div>
        </div>
    );
}

export default Dashboard;
