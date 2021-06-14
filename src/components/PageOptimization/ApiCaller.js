import axios from 'axios';

const OptimizationDataUrl =
    'https://spreadsheets.google.com/feeds/list/1pCvD5tJAirXHWGC4CRDkaLsedSlopYCTkkynSq4RbxI/2/public/values?alt=json';
const IndicatorDataUrl =
    'https://spreadsheets.google.com/feeds/list/1pCvD5tJAirXHWGC4CRDkaLsedSlopYCTkkynSq4RbxI/3/public/values?alt=json';

const PageUrl = 'https://kpi-node.herokuapp.com';
// const PageUrl = 'http://localhost:3001/all-page-name';

const ApiCaller = (url) => {
    return axios.get(url);
};

const FetchOptimizationData = ApiCaller(OptimizationDataUrl);
const FetchIndicatorData = ApiCaller(IndicatorDataUrl);
const FetchPage = ApiCaller(`${PageUrl}/all-page-name`);

export { FetchOptimizationData, FetchIndicatorData, FetchPage, PageUrl };
