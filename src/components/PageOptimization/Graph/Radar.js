import {
    Radar,
    RadarChart,
    PolarGrid,
    Legend,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Label,
} from 'recharts';

const radar = ({ averageData }) => {
    let data = [];
    for (let [key, value] of Object.entries(averageData)) {
        // console.log(key, value);
        data.push({ name: key, score: value });
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius="80%" data={data}>
                <PolarGrid stroke="#ffb135" />
                <PolarAngleAxis tick={{ fill: '#707070' }} dataKey="name" color="#707070" />
                <PolarRadiusAxis angle={30} domain={[0, 1]} />
                <Radar
                    name="Average"
                    dataKey="score"
                    stroke="#fdd38f"
                    fill="rgba(255, 229, 59, 0.5)"
                    // fillOpacity={0.6}
                />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default radar;
