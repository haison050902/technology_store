import styles from './Charts.module.scss';
import classNames from 'classnames/bind';
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '01 Jan',
        Counter: 18,
        Online: 24,
    },
    {
        name: '02 Jan',
        Counter: 32,
        Online: 28,
    },
    {
        name: '03 Jan',
        Counter: 45,
        Online: 30,
    },
    {
        name: '04 Jan',
        Counter: 46,
        Online: 35,
    },
    {
        name: '05 Jan',
        Counter: 56,
        Online: 46,
    },
    {
        name: '06 Jan',
        Counter: 34,
        Online: 56,
    },
    {
        name: '07 Jan',
        Counter: 52,
        Online: 58,
    },
];

function Charts() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('charts')}>
            <div className={cx('chartsTitle')}>Sales Report</div>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="Counter" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Online" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Charts;
