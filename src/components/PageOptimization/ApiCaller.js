import axios from 'axios';

const PageUrl = window.location.hostname === 'localhost' ? 'http://localhost:3001' : 'https://kpi-node.herokuapp.com';

//From Google Sheet
const OptimizationDataUrl =
    'https://spreadsheets.google.com/feeds/list/1pCvD5tJAirXHWGC4CRDkaLsedSlopYCTkkynSq4RbxI/2/public/values?alt=json';
const IndicatorDataUrl =
    'https://spreadsheets.google.com/feeds/list/1pCvD5tJAirXHWGC4CRDkaLsedSlopYCTkkynSq4RbxI/3/public/values?alt=json';

const ApiCaller = (url) => {
    return axios.get(url);
};

//Get Google Sheet Data
const FetchOptimizationData = ApiCaller(OptimizationDataUrl);
const FetchIndicatorData = ApiCaller(IndicatorDataUrl);

//Get Mongodb Data
const FetchPage = ApiCaller(`${PageUrl}/all-page-name`);
const getAllScore = (pageName) => ApiCaller(`${PageUrl}/all-score/${pageName}`);
const getAverageScore = (pageName) => ApiCaller(`${PageUrl}/average-score/${pageName}`);

export { FetchOptimizationData, FetchIndicatorData, FetchPage, getAllScore, getAverageScore };
