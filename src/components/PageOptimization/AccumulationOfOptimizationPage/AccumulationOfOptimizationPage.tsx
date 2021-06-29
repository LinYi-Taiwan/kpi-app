import { IAccumulationOfOptimizationPage } from '../Type';
const AccumulationOfOptimizationPage = ({ projectCount }: IAccumulationOfOptimizationPage) => {
    return (
        <div className="inter">
            <div className="accumulate-icon"></div>
            <div>
                <div className="inter-title">目前累積優化頁面</div>
                <div className="inter-value">{projectCount}件</div>
            </div>
        </div>
    );
};

export default AccumulationOfOptimizationPage;
