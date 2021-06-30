import { IAverageOfOptimization } from '../Type';
import './AverageOfOptimization.scss';
const AverageOfOptimization = ({ indicatorData }: IAverageOfOptimization) => {
    return (
        <div className="inter">
            <div className="average-icon"></div>
            <div>
                <div className="inter-title">優化平均成長</div>
                <div className="inter-value">{indicatorData}％</div>
                <div className="inter-content">備註：效率平均值</div>
            </div>
        </div>
    );
};

export default AverageOfOptimization;
