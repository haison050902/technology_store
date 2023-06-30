import styles from './FeaturedInfo.module.scss';
import classNames from 'classnames/bind';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

function FeaturedInfo() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('featured')}>
            <div className={cx('featuredItem')}>
                <div className={cx('featuredItemContent')}>
                    <span className={cx('featuredTitle')}>Revenue</span>
                    <div className={cx('featuredMoneyContainer')}>
                        <span className={cx('featuredMoney')}>$2,415</span>
                        <span className={cx('featuredMoneyRate', 'negative')}>
                            -11.4%
                            <AiOutlineArrowDown />
                        </span>
                    </div>
                    <span className={cx('featuredSub')}>vs. 3 months prior to 27 Feb</span>
                </div>
            </div>

            <div className={cx('featuredItem')}>
                <div className={cx('featuredItemContent')}>
                    <span className={cx('featuredTitle')}>Orders</span>
                    <div className={cx('featuredMoneyContainer')}>
                        <span className={cx('featuredMoney')}>$2,415</span>
                        <span className={cx('featuredMoneyRate')}>
                            11.4%
                            <AiOutlineArrowUp />
                        </span>
                    </div>
                    <span className={cx('featuredSub')}>vs. 3 months prior to 27 Feb</span>
                </div>
            </div>

            <div className={cx('featuredItem')}>
                <div className={cx('featuredItemContent')}>
                    <span className={cx('featuredTitle')}>Purchases</span>
                    <div className={cx('featuredMoneyContainer')}>
                        <span className={cx('featuredMoney')}>$2,415</span>
                        <span className={cx('featuredMoneyRate', 'negative')}>
                            -11.4%
                            <AiOutlineArrowDown />
                        </span>
                    </div>
                    <span className={cx('featuredSub')}>vs. 3 months prior to 27 Feb</span>
                </div>
            </div>
        </div>
    );
}

export default FeaturedInfo;
