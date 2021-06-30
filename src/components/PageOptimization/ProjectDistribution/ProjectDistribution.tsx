import MyLineChart from '../Graph/LineChart';
import { IProjectDistributionProps } from '../Type';
import './ProjectDistribution.scss';
const ProjectDistribution = ({ indicatorData, allTasks }: IProjectDistributionProps) => {
    return (
        <div>
            <div className="inter">
                <div className="indicator-icon"></div>
                <div className="inter-title">專案績效分佈</div>
            </div>
            <MyLineChart indicatorData={indicatorData} allTasks={allTasks}></MyLineChart>
        </div>
    );
};

export default ProjectDistribution;
