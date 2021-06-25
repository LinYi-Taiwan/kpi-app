const RankOfPage = ({ allTasks }) => {
    return (
        <div className="page-count">
            <div className="title">
                <div className="rank-icon"></div>
                <div className="title-text">網頁優化效率提升排名</div>
            </div>
            {allTasks.slice(0, 8).map((task, index) => (
                <div key={index} className="rank-content" style={{ color: index < 3 ? '#ff7f2f' : '#c0c0c0' }}>
                    <div className="rank-num">{index + 1}</div>
                    <div className="rank-name">{task.gsx$pagename.$t}</div>
                    <div className="rank-score">{task.gsx$efficiency.$t}%</div>
                </div>
            ))}
        </div>
    );
};

export default RankOfPage;
