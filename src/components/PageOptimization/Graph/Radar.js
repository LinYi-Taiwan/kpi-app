import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const radar = ({ averageData }) => {
    let data = [];
    for (let [key, value] of Object.entries(averageData)) {
        // console.log(key, value);
        data.push({ name: key, score: value });
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis angle={30} domain={[0, 1]} />
                <Radar name="Average" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default radar;
