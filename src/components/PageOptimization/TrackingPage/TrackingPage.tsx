import { ITrackingPage } from '../Type';

const TrackingPage = ({ page, tagClick }: ITrackingPage) => {
    return (
        <div className="inter">
            <div className="trace-icon"></div>
            <div>
                <div className="inter-title">正在追蹤的網頁</div>
                <div className="tag-box">
                    {page.map((page, index) => (
                        <div className="tag" key={index} onClick={() => tagClick(page.pageName)}>
                            {page.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrackingPage;
