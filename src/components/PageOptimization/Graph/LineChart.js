import {
    ResponsiveContainer,
    ComposedChart,
    ReferenceLine,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
const lineChart = ({ allTasks, indicatorData }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
                data={allTasks}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: -10,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="gsx$pagename.$t" scale="band"></XAxis>
                {/* <YAxis domain={[0, 'dataMax + 50']} allowDataOverflow={true} /> */}
                <YAxis />
                <Tooltip />
                <ReferenceLine y={indicatorData} label="Average" stroke="red" strokeDasharray="3 3" />
                <Legend payload={{ value: '123', id: 1 }} />
                <Bar dataKey={(x) => parseFloat(x.gsx$efficiency.$t)} barSize={20} fill="#ff7f2f" />
                <Line type="monotone" dataKey="gsx$efficiency.$t" stroke="#413ea0" />
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default lineChart;
