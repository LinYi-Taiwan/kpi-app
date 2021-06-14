import Form from './Form';
import MyBarChart from './BarChart';
import MyLineChart from './LineChart';
import Radar from './Radar';
import AllList from './AllList';
import DetailModal from './DetailModal';
import { useState, useEffect } from 'react';
import './style/PageOptimization.css';
import axios from 'axios';
import { FetchOptimizationData, FetchIndicatorData, FetchPage, PageUrl } from './ApiCaller';
const PageOptimization = () => {
    const [allTasks, setAllTasks] = useState([]); //所有專案優化紀錄
    const [targetTask, setTargetTask] = useState({});
    const [indicatorData, setIndicatorData] = useState(''); //指標數字，如：效能平均
    const [page, setPage] = useState([]); //所有的監控頁面
    const [pageData, setPageData] = useState([]); //監控頁面詳細數字，如：FCP、TTB等
    const [mostEfficientPage, setMostEfficientPage] = useState(''); //優化效率最高值
    const [openModal, setOpenModal] = useState(false); //開啟modal
    const [projectCount, setProjectCount] = useState(0); //累積優化件數
    const [pageName, setPageName] = useState('');
    const [averageData, setAverageData] = useState({});

    //function
    const tagClick = (pageName) => {
        axios.get(`${PageUrl}/all-score/${pageName}`).then(({ data }) => {
            setPageData(data);
            setPageName(pageName);
        });
        axios.get(`${PageUrl}/average-score/${pageName}`).then(({ data }) => {
            const { _id, ...res } = data[0];
            setAverageData(res);
        });
        setOpenModal(true);
    };

    //fetch fixed data
    useEffect(() => {
        FetchOptimizationData.then(({ data }) => {
            setProjectCount(data.feed.entry.length);
            setAllTasks(data.feed.entry);
            setMostEfficientPage(data.feed.entry[0].gsx$pagename.$t);
        });
        FetchIndicatorData.then(({ data }) => {
            setIndicatorData(data.feed.entry[0].gsx$efficiencyaverage.$t);
        });
        FetchPage.then(({ data }) => {
            setPage(data);
        });
    }, []);

    return (
        <div className="container">
            <div className="topic">Optimization</div>

            <div className="page-optimization">
                {/* <Form allTasks={allTasks} setAllTasks={setAllTasks}></Form> */}
                {/* <MyBarChart allTasks={allTasks} targetTask={targetTask}></MyBarChart> */}
                <div>
                    <div className="graph-up">
                        <div className="indicator">
                            <div className="inter">
                                <div className="accumulate-icon"></div>
                                <div>
                                    <div className="inter-title">目前累積優化頁面</div>
                                    <div className="inter-value">{projectCount}件</div>
                                </div>
                            </div>
                            <div className="inter">
                                <div className="average-icon"></div>
                                <div>
                                    <div className="inter-title">優化平均成長</div>
                                    <div className="inter-value">{indicatorData}％</div>
                                    <div className="inter-content">備註：效率平均值</div>
                                </div>
                            </div>
                        </div>
                        <div className="indicator">
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
                                    <DetailModal
                                        setOpenModal={setOpenModal}
                                        pageName={pageName}
                                        openModal={openModal}
                                        page={page}
                                        pageData={pageData}
                                        averageData={averageData}
                                    ></DetailModal>
                                </div>
                            </div>
                            <div className="inter">
                                <div className="compare-icon"></div>
                                <div>
                                    <div className="inter-title">優化前後差異最高網頁</div>
                                    <div className="inter-value">{mostEfficientPage}</div>
                                    <div className="inter-content">備註：無</div>
                                </div>
                            </div>
                        </div>
                        <div className="page-count">
                            <div>
                                <div className="title">
                                    <div className="rank-icon"></div>
                                    <div className="title-text">網頁優化效率提升排名</div>
                                </div>
                                {allTasks.slice(0, 8).map((task, index) => (
                                    <div
                                        key={index}
                                        className="rank-content"
                                        style={{ color: index < 3 ? '#ff7f2f' : '#c0c0c0' }}
                                    >
                                        <div className="rank-num">{index + 1}</div>
                                        <div className="rank-name">{task.gsx$pagename.$t}</div>
                                        <div className="rank-score">{task.gsx$efficiency.$t}%</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="line-chart-container">
                        <div className="inter">
                            <div className="indicator-icon"></div>
                            <div className="inter-title">專案績效分佈</div>
                        </div>
                        <MyLineChart indicatorData={indicatorData} allTasks={allTasks}></MyLineChart>
                    </div>
                </div>
                <div className="all-list-container">
                    <AllList allTasks={allTasks} setTargetTask={setTargetTask}></AllList>
                </div>
            </div>
        </div>
    );
};

export default PageOptimization;
