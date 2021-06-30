import { IComparePage } from '../Type';
import './ComparePage.scss';
const ComparePage = ({ mostEfficientPage }: IComparePage) => {
    return (
        <div className="inter">
            <div className="compare-icon"></div>
            <div>
                <div className="inter-title">優化前後差異最高網頁</div>
                <div className="inter-value">{mostEfficientPage}</div>
                <div className="inter-content">備註：無</div>
            </div>
        </div>
    );
};

export default ComparePage;
