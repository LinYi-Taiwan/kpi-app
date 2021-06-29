import MyLineChart from './Graph/LineChart';
import AllList from './AllList/AllList';
import DetailModal from './DetailModel/DetailModal';
import { useState, useEffect } from 'react';
import './PageOptimization.css';
import AccumulationOfOptimizationPage from './AccumulationOfOptimizationPage/AccumulationOfOptimizationPage';
import AverageOfOptimization from './AverageOfOptimization/AverageOfOptimization';
import ComparePage from './ComparePage/ComparePage';
import RankOfPage from './RankOfPage/RankOfPage';
import TrackingPage from './TrackingPage/TrackingPage';
import { FetchOptimizationData, FetchIndicatorData, FetchPage, getAllScore, getAverageScore } from './ApiCaller';
//import Type
import { IValueIsNumber, ITask, IPage } from './Type';

const PageOptimization = () => {
    const [allTasks, setAllTasks] = useState<ITask[]>([]); //所有專案優化紀錄
    // const [targetTask, setTargetTask] = useState({});
    const [indicatorData, setIndicatorData] = useState<number>(0); //指標數字，如：效能平均
    const [page, setPage] = useState<IPage>([]); //所有的監控頁面
    const [pageData, setPageData] = useState<IValueIsNumber[]>([]); //監控頁面詳細數字，如：FCP、TTB等
    const [mostEfficientPage, setMostEfficientPage] = useState<string>(''); //優化效率最高值
    const [openModal, setOpenModal] = useState<boolean>(false); //開啟modal
    const [projectCount, setProjectCount] = useState<number>(0); //累積優化件數
    const [pageName, setPageName] = useState<string>('');
    const [averageData, setAverageData] = useState<IValueIsNumber>({});
    //function
    const tagClick = (pageName: string) => {
        getAllScore(pageName).then(({ data }) => {
            setPageData(data);
            setPageName(pageName);
        });
        getAverageScore(pageName).then(({ data }) => {
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
                            <AccumulationOfOptimizationPage projectCount={projectCount} />
                            <AverageOfOptimization indicatorData={indicatorData} />
                        </div>
                        <div className="indicator">
                            <TrackingPage page={page} tagClick={tagClick}></TrackingPage>
                            <ComparePage mostEfficientPage={mostEfficientPage}></ComparePage>
                        </div>
                        <RankOfPage allTasks={allTasks}></RankOfPage>
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
                    <AllList allTasks={allTasks}></AllList>
                </div>
            </div>
            <DetailModal
                setOpenModal={setOpenModal}
                pageName={pageName}
                openModal={openModal}
                pageData={pageData}
                averageData={averageData}
            ></DetailModal>
        </div>
    );
};

export default PageOptimization;
