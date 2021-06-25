import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const PageDetailLineChart = ({ pageData, indicatorName }) => {
    return (
        <ResponsiveContainer width="100%">
            <LineChart
                width={343}
                height={130}
                data={pageData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 5,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis mirror={true} tick={false} hide="true" dataKey="createdAt" />
                <YAxis axisLine={false} />
                <Tooltip />
                <Legend verticalAlign="bottom" height={20} />
                <Line type="monotone" dataKey={indicatorName} stroke="#d9812f" activeDot={{ r: 4 }} dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default PageDetailLineChart;
