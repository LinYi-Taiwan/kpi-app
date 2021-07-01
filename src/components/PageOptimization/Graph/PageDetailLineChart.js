import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import moment from 'moment';

const PageDetailLineChart = ({ pageData, indicatorName }) => {
    return (
        <ResponsiveContainer>
            <LineChart
                // width={343}
                // height={130}

                data={pageData}
                margin={{
                    top: 20,
                    right: 30,
                    left: -20,
                    // bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    tickFormatter={(unixTime) => moment(unixTime).format('M/D')}
                    axisLine={false}
                    label={false}
                    // hide="true"
                    dataKey="createdAt"
                />
                <YAxis axisLine={false} hide="" />
                <Tooltip />
                {/* <Legend layout="horizontal" verticalAlign="bottom" align="center" /> */}
                <Line type="monotone" dataKey={indicatorName} stroke="#ff7f2f" activeDot={{ r: 4 }} dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default PageDetailLineChart;
