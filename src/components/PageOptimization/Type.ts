import { Dispatch, SetStateAction } from 'react';

//Common Type
export type IValueIsNumber = {
    [index: string]: number;
};

//AllList.tsx & RankOfPage
type TaskInner = {
    $t: string;
};

export type ITask = {
    gsx$pagename: TaskInner;
    gsx$efficiency: TaskInner;
    gsx$createtime: TaskInner;
};

export type AllListType = {
    allTasks: ITask[];
    setTargetTask?: Dispatch<SetStateAction<Array<any>>>;
};

//DetailModal.tsx
export type IDetailModal = {
    pageName: string;
    pageData: IValueIsNumber[];
    averageData: IValueIsNumber;
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
};

//ComparePage.tsx
export type IComparePage = {
    mostEfficientPage: string;
};

//AverageOfOptimization.tsx
export type IAverageOfOptimization = {
    indicatorData: number;
};

//TrackingPage.tsx
export type IPage = {
    pageName: string;
    name: string;
}[];

export type ITrackingPage = {
    page: IPage;
    tagClick(page: string): void;
};

//AccumulationOfOptimizationPage

export type IAccumulationOfOptimizationPage = {
    projectCount: number;
};
