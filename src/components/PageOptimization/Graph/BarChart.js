import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const barChart = ({ allTasks, targetTask }) => {
    const data = [targetTask];
    return (
        <BarChart
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
            <XAxis dataKey="pageName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="beforeScore" fill="#8884d8" />
            <Bar dataKey="afterScore" fill="#82ca9d" />
        </BarChart>
    );
};

export default barChart;
